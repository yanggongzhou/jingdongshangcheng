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

});