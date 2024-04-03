$(".slider").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  arrows: false,
});

new VenoBox({
  selector: ".my-video-links",
});

$(".slid_text").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  asNavFor: ".slid_image",
});

$(".slid_image").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  asNavFor: ".slid_text",
});
