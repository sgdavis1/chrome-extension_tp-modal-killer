try
{
  // TP modal type
  $('.tp-modal').remove();
  $('.tp-backdrop').remove();
  $('body').removeClass('tp-modal-open');

  // Washington post
  $('div[class*="Modal"]').remove();
  $('html').removeClass('drawbridge-up');

  // Zeus newsletter
  $('[id*="ad-block"]').remove();
  $('.ad-blocker-custom-blur').removeClass('ad-blocker-custom-blur');
}
catch (e)
{
  alert('Could not remove WashPost / tp-modal: ' + e.message);
}

