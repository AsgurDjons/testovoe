const slider = tns({
    container: '.courusel_container',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,

  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

const sliders = tns({
    container: '.goods-sale__carousel',
    items: 4,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controlsText:	[
      '<img src="img/left.png">',
      '<img src="img/right.png">'
    ]
  });
  
const sliderLike = tns({
  container: '.goods-sale__carousel-like',
  items: 4,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  controlsText:	[
    '<img src="img/left.png">',
    '<img src="img/right.png">'
  ]
});
const sliderPercent = tns({
  container: '.goods-sale__carousel-percent',
  items: 4,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  controlsText:	[
    '<img src="img/left.png">',
    '<img src="img/right.png">'
  ]
});

