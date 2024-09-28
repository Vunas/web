window.addEventListener('scroll', function() {
    const content = document.querySelector('.head__nav');
    if (window.scrollY > 50) {
        content.classList.add('head__nav-new');
    } else {
        content.classList.remove('head__nav-new');
    }
});

window.addEventListener('scroll', function() {
    var element = document.getElementById('myElement');
    if (window.scrollY > 50) { // Kiểm tra nếu đã cuộn hơn 50px
        element.className = 'head__nav-li head__nav-item head__nav-item-link small-brand';
    } else {
        element.className = 'head__nav-li head__nav-item head__nav-item-link brand';
    }
});

