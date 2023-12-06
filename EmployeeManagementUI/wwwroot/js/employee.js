$(document).ready(function () {
    $(".delete").on("click", function (e) {
        e.preventDefault();
        var employeeId = $(this).data("employee-id");
        $("#employeeId").val(employeeId);
    });

    $("#deleteForm").on("submit", function (e) {
        e.preventDefault();
        var employeeId = $("#employeeId").val();
        window.location.href = "/Employee/Delete/" + employeeId;
    });

    $('#saveEmployee').click(function () {
        var employee = {};

        $('[data-employee-add]').each(function () {
            var key = $(this).data('employee-add');
            var value;

            if ($(this).is('input[type="radio"]')) {
                if ($(this).is(':checked')) {
                    value = $(this).val();
                    employee[key] = value;
                }
            } else {
                value = $(this).val();
                employee[key] = value;
            }
        });

        var employeeModel = {
            employeeId: 0,
            firstName: employee['firstName'],
            lastName: employee['lastName'],
            gender: employee['gender'],
            birthDate: employee['birthDate'],
            email: employee['email'],
            phoneNumber: employee['phoneNumber']
        };

        validateEmployeeData(employee);

        if (!validateEmail(employee['email'])) {
            alert('Gecerli bir e-posta adresi giriniz.');
            return;
        }

        if (!validatePhoneNumber(employee['phoneNumber'])) {
            alert('Gecerli bir telefon numarasi giriniz.');
            return;
        }

        var isValidAge = validateAge(employee['birthDate']);
        if (!isValidAge) {
            alert('Yasiniz 18 yasindan kucuk olmamalidir.');
            return;
        }

        var employeeJSON = JSON.stringify(employee);

        $.ajax({
            url: '/Employee/Create',
            method: 'POST',
            data: employeeJSON,
            contentType: 'application/json',
        });

        $('#addEmployeeModal').modal('hide');
        location.href = location.href;

    });

    $('.edit').on('click', function () {
        var employeeId = $(this).data('employee-id');
        var firstName = $(this).data('employee-firstName');
        var lastName = $(this).data('employee-lastName');
        var email = $(this).data('employee-email');
        var gender = $(this).data('employee-gender');
        var birthDate = $(this).data('employee-birthDate');
        var phoneNumber = $(this).data('employee-phoneNumber');

        $('#employeeId').val(employeeId);
        $('[data-employee-edit="firstName"]').val(firstName);
        $('[data-employee-edit="lastName"]').val(lastName);
        $('[data-employee-edit="email"]').val(email);
        $('[data-employee-edit="gender"]').prop('checked', false);
        $('[data-employee-edit="gender"][value="' + gender + '"]').prop('checked', true);
        $('[data-employee-edit="birthDate"]').val(birthDate);
        $('[data-employee-edit="phoneNumber"]').val(phoneNumber);

        //$('#editEmployeeModal').modal('show');
    });

    $('#editEmployee').click(function () {
        var employee = {};

        $('[data-employee-edit]').each(function () {
            var key = $(this).data('employee-edit');
            var value;

            if ($(this).is('input[type="radio"]')) {
                if ($(this).is(':checked')) {
                    value = $(this).val();
                    employee[key] = value;
                }
            } else {
                value = $(this).val();
                employee[key] = value;
            }
        });

        var employeeModel = {
            employeeId: employee['employeeId'],
            firstName: employee['firstName'],
            lastName: employee['lastName'],
            gender: employee['gender'],
            birthDate: employee['birthDate'],
            email: employee['email'],
            phoneNumber: employee['phoneNumber']
        };

        validateEmployeeData(employee);

        if (!validateEmail(employee['email'])) {
            alert('Gecerli bir e-posta adresi giriniz.');
            return;
        }

        if (!validatePhoneNumber(employee['phoneNumber'])) {
            alert('Gecerli bir telefon numarasi giriniz.');
            return;
        }

        var isValidAge = validateAge(employee['birthDate']);
        if (!isValidAge) {
            alert('Yasiniz 18 yasindan kucuk olmamalidir.');
            return;
        }

        var employeeJSON = JSON.stringify(employee);
        var employeeId = employee['employeeId'];

        $.ajax({
            url: '/Employee/Edit',
            method: 'POST',
            data: {
                id: employeeId,
                employeeJson: employeeJSON
            }
        });
    });
});

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    var phoneRegex = /^5\d{9}$/;
    return phoneRegex.test(phoneNumber);
}

function validateEmployeeData(employee) {
    if (!employee['firstName'] || !employee['lastName'] || !employee['gender'] || !employee['birthDate'] || !employee['email'] || !employee['phoneNumber']) {
        alert('Lütfen tüm alanlarý doldurun!');
        return false;
    }
    return true;
}

function validateAge(birthDate) {
    var today = new Date();
    var birth = new Date(birthDate);
    var age = today.getFullYear() - birth.getFullYear();
    var month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    if (age < 18) {
        return false;
    }

    return true;
}