var carouselHTML = `
            <div class="my-carousel-container">
                <h2 class="carousel-header">Welcome to Our Art Gallery</h2>
                <div class="my-carousel">
                    <div><img src="https://cdn.pixabay.com/photo/2021/03/13/10/23/hut-6091451_1280.jpg" alt="Image 1"></div>
                    <div><img src="https://cdn.pixabay.com/photo/2020/02/04/06/16/watercolour-4817390_960_720.jpg" alt="Image 2"></div>
                    <div><img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg" alt="Image 3"></div>
                </div>
            </div>
            <p class="carousel-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at lacus. Quisque euismod, purus eget tempor venenatis, nunc ex consectetur urna, ac tempus nisi sem vel lacus. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
            </p>
        `;

// Inject the carousel into the existing 'script-container' element
var container = document.getElementById('script-container');
if (container) {
  container.innerHTML = carouselHTML;

  // Inject custom styles
  injectCustomStyles();

  // Initialize the Slick Carousel
  $('.my-carousel').slick({
    dots: true,            // Show navigation dots
    infinite: true,        // Infinite loop scrolling
    speed: 500,            // Transition speed
    slidesToShow: 1,       // Number of slides to show
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 2000,   // Autoplay speed in milliseconds
    arrows: true,          // Enable arrows
    appendArrows: '.my-carousel-container'
  });
} else {
  console.error('Element with ID "script-container" not found.');
}
