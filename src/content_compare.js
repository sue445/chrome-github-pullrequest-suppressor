var disablePullRequestButton = function(selector){
  $(selector).attr({disabled: "disabled"}).
    text("Alert: You can not create PR to other repository");
};

chrome.storage.local.get(["repositories"], function (config) {
  var head_fork_repository = $(".fork-suggester span[title^=head]").text();
  var base_fork_repository = $(".fork-suggester span[title^=base]").text();

  var is_match_reepository = function (repository) {
    var repositories = config.repositories.split(/\r\n|\r|\n/);
    for (var i = 0; i < repositories.length; i++) {
      if (repositories[i].trim() == repository) {
        return true;
      }
    }
    return false;
  };

  if (head_fork_repository != base_fork_repository && is_match_reepository(head_fork_repository)) {
    disablePullRequestButton(".compare-pr-placeholder button");
    disablePullRequestButton("form.new-pr-form button");
  }
});
