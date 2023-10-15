$(function(){
    // 사이드 바
    $('.basket').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
        $(".pCount input").trigger("change");
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 20 + '%'
        },function(){
            $('.sidebar_menu').hide(); 
        }); 
    });

    // 페이지 상단으로 이동
    $(".up_arrow").click(function(){
        window.scrollTo({top:0, behavior:"smooth"})
    })

    // 사이드바 input 숫자 체크
    $(".pCount input").keydown(function(e){
        if(e.keyCode === 46 || e.keyCode === 8 || e.key >= 0 && e.key <= 9){
            return true;
        }
        return false;
    })

    // 사이드바 수량 제한
    $(".pCount input").change(function(){
        if($(this).val() > 999){
            $(this).val(999)
            alert("최대수량은 999개 입니다.")
        }else if($(this).val() < 1){
            $(this).val(1)
            alert("최소수량은 1개 입니다.")
        }
        
        // 총금액 계산
        // console.log($(this).closest("tbody").children("tr").find("span").text())
        // console.log($(this).closest(".pCount").children("input").val())
        let price = $(this).closest("tbody").children("tr").find(".per_price").text();
        let count = $(this).closest(".pCount").children("input").val();
        // console.log(price)
        // console.log(count)
        $(this).closest("tbody").find(".total").text((price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
    })
    
    let totalPrice = 0;
    // + 버튼 클릭시
    $(".fa-plus").click(function(){
        let val = $(this).next().val()
        val++;
        $(this).next().val(val).trigger("change");
        if($(this).parents("table").find(".basket_item").prop("checked")){
            $(this).parents("table").find(".basket_item").trigger("change");
        }
        
    })
    
    // - 버튼 클릭시
    $(".fa-minus").click(function(){
        let val = $(this).prev().val()
        val--;
        $(this).prev().val(val).trigger("change");
        if($(this).parents("table").find(".basket_item").prop("unchecked")){
            totalPrice = 0;
            $(this).parents("table").find(".basket_item").trigger("change");
        }
    })

    // check 박스 클릭시
    $(".basket_item").change(function(){
        var checked = $(this).prop('checked');
        let price = $(this).closest("table").find(".total").text().replace(/,/g, '');
        if(checked){
            $(this).closest("table").find("*").css("backgroundColor", "lightgray");
            totalPrice += Number(price);
            console.log(totalPrice)
            var a1 = $(".total"); 
            console.log(a1[1].innerHTML)

        }else{
            $(this).closest("table").find("*").css("backgroundColor", "whitesmoke");
            totalPrice -= Number(price);
            console.log(totalPrice)
        }
        $(".finalTotal").text("총금액 : " + totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원")
    })



    

})


