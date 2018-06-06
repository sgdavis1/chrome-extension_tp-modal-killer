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

  // MDC dialog
  $(".mdc-dialog").parent().remove();
  $(".mdc-dialog-scroll-lock").removeClass("mdc-dialog-scroll-lock");

  // Wash Post
  $(".pb-f-page-adblocker-feature").remove();
  $("html").css({"overflow": "visible"});
}
catch (e)
{
  alert('Could not remove WashPost / tp-modal: ' + e.message);
}

