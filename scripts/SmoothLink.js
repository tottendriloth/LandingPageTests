// Varible to make it easy to quickly change speed of fade in
var fadeTime = 1000;
// Whenever the document is loaded this code block will run
$(document).ready(function () {

    // Get all elements in the body tag and then slowly over fadeTime ms make them visible
    $("body").fadeIn(fadeTime);
    // For all links that are not the current page (if just did as all links error will occur due to my place holder of "#")
    $("a").click(function(e){
                
        // Get the target webpage from inside the href= part of the a tag
        goTo = this.href;
        // Check if the target webpage is different from the current webpage
        if(goTo != window.location){
            $(this).addClass("loading");
            // If it is different then
            // Fade out over fadetime the whole body of the webpage
            $("body").fadeOut(fadeTime);
            // After fadetime - 100 run redirect, i had to do it -100 otherwise the website would complely fade out and the backgroudn would disappear making the transition
            // not as smooth as i would like so to stop the background changing i just redirect before the page is fully faded out
            setTimeout(redirect, fadeTime-100);

            // Redirect function that changed the current webpage to the one saved in goTo from earlier
            function redirect(){
                window.location = goTo;
            }
        }

        // Stop the default linking action from running this has two benefits of 1) letting my custom code run and also makingsure
        // you cant link back to the current webpage you are on. 
        e.preventDefault();
    }
    )
});

