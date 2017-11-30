function jsonTimeStamp(milliseconds) {
    if (milliseconds != "" && milliseconds != null
        && milliseconds != "null") {
        var datetime = new Date();
        datetime.setTime( milliseconds );
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1 < 10 ? "0"
        + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var date = datetime.getDate() < 10 ? "0" + datetime.getDate()
            : datetime.getDate();
        var hour = datetime.getHours() < 10 ? "0" + datetime.getHours()
            : datetime.getHours();
        var minute = datetime.getMinutes() < 10 ? "0"
        + datetime.getMinutes() : datetime.getMinutes();
        var second = datetime.getSeconds() < 10 ? "0"
        + datetime.getSeconds() : datetime.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute
            + ":" + second;
    } else {
        return "";
    }
}

var cookie = {
    // 设置cookie
    set : function (name, value, expires, domain, path, secure) {
        var cookieText = "";
        cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires) {
            var date = new Date();
            date.setTime(date.getTime() + expires * 24 * 3600 * 1000);
            cookieText += "; expires=" + date.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    // name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
    // 获取cookie
    get : function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = "";
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf (";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    // 删除cookie
    delete : function (name, domain, path, secure) {
        this.set(name, "", Date(0), domain, path, secure);
    }
};