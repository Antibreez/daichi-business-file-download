$(document).on('click', '.order-list-table-item-col__download-button', function(e) {
  if ($(e.currentTarget).next().hasClass('opened')) {
    $('.order-list-table-item-col__download-popup').removeClass('opened');
  } else {
    $('.order-list-table-item-col__download-popup').removeClass('opened');
    $(e.currentTarget).next().addClass('opened');
  }
})

$(document).on('click', function(e) {
  if (e.target.closest('.order-list-table-item-col__download-popup')) {
    return;
  }

  $('.order-list-table-item-col__download-popup').removeClass('opened');
})

$(document).on('click', '.order-list-table-item-col__download-popup', function(e) {
  const link = e.target.closest('a');

  if (link) {
    const href = $(link).attr('href');
    window.location.href = href;
  }
})

$(document).on('click', '.order-list-table-item-col__download-popup-header button', function(e) {
  $(e.target.closest('.order-list-table-item-col__download-popup')).removeClass('opened');
})

$(document).on('click', '.order-list-table-item-col__download-popup-overlay', function(e) {
  $(e.target.closest('.order-list-table-item-col__download-popup')).removeClass('opened');
})