try
{
  $('.tp-modal').remove();
  $('.tp-backdrop').remove();
  $('body').removeClass('tp-modal-open');
}
catch (e)
{
  alert('Could not remove tp-modal: ' + e.message);
}

