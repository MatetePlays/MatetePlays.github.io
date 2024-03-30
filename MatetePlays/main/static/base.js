"use strict";

// Store initial background color style and gradient classes.
var initialStyles = {};
window.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.getElementById('navLinks');
    initialStyles.backgroundColor = window.getComputedStyle(navLinks).backgroundColor;
    initialStyles.gradientClasses = Array.from(navLinks.classList).filter(cls => cls.startsWith('bg-gradient-to-'));
    
    // Remove initial background color style and gradient classes.
    navLinks.style.backgroundColor = '';
    initialStyles.gradientClasses.forEach(cls => navLinks.classList.remove(cls));

    // If document width is larger than 1280px, remove display: none style.
    var documentWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    if (documentWidth > 1280) {
        navLinks.style.display = 'flex';
        // If navLinks are visible, remove background color style and gradient classes.
        navLinks.style.backgroundColor = '';
        initialStyles.gradientClasses.forEach(cls => navLinks.classList.remove(cls));
    }
});

document.getElementById('toggleNavBtn').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    
    // If navLinks are hidden, remove background color style and gradient classes.
    if (navLinks.style.display === 'none') {
        navLinks.style.backgroundColor = '';
        initialStyles.gradientClasses.forEach(cls => navLinks.classList.remove(cls));
    } else {
        // Restore background color style and gradient classes.
        navLinks.style.backgroundColor = initialStyles.backgroundColor;
        // Remove all gradient classes and re-add them ensuring bg-gradient-to-r comes first.
        initialStyles.gradientClasses.forEach(cls => navLinks.classList.remove(cls));
        navLinks.classList.add('bg-gradient-to-r', ...initialStyles.gradientClasses);
    }
});

window.addEventListener('resize', function() {
    var documentWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );

    // If window width becomes larger than 1280px, remove display: none style.
    if (documentWidth > 1280) {
        var navLinks = document.getElementById('navLinks');
        navLinks.style.display = 'flex';
        // If navLinks are visible, remove background color style and gradient classes.
        navLinks.style.backgroundColor = '';
        initialStyles.gradientClasses.forEach(cls => navLinks.classList.remove(cls));
    } else {
        // If window width becomes smaller than or equal to 1280px, reset display property to 'none'.
        var navLinks = document.getElementById('navLinks');
        navLinks.style.display = 'none';
    }
});
