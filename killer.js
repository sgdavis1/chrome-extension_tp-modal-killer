try
{
  // TP modal type
  $('.tp-modal').remove();
  $('.tp-backdrop').remove();
  $('body').removeClass('tp-modal-open');

  // Washington post
  $('div[class*="Modal"]').remove();
  $('html').removeClass('drawbridge-up');
}
catch (e)
{
  alert('Could not remove WashPost / tp-modal: ' + e.message);
}

