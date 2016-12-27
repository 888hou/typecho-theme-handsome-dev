$(document).ready(function(){
    $('.page-navigator').addClass("pagination pagination-md");
    $('#comments .page-navigator').addClass("pagination-sm");
    $('.page-navigator .current').addClass("active");
    $('#comments .reply a').addClass("comment-reply-link label bg-info");
    $('#comments .comment-list').addClass("list-unstyled m-b-none");
    $('#comments .cancel-comment-reply a').addClass("label bg-primary m-l-xs");
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
        if(!((/[\u4e00-\u9fa5]{2,}/g.test(comment)) || (/[0-9]{5,}/g.test(comment)))){
            toastr.info("至少输入2个中文或5个数字");
            $("#comment").focus();
            return false;
        }
        if(author==""){
            toastr.info("昵称还没有填写呢");
            $("#author").focus();
            return false;
        }
        if(mail==""){
            toastr.info("邮箱是要填写的");
            $("#mail").focus();
            return false;
        }
        $('#submit').addClass("active");
        $('#spin').addClass("show inline");
        //$('input').attr("disabled",true);//将input元素设置为disabled
        //$('textarea').attr("disabled",true);//将input元素设置为disabled
        //$('button').attr("disabled",true);//将input元素设置为disabled
        $("#comment_form").submit();
    });
    $("#login-submit").click(function(){
        $('#login-submit').addClass("active");
        $('#spin-login').addClass("show inline");
    });
});

console.log('\n %c theme handsome v1.5.2 %c by友人C<ihewro.com> 2016/12/10 \n\n','color:#444;background:#eee;padding:5px 0;border-top-left-radius:5px;border-bottom-left-radius:5px;', 'color:#eee;background:#444;padding:5px 0;border-top-right-radius:5px;border-bottom-right-radius:5px;');
/*希望使用本主题能够保留本行注释QWQ*/

var ody=document.getElementById('ydmc');
if (yaudio.paused) {
ody.className = 'iconfont icon-player';
} else {
ody.className = 'iconfont icon-music icon-spin-music';
}