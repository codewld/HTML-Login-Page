function fun() {
    let name = document.getElementsByClassName("name")[0];
    let inputPassword = document.getElementsByClassName("inputPassword")[0];
    let password = document.getElementsByClassName("password")[0];

    if (name.value == "" || inputPassword.value == "") {
        alert("请输入账号和密码！");
        return false;
    } else if (name.value !== "admin") {
        alert("账号或密码错误！");
        return false;
    } else {
        password.value = md5(inputPassword.value);
        alert("登录成功，正在进入！");
        return true;
    }
}

/*
function button() {
    setTimeout(wasteTime,1000);
}

function wasteTime() {
    alert("浪费了3秒钟");
}

function beiFen() {

}
 */