var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.write('	<!DOCTYPE html><html>\
<head>\
        <meta charset="utf-8">\
        <title>Главная</title>\
        <link rel="stylesheet" href="stylesheets/style.css">\
    </head>\
    <body>\
        <h1>Меню:</h1>\
        <a href="/users">База данных</a>\
    </body>\
</html>');

  res.end('');
});

module.exports = router;
