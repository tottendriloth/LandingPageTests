var fadeTime = 1000;
$(document).ready(function () {
    $(".container").css("display", "none").fadeIn(fadeTime);
    $("li.notactive a").click(function(e){
        goTo = this.href;
        console.log(goTo);
            $(".container").fadeOut(fadeTime);
            setTimeout(redirect, fadeTime-100);
            function redirect(){
                window.location = goTo;
            }

            e.preventDefault();
        
    }
    )
});

