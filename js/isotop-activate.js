$(document).ready(function () {
  // init Isotope
  let $grid = $('.products_container').isotope({
    // options
  });
  // filter items on button click
  $('.products_menu').on('click', 'button', function () {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  $(".products_menu button").on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  })
});