var Git = require("nodegit");

function GitManager(gitSource, repoName) {

  this.source = gitSource;
  this.repoName = repoName;
  this.repository = null;
  //console.log('construction complete ')
}


GitManager.prototype.clone = function (){
  Git.Clone(this.source, './tmp').then(function(repository){
    console.log(repository.m);
  });
}

GitManager.prototype.getLastCommitMessage = function () {
  var repo = './tmp';
  console.log(repo)
  Git.Repository.open(repo)  
    .then(function(repository) {
      return repository.getBranchCommit("master");

      // using promises
    }).then(function(commit) {
      return commit.message();
    }).then(function(message) {
      console.log(message);
    });

}



var getMostRecentCommit = function(repository) {
  return repository.getBranchCommit("master");
};

var getCommitMessage = function(commit) {
  return commit.message();
};

module.exports = GitManager;






//module.exports.MostRecentCommit = getMostRecentCommit;
//module.exports.GetCommitMessage = getCommitMessage;