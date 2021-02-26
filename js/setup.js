document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide').mount();
});

new Splide('.splide').mount();
new Splide('#splide', {
    rewind: true,
});


new Splide('.splide', {
    type: 'loop',
    margin: 10,
    perPage: 3,
});