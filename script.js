function smoothScroll(target,duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 51;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime === null ) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    // easing animation - gizma.com/easing/
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var scroll1 = document.querySelector('.button1');
var scroll2 = document.querySelector('.button2');
var scroll3 = document.querySelector('.button3');
var scroll4 = document.querySelector('.button4');
var scroll5 = document.querySelector('.button5');

scroll1.addEventListener('click',function() {
    smoothScroll('#top', 1000);
});
scroll2.addEventListener('click',function() {
    smoothScroll('#about', 1000);
});
scroll3.addEventListener('click',function() {
    smoothScroll('#career', 1000);
});
scroll4.addEventListener('click',function() {
    smoothScroll('#awards', 1000);
});
scroll5.addEventListener('click',function() {
    smoothScroll('#family', 1000);
});