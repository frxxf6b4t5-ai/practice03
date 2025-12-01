$(document).ready(function(){
    let $slider= $(".slider").find("li"),
        $btn= $(".slider_btn").find("li"),
        $number= $(".slider_number").find("li"); //변수 선언 시 ,과 ;필요
    
    let a=0; //클릭된 번호를 알기 위한 변수
    $number.click(function(){
        a=$(this).index()

        $slider.stop().fadeOut()
        $slider.eq(a).stop().fadeIn()

        $number.removeClass("on")
        $number.eq(a).addClass("on")
        })

    $btn.eq(1).click(function(){
        a++
        a=a%4

        if(a==1){
            $slider.stop().fadeOut()
            $slider.eq(1).stop().fadeIn()
        }else if(a==2){
            $slider.stop().fadeOut()
            $slider.eq(2).stop().fadeIn()
        }else if(a==3){
            $slider.stop().fadeOut()
            $slider.eq(3).stop().fadeIn()
        }else{
            $slider.stop().fadeOut()
            $slider.eq(0).stop().fadeIn()
        }
        // $slider.stop().fadeOut()
        // $slider.eq(a+1).stop().fadeIn()

        // $number.removeClass("on")
        // $number.eq(a+1).addClass("on")
        //메서드 안에 연산을 쓸 수 없음, 이전버튼 사용시 쓸 수 없음
        
    })
    //'다음'버튼을 누르면 값은 증가하고 해당값은 eq에 대입된다
    //BUT 다음 버튼과 하단부 버튼(numer)의 변수가 다르면 값이 달라짐!
    //다시말해, number버튼 눌렀다 다음 이전버튼 누를 수 있기 때문에 함께 생각해야함
    //따라서 하단부 버튼과 다음버튼의 변수를 하나만 사용하여 연결해야함
})
