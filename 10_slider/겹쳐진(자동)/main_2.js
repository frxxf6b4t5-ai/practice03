$(document).ready(function(){
   
   $(".slider li:gt(0)").hide() //충돌자잡기 위해 사용(css의 일부분 지운 후 사용)
                                //li전부 지운 후에 첫번째만 타타나라
                                
    setInterval(function(){
        $(".slider li nth-child(1)")//첫째인 li를 골라서
        .stop().fadeOut(). //기존 동작을 멈추고, 천천히 사라진 다음
        .next().stop().fadeIn() //다음 둘째 li가 기존 동작을 멈추고 천천히 나타나라
        .end() //다시 첫째는 (앞선 메서드를 끝내고 다시 선택하는 것이기 때문)
        .appendTo(".slider ul") //.slider ul의 막내로 보낸다
                                //⭐️.slider만 적으면 안됨!!
                                //li는 .slider ul의 자식이기때문에!! 부모 선택자 다 써야함


    },2000)

})
