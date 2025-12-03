$(document).ready(function(){
    let $slider = $(".slider").find("li"),
        $btn = $(".slider_btn").find("li"),
        $number = $(".slider_number").find("li");
    
    let a=0;//클릭된 번호를 알기 위한 변수
            //좌우 버튼과 연동하기 위한 변수
            //이벤트 안에서 선언하면 안되는 이유
                //이벤트가 작동 후에 선언이 된다면
                //사용자가 맨처음 누르는 버튼은 고정되어야 한다
    $number.click(function(){//1번~4번중 누군가를 클릭한다면
        a=$(this).index()//클릭된 li의 번호를 a에 대입

        $slider.stop().fadeOut()//모든 slider는 동작을 멈추고 사라진다
        $slider.eq(a).stop().fadeIn()//slider중 클릭된 번호와 동일한 slider만
                                    //동작을 멈추고 타나난다

        $number.removeClass("on")//모든 하단부 버튼은 .on을 제거
        $number.eq(a).addClass("on")//하단부 버튼중 클릭된 번호와 동일한 버튼만
                                    //.on을 추가
    })
    /*
    let b=0;
    $btn.eq(1).click(function(){
        b++//클릭한 횟수를 인지하기 위한 변수값 증가
        b=b%4//동작의 횟수 파악만 하면되기때문에 동작의 수만큼 나눈 나머지를 사용
            //클릭한 횟수는 중요하지 않다!
            //몇번째 동작을 실행해야 하는지가 중요
        if(b==1){
            $slider.stop().fadeOut()
            $slider.eq(1).stop().fadeIn()
        }else if(b==2){
            $slider.stop().fadeOut()
            $slider.eq(2).stop().fadeIn()
        }else if(b==3){
            $slider.stop().fadeOut()
            $slider.eq(3).stop().fadeIn()
        }else{  
            $slider.stop().fadeOut()
            $slider.eq(0).stop().fadeIn()
        }
    })
    */
    /*
    $btn.eq(1).click(function(){//오른쪽(다음)버튼을 클릭할때마다
        a++//기존 img의 eq번호를 증가시키고
        a=a%4//증가된 값을 동작수로 나눈 나머지
             //반복되는 동작이기 때문에 연산을 진행
        if(a==1 || a==-3){//1이라면 -> 첫번째 동작을 실행
            $slider.stop().fadeOut()
            $slider.eq(1).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(1).addClass("on")
        }else if(a==2 || a==-2){//2라면 -> 두번째 동작을 실행
            $slider.stop().fadeOut()
            $slider.eq(2).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(2).addClass("on")
        }else if(a==3 || a==-1){//3이라면 -> 세번째 동작을 실행
            $slider.stop().fadeOut()
            $slider.eq(3).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(3).addClass("on")
        }else{//else는 무조건 0이 도달하도록 만들어
              //첫번째 화면으로 돌아오도록 제작
              //eq번호가 0인게 첫번째 화면이기 때문
            $slider.stop().fadeOut()
            $slider.eq(0).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(0).addClass("on")
        }
    })

    $btn.eq(0).click(function(){
        a--
        a=a%4
        if(a==-1 || a==3){
            $slider.stop().fadeOut()
            $slider.eq(3).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(3).addClass("on")
        }else if(a==-2 || a==2){
            $slider.stop().fadeOut()
            $slider.eq(2).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(2).addClass("on")
        }else if(a==-3 || a==1){
            $slider.stop().fadeOut()
            $slider.eq(1).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(1).addClass("on")
        }else{
            $slider.stop().fadeOut()
            $slider.eq(0).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(0).addClass("on")
        }
    })
    */
    /*다음 단계 -> 왼쪽 버튼만 변경*/
    /*$btn.eq(0).click(function(){
        a=a+3
        a=a%4
        
        if(a==1){
            $slider.stop().fadeOut()
            $slider.eq(1).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(1).addClass("on")
        }else if(a==2){
            $slider.stop().fadeOut()
            $slider.eq(2).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(2).addClass("on")
        }else if(a==3){
            $slider.stop().fadeOut()
            $slider.eq(3).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(3).addClass("on")
        }else{
            $slider.stop().fadeOut()
            $slider.eq(0).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(0).addClass("on")
        }
    })*/
    /*또 그 다음 단계 -> 좌우버튼을 합치기*/
    $btn.click(function(){
        let b=0;
        b=$(this).index()
        if(b==1){
            a++
            a=a%4

            $slider.stop().fadeOut()
            $slider.eq(a).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(a).addClass("on")
        }else{
            a=a+3
            a=a%4

            $slider.stop().fadeOut()
            $slider.eq(a).stop().fadeIn()

            $number.removeClass("on")
            $number.eq(a).addClass("on")
        }
    })
})