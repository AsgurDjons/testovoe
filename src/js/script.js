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
    ],
    responsive: {
      640: {
        items: 1,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    }
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
  ],
  responsive: {
    640: {
      items: 1,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  }
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
  ],
  responsive: {
    640: {
      items: 1,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  }
});

const sliderStock = tns({
  container: '.goods-sale__carousel-stock',
  items: 4,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  controlsText:	[
    '<img src="img/left.png">',
    '<img src="img/right.png">'
  ],
  responsive: {
    640: {
      items: 1,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  }
});

const sliderBrand = tns({
  container: '.goods-sale__brand_carousel',
  items: 7,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  controlsText:	[
    '<img src="img/left.png">',
    '<img src="img/right.png">'
  ]
});

