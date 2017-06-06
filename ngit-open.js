
var Git = require("nodegit");

function GitManager(gitSource, repoName) {

  this.source = gitSource;
  this.repoName = repoName;
  this.repoPath = './tmp/' + repoName;
  this.repository = null;
  console.log('construction complete...')
}


GitManager.prototype.clone = function (){
  console.log('cloning...');
  Git.Clone(this.source, this.repoPath).then(function(repository){
    console.log(this.repoPath + ' successfully cloned');
  });
}

GitManager.prototype.getRepoPath = function (){
  console.log('getRepoPath...');
  console.log(this.repoPath);
  //console.log('test');
}

GitManager.prototype.getLastCommitMessage = function () {
  // var repo = './tmp';
  console.log('getLastCommitMessage...');
  Git.Repository.open(this.repoPath)  
    .then(function(repository) {
      return repository.getBranchCommit("master");
      // using promises
    }).then(function(commit) {
      return commit.message();
    }).then(function(message) {
      console.log(message);
    });

}




// in order to get this to work properly we will need to fetch all first
GitManager.prototype.getAllBranches = function () {
  // var repo = './tmp';
  console.log('getAllBranches...');
  Git.Repository.open(this.repoPath)  
    .then(function(repository) {
      console.log('...have repo now')
      return repository.getReferences(1);
    }).then(function(arrayReference) {
      console.log('...have ref array now');
      console.log('...array size: ' + arrayReference.length);
      for(i=0;  i < arrayReference.length; i++) {
        // console.log(arrayReference[i].name);
          if(arrayReference[i].isBranch()) {
            console.log(arrayReference[i].name());
            console.log(arrayReference[i].shorthand());
          }
      }
    });
}


GitManager.prototype.fetchAllChanges = function () {

  console.log('fetchAllChanges...');
  Git.Repository.open(this.repoPath)  
    .then(function(repository) {
      console.log('...have repo now');
      return repository.fetchAll({});
    })
    .then(function() {
      console.log('...fetched');
    });
}


module.exports = GitManager;






//module.exports.MostRecentCommit = getMostRecentCommit;
//module.exports.GetCommitMessage = getCommitMessage;