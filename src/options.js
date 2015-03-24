function showStatus(status){
  $("#status").text(status);
  setTimeout(function() {
    $("#status").text("");
  }, 750);
}

$(function(){
  $("#save_button").click(function(){
    chrome.storage.local.set({repositories: $("#repositories").val()}, function(){
      showStatus("Options Saved.");
    });
  });

  chrome.storage.local.get({repositories: ""}, function(config){
    $("#repositories").val(config.repositories);
  });
});
