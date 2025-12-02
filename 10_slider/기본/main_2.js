$(document).ready(function(){
    let $slider= $(".slider").find("li"),
        $btn= $(".slider_btn").find("li"),
        $number= $(".slider_number").find("li"); //변수 선언 시 ,과 ;필요
    
    let a=0; //클릭된 번호를 알기 위한 변수
            //좌우버는과 연동하기 위한 변수
            //⭐️이벤트 밖에서 선언해야하는 이유 -> 이벤트 작동 후에 선언이 된다면
                                        // 사용자가 맨처음 누르는 버튼은 고정되어야 함
    $number.click(function(){
        a=$(this).index()

        $slider.stop().fadeOut()
        $slider.eq(a).stop().fadeIn()

        $number.removeClass("on")
        $number.eq(a).addClass("on")
        })

    //동일한 선택자에게 동일한 이벤트를 반복적용하면
    //동일한 동작이 반복적으로 작동하는 구문
    //1.이벤트 작동전 변수 선언 2.이벤트 작동 후 변수 값 증감++ --
    //3.해당변수를 동작수로 나눈 나머지 4.동작수만큼의 조건문 생성
    $btn.eq(1).click(function(){
        a++
        a=a%4 //클릭수를 누적할 필요없기에 동일한 변수 사용
            //"반복되는 동작"이기 때문에 증가된 값을 동작수로 나눈 나머지의 연산 진행

        if(a==1 || a==-3){
            $slider.stop().fadeOut()
            $slider.eq(1).stop().fadeIn()

            $numer.removeClass("on")
            $numer.eq(1).addClass("on")
        }else if(a==2 || a==-2){
            $slider.stop().fadeOut()
            $slider.eq(2).stop().fadeIn()

            $numer.removeClass("on")
            $numer.eq(2).addClass("on")
        }else if(a==3 || a==-1){
            $slider.stop().fadeOut()
            $slider.eq(3).stop().fadeIn()

            $numer.removeClass("on")
            $numer.eq(3).addClass("on")
        }else{//else는 무조건 0이 도달하도록 만들어 첫번째 화면으로 돌아오도록 제작->eq=0이 첫번째 화면이기 때문
            $slider.stop().fadeOut()
            $slider.eq(0).stop().fadeIn()

            $numer.removeClass("on")
            $numer.eq(0).addClass("on")
        }
            //'다음'버튼을 누르면 값은 증가하고 해당값은 eq에 대입된다
            //BUT 다음 버튼과 하단부 버튼(numer)의 변수가 다르면 값이 달라짐!
            //다시말해, number버튼 눌렀다 다음 이전버튼 누를 수 있기 때문에 함께 생각해야함
            //따라서 하단부 버튼과 다음버튼의 변수를 하나만 사용하여 연결해야함
        
        //⭐️ 좌우버튼을 연동할 때는 논리 연산자를 활용하여
        //⭐️ 양수일 때(다음)와 음수일 때(이전)를 골라서 사용하도록 한다
        // ex) 2번째 사진은 eq(1) -> a = 1 || -3

        $btn.eq(0).click(function(){ //이전 버튼 클릭
            a--
            a=a%4 //굳이 if구문에 ||(또는) 쓸 필요없이 a=(a+3)%4로 활용가능!!

            if(a==-1 || a==3){
                $slider.stop().fadeOut()
                $slider.eq(3).stop().fadeIn()
                //⭐️$slider.eq(-1).stop().fadeIn()과 동일하게 작동
                //  그러나 eq안에 음수 값이 들어갈수 없으므로 사용x

                $numer.removeClass("on")
                $numer.eq(3).addClass("on")
            }else if(a==-2 || a==2){
                $slider.stop().fadeOut()
                $slider.eq(2).stop().fadeIn()
 
                $numer.removeClass("on")
                $numer.eq(2).addClass("on")
            }else if(a==-3 || a==1){
                $slider.stop().fadeOut()
                $slider.eq(1).stop().fadeIn()

                $numer.removeClass("on")
                $numer.eq(1).addClass("on")
            }else{
                $slider.stop().fadeOut()
                $slider.eq(0).stop().fadeIn()

                $numer.removeClass("on")
                $numer.eq(0).addClass("on")
            }
        })
                //⭐️이전 다음 버튼을 따로 코드를 짜면 다음버튼을 누르고 a값이 음수 일때처럼
                //에러가 뜰 수 있음!!!!! 따라서 같이 써줘야함!!!!!!!

                //⭐️⭐️동작수 n개 -> if구문 n개 -> if 1 || -(n-1)부터 else (eq(0))까지!!!

        // $slider.stop().fadeOut()
        // $slider.eq(a+1).stop().fadeIn()

        // $number.removeClass("on")
        // $number.eq(a+1).addClass("on")
        //메서드 안에 연산을 쓸 수 없음, 이전버튼 사용시 쓸 수 없음
        
    })

})