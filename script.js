const buttonDown = document.getElementById('down');
const video = document.getElementById('video');

buttonDown.addEventListener('click', () => {
    const videoPosition = video.getBoundingClientRect().bottom + window.scrollY;
    scrollToSmoothly(0, videoPosition, 500); 
});

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