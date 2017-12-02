const express = require('express');
const router = express.Router();
var ldap = require('ldapjs');
var ldapController = require("../controllers/ldapController");

router.post('/ldapauthenticate', ldapController);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
