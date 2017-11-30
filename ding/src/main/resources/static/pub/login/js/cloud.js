// Cloud Float...
$(function () {
    var $main = $cloud = mainwidth = null;
    var offset1 = 450;
    var offset2 = 0;
    var offsetbg = 0;
    $(document).ready(
        function () {
            $main = $("#mainBody");
            $body = $("body");
            $cloud1 = $("#cloud1");
            $cloud2 = $("#cloud2");

            mainwidth = $main.outerWidth();

        }
    );
    $(function(){
        $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
        $(window).resize(function(){
            $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
        });
        //得到焦点
        $("#password").focus(function(){
            $("#left_hand").animate({
                left: "150",
                top: " -38"
            },{step: function(){
                if(parseInt($("#left_hand").css("left"))>140){
                    $("#left_hand").attr("class","left_hand");
                }
            }}, 2000);
            $("#right_hand").animate({
                right: "-64",
                top: "-38px"
            },{step: function(){
                if(parseInt($("#right_hand").css("right"))> -70){
                    $("#right_hand").attr("class","right_hand");
                }
            }}, 2000);
        });
        //失去焦点
        $("#password").blur(function(){
            $("#left_hand").attr("class","initial_left_hand");
            $("#left_hand").attr("style","left:100px;top:-12px;");
            $("#right_hand").attr("class","initial_right_hand");
            $("#right_hand").attr("style","right:-112px;top:-12px");
        });
    });
/// 椋樺姩
    setInterval(function flutter() {
        if (offset1 >= mainwidth) {
            offset1 =  -580;
        }

        if (offset2 >= mainwidth) {
            offset2 =  -580;
        }

        offset1 += 1.1;
        offset2 += 1;
        $cloud1.css("background-position", offset1 + "px 100px")

        $cloud2.css("background-position", offset2 + "px 460px")
    }, 70);


    setInterval(function bg() {
        if (offsetbg >= mainwidth) {
            offsetbg =  -580;
        }

        offsetbg += 0.9;
        $body.css("background-position", -offsetbg + "px 0")
    }, 90 );

///页面登陆跳转
    $("form").on("submit",function (e) {
        e.preventDefault();
        var data = {
            sysUserName: this.username.value,
            password: this.password.value
        };
      $.ajax({
          contentType: 'application/json;charset=UTF-8',
          url:"/auth/sysLogin",
          type:"post",
          data:JSON.stringify(data),
          dataType:"json",
          success:function (res) {
              if(res.flag){
                  window.location.href="index.html";
              }else {
                  myalert("账号或密码错误，请重新登录!")
              }
          }
      })

    })
});

function myalert(){
    var box = document.createElement("div");
    var box1 = document.createElement("div");
    var button = document.createElement("button");
    var boxName = {
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.1)",
        position:"fixed",
        top:"0",
        left:"0",
        zIndex:"999"

    }
    var boxName1 = {
        width:"300px",
        height:"150px",
        "border-radius": "10px",
        color:"#f00",
        backgroundColor:"#eee",
        position:"absolute",
        display: 'table-cell',
        'vertical-align': 'middle',
        top:"50%",
        left:"50%",
        margin:"-75px 0 0 -150px",
        zIndex:"999",
        textAlign:"center"
    };
    for(var i in boxName1){
        box1.style[i]=boxName1[i];
    }
    for(var k in boxName){
        box.style[k] = boxName[k];
    }

    document.body.appendChild(box);
    box.appendChild(box1);
    if(arguments[0]){
        box1.innerHTML ="<h2 style='line-height:40px;font-size: 20px; color:#000'>来自小马快修消息提醒：</h2><span style='width:100%;position: absolute;left:50%;top: 50%; transform:translate(-50%,-50%)' >"+ arguments[0]+"</span>";
    }
    button.innerHTML = "关闭";

    var btnName = {
        border:"1px solid #ccc",
        backgroundColor:"#3385ff",
        "border-radius": "5px",
        width:"70px",
        height:"30px",
        textAlign:"center",
        lineHeight:"30px",
        outline:"none",
        position:"absolute",
        bottom:"10px",
        right:"20px",
    }
    for(var j in btnName){
        button.style[j] = btnName[j];
    }

    box1.appendChild(button);
    setTimeout(function () {
        box.style.display = "none";
    },1500)
    button.addEventListener("click",function(){
        box.style.display = "none";
    })
}

/**
 * Created by LENOVO on 2017/9/26.
 */
