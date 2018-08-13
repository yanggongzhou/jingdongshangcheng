/**
 * Created by Administrator on 2018/7/30.
 */
$(function(){
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