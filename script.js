const buttonDown = document.getElementById('down');
const video = document.getElementById('video');

var x = 0
var pos = "up"

scrollToSmoothly(0, 0, 500);

buttonDown.addEventListener('click', () => {
    if(pos == "up"){
        const videoPosition = video.getBoundingClientRect().bottom + window.scrollY;
        scrollToSmoothly(0, videoPosition, 500);
    }else{
        const videoPosition = video.getBoundingClientRect().bottom + window.scrollY;
        scrollToSmoothly(0, -videoPosition, 500);
    }
});

var move = false

function loop(){
    
    var Position = window.scrollY;
    console.log(Position)
    
    if(Position > 0){
        pos = "down"
        if(move == false){
            rotate()
        }
        move = true
    }
    if(Position == 0){
        pos = "up"
        if(move == true){
            rotate()
        }
        move = false
    }
    


    requestAnimationFrame(loop)
}
loop()

function rotate(){
    x += 540
    buttonDown.style.transform = 'rotate('+x+'deg)'
}

function scrollToSmoothly(x, y, duration) {
    const startingY = window.scrollY;
    const diff = y - startingY;
    let start;

    function step(timestamp) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}