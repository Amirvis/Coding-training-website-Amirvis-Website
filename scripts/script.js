// Tooltip
document.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('.tt');
    tooltips.forEach(element => {
        new bootstrap.Tooltip(element);
    });
});



// Scroll to top button
const toTop = document.querySelector('#arrow-btn');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 400) {
        toTop.classList.add('active');
    }
    else {
        toTop.classList.remove('active');
    }
})



// AOS Library
document.addEventListener('DOMContentLoaded', function() {
	if ('AOS' in window) {
		AOS.init({
            easing: "ease-in-out",
            once: "true",
            duration: "700"
        });
	}
});