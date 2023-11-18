
var tooltipSlider = document.getElementById('slider-tooltips');

noUiSlider.create(tooltipSlider, {
    start: [1247],
    connect: 'lower',
    tooltips: [true],
    range: {
        'min': 0,
        'max': 10000
    }
});




