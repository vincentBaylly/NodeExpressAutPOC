
var util = require('util'),
    ldap = require('ldapjs');


var OPTS = {
      server: {
        url: 'ldap://ldap.server.url'
      },
      bindDN: 'CN=??,OU=??,OU=??,DC=??,DC=??,DC=??',
      bindCredentials: 'secret',
      searchBase: 'DC=??,DC=??,DC=??',
      searchFilter: {
                        filter: '(sAMAccountName=username)',
                        scope: 'sub'
                    }
    }

ldapController = function(request, response, next) {

    var client = ldap.createClient(OPTS.server);

    if(!request.body.username){
      response.status(406).send('username/password not set');
    }

    OPTS.searchFilter.filter = '(sAMAccountName=' + request.body.username + ')';

    client.on('error', function(err) {
        response.status(500).send(err);
    });

    client.bind(OPTS.bindDN, OPTS.bindCredentials, function(err, bindResult) {
      if (err) {
          // Invalid credentials / user not found are not errors but login failures
          if (err.name === 'InvalidCredentialsError' || err.name === 'NoSuchObjectError' ||
              (typeof err === 'string' && err.match(/no such user/i))) {
              response.status(406).send('Invalid username/password');
          }
          // Other errors are (most likely) real errors
          response.status(500).send(err);
      }

      client.search(OPTS.searchBase, OPTS.searchFilter, function(err, searchResult) {

        if (err) {
            response.status(500).send(err);
        }

        var items = [];
        searchResult.on('searchEntry', function(entry) {
            items.push(entry.object);
        });

        searchResult.on('error', function(err) {
            response.status(500).send(err);
        });

        searchResult.on('end', function() {
          if(items[0]){
            console.log('[INFO] user : ' + JSON.stringify(items[0].name));
            response.status(200).send(items[0]);
          }
          client.unbind();
        });

      });

    });

    return next;

  }

module.exports = ldapController;
