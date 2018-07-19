/**
 * Created by Administrator on 2018/6/25.
 */
$(function () {
    $(".location1").mouseover(function(){
        $(".location2").show();
        $(".location1").css("background-color","white")
    });
   //以下为两个事件同事触发执行效果
    function two(){
        $(".location2").hide();
        $(".location1").removeAttr("style");
    }
    $(".location1").mouseleave(two);
    $(".location2").mouseover(function(){//这一行code目的是鼠标脱离location1后，
        $(".location2").show();//空隙进入location2不至于立刻执行
        $(".location1").css("background-color","white")
    }).mouseleave(two);

    //我的京东
    $("#wdjd").mouseover(function(){
        $("#location3").show();
        $("#wdjd").css("background-color","white");
    });
    function three(){
        $("#location3").hide();
        $("#wdjd").removeAttr("style");
    }
    $("#wdjd").mouseleave(three);
    $("#location3").mouseover(function(){
        $("#location3").show();
        $("#wdjd").css("background-color","white")
    }).mouseleave(three);
    //
    //企业采购
    function four(){
        $("#location4").hide();
        $("#qycg").removeAttr("style");
    };
    $("#qycg").mouseover(function(){
        $("#location4").show();
        $("#qycg").css("background-color","white");
    }).mouseleave(four);
    $("#location4").mouseover(function(){
        $("#location4").show();
        $("#qycg").css("background-color","white")
    }).mouseleave(four);
    //客户服务
    function five(){
        $("#location5").hide();
        $("#khfw").removeAttr("style");
    };
    $("#khfw").mouseover(function(){
        $("#location5").show();
        $("#khfw").css("background-color","white");
    }).mouseleave(five);
    $("#location5").mouseover(function(){
        $("#location5").show();
        $("#khfw").css("background-color","white")
    }).mouseleave(five);
    //网站导航
    function six(){
        $("#location6").hide();
        $("#wzdh").removeAttr("style");
    };
    $("#wzdh").mouseover(function(){
        $("#location6").show();
        $("#wzdh").css("background-color","white");
    }).mouseleave(six);
    $("#location6").mouseover(function(){
        $("#location6").show();
        $("#wzdh").css("background-color","white")
    }).mouseleave(six);
    //

// //合5个
//     var   b ,c;
//     function a() {
//         $(b).hide();
//         $(c).removeAttr("style")
//     }
//     $(c).mouseover(function(){
//         $(b).show();
//         $(c).css("background-color","white")
//     }).mouseleave(a);
//     $(b).mouseover(function () {
//         $(b).show();
//         $(c).css("background-color","white");
//     }).mouseleave(a);
//
//     switch (b){
//         case "#location3":
//             c="#wdjd";
//             break;
//         case "#location4":
//             c="#qycg";
//             break;
//         case "#location5":
//             c="#khfw";
//             break;
//         case "#location6":
//             c="#wzdh";
//             break;
//     }

    //促销公告展示信息切换
    $("#cx").hover(function(){
        $("#gg-msg").hide();
        $("#cx-msg").show();
    });
    $("#gg").hover(function(){
        $("#cx-msg").hide();
        $("#gg-msg").show();
    });

    //话费机票酒店游戏
     $("#hjjy").mouseover(function(){
         $(".login-4").hide(500);
         $('.login-5').show(500);
     });
    //x话费机票酒店游戏
    $(".x").click(function(){
        $(".login-5").hide(500);
        $(".login-4").show(500);
    });
    //话费
    // function hf(){
    //     $("#")
    // }
    // $("#hf").mouseover(function () {
    //     $("#hf").css("border-bottom","2px solid black")
    // });

    // //link-commodity显示
    // $('.link-commodity li').eq(0).hover(function () {
    //     $(".link-commodity-detail").show()
    // })

    // 京东秒杀倒计时
     setInterval(function () {
         var sj = new Date();
         var sjHour=23-sj.getHours();
         var sjMin = 59-sj.getMinutes();
         var sjSecond=59-sj.getSeconds();

         if(sjHour>=10){
             $("#jdms-hour").html(sjHour);
         }else{
             $("#jdms-hour").html("0"+sjHour);
         }
         if(sjMin>=10){
             $("#jdms-min").html(sjMin);
         }else{
             $("#jdms-min").html("0"+sjMin);
         }
         if(sjSecond>=10){
             $("#jdms-second").html(sjSecond);
         }else{
             $("#jdms-second").html("0"+sjSecond);
         }
     },1000);

     // 登录页面的扫码或账号登录
    $("#login-ewm").click(function () {
        $("#login-ewm").css( {"font-weight":"bolder","cursor": "pointer",
        "color":"#b61d1d"});
        $("#login-userword").removeAttr("style");
        $(".tab2").show();
        $(".tab3").show();
        $(".tab5").hide();

    });
    $("#login-userword").click(function () {
        $("#login-userword").css( {"font-weight":"bolder","cursor": "pointer",
            "color":"#b61d1d"});
        $("#login-ewm").removeAttr("style");
        $(".tab5").show();
        $(".tab2").hide();
        $(".tab3").hide();
    });
    $("#wechat").click(function () {
        $(".wx-ewm").show();
    });
    $("#wx-ewm-del").click(function(){
        $(".wx-ewm").hide();
    });

    //注册，忘记密码
    function GetQueryString(name)//获取id
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    var id=GetQueryString("objectId");

    $("#zc-commit").click(function () {
        //注册验证
        var myAccount = $("#zh").val();
        var myPassword = $("#mm").val();
        var myPasswordAgain = $("#mm-again").val();
        var accountInfoimation = {account: myAccount, password1:myPassword};
        //上行代码注意点是不要用过敏单词来命名常规变量，如password
        console.log(accountInfoimation);
        var msg = JSON.stringify(accountInfoimation);
        var settings = {//ajax条件
            "async": true,
            "crossDomain": true,
            "url": "https://leancloud.cn/1.1/classes/Post",
            "method":"POST",
            "headers": {
                "x-lc-id": "CiHr9Qq9lBIjQ37TGpFmlKUR-gzGzoHsz",
                "x-lc-key": "DJFhjkC4gxQQNIoqpKdIuzqs",
                "content-type": "application/json"
            },
            "processData": false,
            "data":msg
        };
        console.log(msg);
        if(myAccount==""){
           $("#zc-zh").css("visibility","visible");
        }else if(myPassword ==""){
            $("#zc-zh").removeAttr("style");
            $("#zc-mm").css("visibility","visible");
        }else if(myPasswordAgain!= myPassword){
            $("#zc-again").css("visibility","visible");
            $("#zc-zh").removeAttr("style");
            $("#zc-mm").removeAttr("style");
        }else {
            $("#zc-again").removeAttr("style")
            // alert("注册成功");
        };
        $(this).attr('disabled', 'disabled');//鼠标点击一次后失效
        $.ajax(settings).done(function (response) {
             location.href = "jd-login.html"
        }).fail(function (err) {
            alert(err);
            console.log(err);
        })
    });
    //账号密码登录
    $("#logincheck").click(function () {
        //验证
        var usermsg= $(".usermsg").val();
        var passwordmsg = $(".passwordmsg").val();
        if(usermsg==""){
            alert("请输入账号");
        }else if(passwordmsg==""){
            alert("请输入密码")
        }
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://leancloud.cn/1.1/classes/Post",
            "method": "GET",
            "headers": {
                "x-lc-id": "CiHr9Qq9lBIjQ37TGpFmlKUR-gzGzoHsz",
                "x-lc-key": "DJFhjkC4gxQQNIoqpKdIuzqs"
            }
        };

        $.ajax(settings).done(function(res){
            console.log(res.results[2].account);
                var a=res.results;
                for(var j = 0;j < a.length;j++ ){//这类判断要由服务器来处理
                    if(a[j].account==undefined){

                    }else if(a[j].account!=usermsg){

                    }else if(a[j].password1!=passwordmsg){
                        alert("密码错误");
                    }else{
                        location.href="shop-car.html";
                    };
                }
        }).fail(function (err) {
            console.log(err);
        })
    });
});
