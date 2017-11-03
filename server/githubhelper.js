const request = require('request');
const config = require('../config.js');

let getReposByUsername = (/* TODO */) => {

  let options = {
    url: 'https://api.github.com/users/octocat/',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }

    
  };
  request.get(options, function(err, res, body) {
    console.log('REQUEST TO GITHUB MADE ', res)


  });

}

module.exports.getReposByUsername = getReposByUsername;