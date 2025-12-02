$(document).ready(function(){
    let $slider= $(".slider").find("li"),
        $btn= $(".slider_btn").find("li"),
        $number= $(".slider_number").find("li"); //변수 선언 시 ,과 ;필요
    
    let a=0; 
    $number.click(function(){
        a=$(this).index()

        $slider.stop().fadeOut()
        $slider.eq(a).stop().fadeIn()

        $number.removeClass("on")
        $number.eq(a).addClass("on")
        })

    $btn.click(function(){
        let b=0,
        b=$(this).index;

        if(b==1){
            a++
            a=a%4

            $slider.stop().fadeOut()
            $slider.eq(a).stop().fadeIn()

            $number.removerClass("on")
            $number.eq(a).addClass("on")
        
        }else{
            a=(a+3)%4

            $slider.stop().fadeOut()
            $slider.eq(a).stop().fadeIn()

            $number.removerClass("on")
            $number.eq(a).addClass("on")
            }
        
    })
})
