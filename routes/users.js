var express = require('express');
var path = require('path');
var fs = require('fs')
var util = require('util')
var router = express.Router();
var nedb = require('nedb')
  , planets = new nedb({ filename: path.join(__dirname, '../Data', 'DataB.db'), autoload: true });


router.get('/', function(req, res, next) {
// Let's insert some data
var app = express();

     
      // Now we can query it the usual way
     // planets.find({ satellites: { $lt: 10 } }, function (err, docs) {
        // docs is an array containing Earth and Mars
     
 //planets.find({satellites:{$eq:1}},function(err,docs){res.write('тут'')});

/* GET users listing. */


res.write('	<!DOCTYPE html><html>\
<head>\
        <meta charset="utf-8">\
        <title>База данных</title>\
        <link rel="stylesheet" href="stylesheets/style.css">\
    </head>\
    <body>\
    <a href="/"><-Меню</a>\
        <h1>Информация</h1>\
        <p>Это страница с информацией</p>\
        <p>Тут пока пусто</p>');
//res.write(req.query);
planets.update(req.query._id,req.query.name);
       planets.find({}).exec(function (err,docs)
       {
 res.write('<table cellpadding="3"  >');      	
      for(var i=0; i<docs.length; i++)
  
res.write(' <td><form><input name="'+docs[i]._id+'" size ="10" value="'+docs[i].name+'" <td>\
	<input type="submit" value="Изменить">\
	<input type="submit" value="Удaлить">\
	<td><td><td><input name="name" size ="10" value="'+
	docs[i].satellites+'"<td>\
	<input type="submit" value="Изменить">\
	<input type="submit" value="Удалить"></form><tr>');
res.write('</body></html>');



 res.end('');
       });
});

module.exports = router;
