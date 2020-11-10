window.addEventListener('orientationchange', function() {
    // After orientationchange, add a one-time resize event
    var afterOrientationChange = function() {
        // YOUR POST-ORIENTATION CODE HERE
        document.body.style.height = window.innerHeight;
        // Remove the resize event listener after it has executed
        window.removeEventListener('resize', afterOrientationChange);
    };
    window.addEventListener('resize', afterOrientationChange);
});
