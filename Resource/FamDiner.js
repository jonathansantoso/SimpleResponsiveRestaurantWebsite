//VALIDATION REGISTER PAGE
var errorElement1 = document.getElementById('error1');
var errorElement2 = document.getElementById('error2');
var errorElement3 = document.getElementById('error3');
var errorElement4 = document.getElementById('error4');

chkstr = function (validation) {
    var name = document.getElementById('textt1').value;
    if (name == "" || name == null) {
        errorElement1.innerHTML = "Nama harus diisi";
        errorElement1.style.color = "Red";
        return (true);
    }
    errorElement1.innerHTML = "Nama Valid";
    errorElement1.style.color = "Green";
    return (true);
    chkpwd();
}
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; if
        (inputText.value.match(mailformat)) {
        errorElement2.innerHTML = "Email valid";
        errorElement2.style.color = "Green";
        document.form1.emailtext;
    } else {
        errorElement2.innerHTML = "Email tidak valid";
        errorElement2.style.color = "red";
        document.form1.emailtext;
    }
}
chkpwd = function (validation) {
    var password = document.getElementById('passwordinputRegister').value;
    if (password == "" || password == null) {
        errorElement3.innerHTML = "Password harus diisi";
        errorElement3.style.color = "Red";
        return (true);
    } if
        (password.length < 7) {
        errorElement3.innerHTML = "Password harus 8 character";
        errorElement3.style.color = "Red";
        return (true);
    } if (password.search(/[0-9]/) == -1) {
        errorElement3.innerHTML = "Password harus ada angka";
        errorElement3.style.color = "Red";
        return (true);
    } if (password.search(/[A-Z]/) == -1) {
        errorElement3.innerHTML = "Password harus ada huruf kapital";
        errorElement3.style.color = "Red";
        return (true);
    }
    errorElement3.innerHTML = "Password valid";
    errorElement3.style.color = "Green";
    return (true);
    chkConfirmPwd();
}
chkConfirmPwd = function (validation) {
    var pwd = document.getElementById('passwordinputRegister').value;
    var confirmPassword = document.getElementById('conPwdRegister').value;
    if (confirmPassword != pwd || confirmPassword == null || confirmPassword == "") {
        errorElement4.innerHTML = "Password dan Confirm password tidak sinkron";
        errorElement4.style.color = "red";
        return (true);
    }
    errorElement4.innerHTML = "Confirmed passwod";
    errorElement4.style.color = "Green";
    return (true);
}

//VALIDATION login PAGE

var errorEmailLogin = document.getElementById('error1');
var errorPasswordLogin = document.getElementById('error2');

chkEmailLogin = function (LoginCheck) {
    var emailInput = document.getElementById('emailLoginPage').value;
    if (emailInput == "" || emailInput == null) {
        errorEmailLogin.innerHTML = "Email harus diisi";
        errorEmailLogin.style.color = "Red";
        return (true);
    }
    errorEmailLogin.innerHTML = "Email valid";
    errorEmailLogin.style.color = "Green";
    return (true);

}

chkPasswordLogin = function (LoginCheck) {
    var passwordInput = document.getElementById('passwordLoginPage').value;
    if (passwordInput == "" || passwordInput == null) {
        errorPasswordLogin.innerHTML = "Password harus diisi";
        errorPasswordLogin.style.color = "red";
        return (true);
    }
    errorPasswordLogin.innerHTML = "Password valid";
    errorPasswordLogin.style.color = "green";
    return (true);
}

