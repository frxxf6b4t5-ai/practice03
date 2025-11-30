$(document).ready(function(){
    // $(".tab_btn").find("li").eq(1).click(function(){
    //     ${"tab"}.find("li").fadeout()
    //     //${"tab"}.find("li").eq(0).fadeout() =>첫번째가 아닌 전체탭이 사라졌다가 클릭한거만 나타나게!
    //     ${"tab"}.find("li").eq(1).fadeIn()

    //     $("tab_btn").find("li").removeClass("on")
    //     $("tab_btn").find("li").eq(1)addClass("on")
    // })

    $(".tab_btn").find("li").click(function(){ //마우스가 하나기때문에 굳이 순서 배치할 이유 x
        
        let a=0; //클릭된 번호를 받아올 변수
        a=$(this).index() //이벤트가 적용된(클릭된) 선택자의 인덱스

        $(".tab_btn").find("li").removeClass("on")
        $(".tab_btn").find("li").eq(a)addClass("on") 
        //li모두에 on제거 후에 이벤트가 적용된 선택자에만 on을 추가해라

        $(".tab").find(li).fadeOut()
        $(".tab").find(li).eq(a).fadeIn()
    })
})
