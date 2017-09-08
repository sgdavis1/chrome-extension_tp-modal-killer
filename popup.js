document.addEventListener('DOMContentLoaded', function() {
  try
  {
    chrome.tabs.executeScript(null, {file: 'thirdparty/jquery-3.2.1.slim.min.js'}, function(){
      chrome.tabs.executeScript(null, {file: 'killer.js'});
    });
    $('#result').addClass('success');
    $('#result').empty().append("success");
  }
  catch(e)
  {
    $('#result').addClass('failed');
    $('#result').empty().append("failed");
    if (message) 
    {
      $('#message').append(message);
      $('#message').addClass('failed');
    }
  }
});
