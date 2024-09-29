window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    var brand = document.getElementById('brand');
    var brand_item = document.getElementById('brand-item');

    if (window.scrollY > 50) {
        nav.classList.add('add');
        brand.className= 'small__brand';
        brand_item.className= 'small__brand-item';
    } else {
        nav.classList.remove('add');
        brand.className= 'brand';
        brand_item.className= 'brand-item';
    }
});


   



