$(document).ready(function(){
    // setInterval(function(){
    //     $slider.eq(0).stop.fadeOut()
    //     .next("li").stop().fadeIn()
    //     .end()
    //     .appendTo(".slider ul")
    // })

    let a=0;
    setInterval(function(){
        a=(a+1)%4 //a=a+1 -> a++은 동일한 의미임
        // if(a==1){
        //     $(".slider li").stop().fadeOut()
        //     $(".slider li").eq(1).stop().fadeIn()
        // }else if(a==2){
        //     $(".slider li").stop().fadeOut()
        //     $(".slider li").eq(2).stop().fadeIn()
        // }else if(a==3){
        //     $(".slider li").stop().fadeOut()
        //     $(".slider li").eq(3).stop().fadeIn()
        // }else{
        //     $(".slider li").stop().fadeOut()
        //     $(".slider li").eq(0).stop().fadeIn()
        // }
        $(".slider li").stop().fadeOut()
        $(".slider li").eq(a).stop().fadeIn()

    },2000)

})
