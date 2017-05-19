var Git = require("nodegit");

module.exports = function(gitSource, repoName) {

  Git.Clone(gitSource, repoName).then(function(repository){
    console.log(repository.m);
  });
}



var getMostRecentCommit = function(repository) {
  return repository.getBranchCommit("master");
};

var getCommitMessage = function(commit) {
  return commit.message();
};

Git.Repository.open("nodegit")
  .then(getMostRecentCommit)
  .then(getCommitMessage)
  .then(function(message) {
    console.log(message);
  });


module.exports.MostRecentCommit = getMostRecentCommit;
module.exports.GetCommitMessage = getCommitMessage;