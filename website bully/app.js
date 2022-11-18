const bubbles = document.querySelectorAll('.bubble');
let bubblesBurst = 0;

var pop = new Audio("pop.mp3");

bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
        pop.play();
        bubble.style.animation = 'burst 0.4s ease forwards';
        
        bubblesBurst += 1;
        console.log(bubblesBurst)

        if(bubblesBurst == 8){
            setTimeout(function(){
                window.alert('You pop all the bubbles that bullied you!')
            }, 500)
            
        }
    })
})

