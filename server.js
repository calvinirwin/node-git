//var express = require('express')
//var sGit = require("simple-git");
//var nGit = require("nodegit");

var ngit = require("./ngit-open");

var gm = new ngit("https://github.com/nodegit/nodegit", "nodegit");
//gm.clone();
gm.getLastCommitMessage();

// use nodegit
//console.log(nGit.GetMostRecentCommit);
//

//use simple-git
