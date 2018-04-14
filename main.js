require("dotenv").config
var request = require ("request");
var inquirer = require ("inquirer");
var requestTwit = require ("twitter");
var requestSpot = require ("node-spotify-api");

var keys = require ("./keys");

/*var spotify = new requestTwit(keys.spotify);
var client = new requestSpot(keys.twitter);*/
console.log(JSON.stringify(keys,null,2))




