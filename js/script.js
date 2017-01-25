"use strict";
//手机端点击空白区域撤销菜单 
$(".off-screen-toggle").click(function(){
  $('#aside').toggleClass('off-screen');
});
$(document).ready(function(){
    $('.wrapper-lg img').attr('onclick', 'window.open(this.src);');
    $('.wrapper-lg p:has(img:not(img[alt^="!"]))').addClass('imgcenter');
    var comment_html = document.getElementById("comment");
    $('#image-insert').bind("click",function(){
    	var adress=prompt("请输入图片地址", "http://");
    	if (adress) {
    		comment_html.value += '<img src="' + adress + '" rel="external nofollow" class="b b-a wrapper-xs bg-white img-responsive pic-time">';
    	}
    });
    $("#submit").click(function(){
        var author = $("#author").val();
        var mail = $("#mail").val();
        var comment = $("#comment").val();
        if(comment==""){
            toastr.info("请填写内容");
            $("#comment").focus();
            return false;
        }
        if(author==""){
            toastr.info("请填写昵称");
            $("#author").focus();
            return false;
        }
        if(mail==""){
            toastr.info("请填写邮箱");
            $("#mail").focus();
            return false;
        }
        $('#submit').addClass("active");
        $('#spin').addClass("show inline");
        //$('button').attr('disabled', true).fadeTo('slow', 0.5);//提交按钮
        //$('input').attr("disabled",true);//将input元素设置为disabled
        //$('textarea').attr("disabled",true);//将input元素设置为disabled
        $("#comment_form").submit();
        //alert("I am an alert box!!");
    });
    $("#login-submit").click(function(){
        $('#login-submit').addClass("active");
        $('#spin-login').addClass("show inline");
    });
});
/*搜索监控*/
var bb=$("#soux").attr("href");
$("#soux").attr("href",""); 
$('#keyword').bind('input propertychange', function () {
  var aa=$("input[name=s]").val();
$("#soux").attr("href",bb+aa); 
});

function getKey() {
    if (event.keyCode == 13) {
        $('#soux').get(0).click();
    }
}
function cookiesave(n, v, mins, dn, path) {
    if (n) {
        if (!mins) mins = 1 * 24 * 60;
        if (!path) path = "/";
        var date = new Date();
        date.setTime(date.getTime() + (mins * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        if (dn) dn = "domain=" + dn + "; ";
        document.cookie = n + "=" + v + expires + "; " + dn + "path=" + path;
    }
}
function cookieget(n) {
    var name = n + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
function closeclick() {
    document.getElementById('note').style.display = 'none';
    cookiesave('closeclick', 'closeclick', '', '', '');
    var bodyelement = document.getElementById("body");
    bodyelement.style.overflow = "inherit";
}
function clickclose() {//根据cookie判断是否显示div
    if (cookieget('closeclick') == 'closeclick') {
        document.getElementById('note').style.display = 'none';
    } else {
        var bodyelement = document.getElementById("body");
        bodyelement.style.overflow = "hidden";
        document.getElementById('note').style.display = 'block';
    }
}

function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 10;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0; 
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;

   // 滚动条到页面顶部的水平距离
   var x = Math.max(x1, Math.max(x2, x3));
   // 滚动条到页面顶部的垂直距离
   var y = Math.max(y1, Math.max(y2, y3));

   // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));

   // 如果距离不为零, 继续调用函数
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
}

console.log('\n %c handsome v2.0 %c by友人C<ihewro.com>\n\n','color:#444;background:#eee;padding:5px 0;', 'color:#eee;background:#444;padding:5px 0;');
/*希望使用本主题能够保留本行注释QWQ*/