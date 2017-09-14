//加进度条
NProgress.start();
window.onload = function() {
    NProgress.done();
}

//判断用户是否登录，登录过跳到首页，其他页面没登录过的跳到登录页面，通过location.pathname验证是否在登录页面
var isLogin = !!$.cookie("PHPSESSID"); //通过cookie可以验证是否已登录后台验证PHPSESSID
var isLoginPage = location.pathname == "/dist/html/user/login.html"
if (isLogin && isLoginPage) {
    location.href = '/dist';
} else if (!isLogin && !isLoginPage) {
    location.href = "/dist/html/user/login.html";
}