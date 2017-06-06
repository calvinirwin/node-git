//var express = require('express')
//var sGit = require("simple-git");
//var nGit = require("nodegit");

var ngit = require("./ngit-open");

var gm = new ngit("https://github.com/nodegit/nodegit", "nodegit");

// gm.getRepoPath();
// gm.clone();
// gm.getLastCommitMessage();
gm.getAllBranches();
// gm.fetchAllChanges();
// use nodegit


//use simple-git