//change active navbar-item












        // //VALIDATION login PAGE

        // var errorEmailLogin = document.getElementById('error1');
        // var errorPasswordLogin = document.getElementById('error2');

        // chkEmailLogin = function (LoginCheck) {
        //     var emailInput = document.getElementById('emailLoginPage').value;
        //     if (emailInput == "" || emailInput == null) {
        //         errorEmailLogin.innerHTML = "Email harus diisi";
        //         errorEmailLogin.style.color = "Red";
        //         return (true);
        //     }
        //     errorEmailLogin.innerHTML = "Email teriisi";
        //     errorEmailLogin.style.color = "Green";
        //     return (true);

        // }

        // chkPasswordLogin = function (LoginCheck) {
        //     var passwordInput = document.getElementById('passwordLoginPage').value;
        //     if (passwordInput == "" || passwordInput == null) {
        //         errorPasswordLogin.innerHTML = "Password harus diisi";
        //         errorPasswordLogin.style.color = "red";
        //         return (true);
        //     }
        //     errorPasswordLogin.innerHTML = "Password terisi";
        //     errorPasswordLogin.style.color = "green";
        //     return (true);
        // }























// var errorElement1 = document.getElementById('error1')
// var errorElement2 = document.getElementById('error2')
// var errorElement3 = document.getElementById('error3')
// var errorElement4 = document.getElementById('error4')
// var password = document.getElementById('passwordinputRegister').value;
// var confirmPassword = document.getElementById('conPwdRegister').value;

// chkstr = function (validation) {
//     var name = document.getElementById('textt1').value;
//     if (name == "" || name == null) {
//         errorElement1.innerHTML = "Nama harus diisi"
//         errorElement1.style.color = "Red";
//         return (true);
//     }
//     errorElement1.innerHTML = "";
//     errorElement1.style.color = "";
//     return (true);
//     chkpwd();
// }

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         errorElement2.innerHTML = "";
//         errorElement2.style.color = "";
//         document.form1.emailtext;
//     }
//     else {
//         errorElement2.innerHTML = "email tidak valid";
//         errorElement2.style.color = "red";
//         document.form1.emailtext;
//     }
// }

// chkpwd = function (validation) {
//     if (password == "" || password == null) {
//         errorElement3.innerHTML = "password harus diisi"
//         errorElement3.style.color = "Red";
//         return (true);
//     } if (password.length < 7) {
//         errorElement3.innerHTML = "password harus 8 character";
//         errorElement3.style.color = "Red";
//         return (true);
//     } if (password.search(/[0-9]/) == -1) {
//         errorElement3.innerHTML = "password harus ada angka";
//         errorElement3.style.color = "Red";
//         return (true);
//     } if (password.search(/[A-Z]/) == -1) {
//         errorElement3.innerHTML = "password harus ada huruf kapital"
//         errorElement3.style.color = "Red";
//         return (true);
//     }
//     errorElement3.innerHTML = ""
//     errorElement3.style.color = "";
//     return (true);
//     chkConfirmPwd();
// }


// chkConfirmPwd = function (validation) {
//     if (password != confirmPassword || password == null || password == "") {
//         errorElement4.innerHTML = "Password dan Confirm password tidak sinkron";
//         errorElement4.style.color = "red";
//         return (true);
//     }
//     errorElement4.innerHTML = "";
//     errorElement4.style.color = "";
//     return (true);
// }




// validateRegister

// chkpwd = function (validateRegister) {
//     var str = document.getElementById('textt1').value;
//     if (str.length < 8) {
//         document.getElementById('error1').innerHTML = "passowrd lenght must be 8 characters";
//         document.getElementById('error1').style.color = "Red";
//         return ("too_short");
//     } else if (str.search(/[0-9]/) == -1) {
//         document.getElementById('error1').innerHTML = "passowrd lenght must be 8 characters";
//         document.getElementById('error1').style.color = "Red";
//         return ("too_short");
//     } else if (str.search(/[A-Z]/) == -1) {
//         document.getElementById('error1').innerHTML = "passowrd lenght must be 8 characters";
//         document.getElementById('error1').style.color = "Red";
//         return ("too_short");
//     } else if (str.search(/[a-z]/) == -1) {
//         document.getElementById('error1').innerHTML = "passowrd lenght must be 8 characters";
//         document.getElementById('error1').style.color = "Red";
//         return ("too_short");
//     } else if (str.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\,\.\;\:]/) == -1) {
//         document.getElementById('error1').innerHTML = "passowrd lenght must be 8 characters";
//         document.getElementById('error1').style.color = "Red";
//         return ("too_short");
//     }
// }