$(document).ready(function(){


    let leftIcon = $(".slider .left");
    let rightIcon = $(".slider .right");

    function rightSlider(){
        let activeImage = $(".active");
        if(activeImage.next().length != 0){
            activeImage.removeClass("active");
            activeImage.next().addClass("active");
        }else{
            activeImage.removeClass("active");
            $(activeImage).parent().children().eq(0).addClass("active")
        }
    }
    
    function leftSlider(){
        let activeImage = $(".active");
        if(activeImage.prev().length != 0){
            $(activeImage).removeClass("active");
            $(activeImage).prev().addClass("active");
        }else{
            $(activeImage).removeClass("active");
            $(activeImage).parent().children().eq(2).addClass("active")
        }
    }
    
    
    $(document).on("click",".left",leftSlider);             //clikcində
    $(document).on("click",".right",rightSlider);           //clikcində

    $(document).on("mouseover",".left",leftSlider);         //mouse-ni üsdünə gətirdikdə
    $(document).on("mouseover",".right",rightSlider);       //mouse-ni üsdünə gətirdikdə
    

    setInterval(() => {
        rightSlider()
    }, 2000);

})



