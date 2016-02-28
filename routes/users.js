var express = require('express');
var path = require('path');
var fs = require('fs')
var util = require('util')
var router = express.Router();
var url = require('url');
var nedb = require('nedb')
  , planets = new nedb({ filename: path.join(__dirname, '../Data', 'DataB.db'), autoload: true });

router.get('/', function(req, res, next) {
// Let's insert some data
var app = express();
     
 //Парсинг запросов
var i=Object.keys( req.query);
var planetName=req.query[i[0]];
var countSat=req.query[i[1]];

//управление бд
if(req.query.Изменить=="Изменить")
planets.update({'_id':i[0]},{$set: { name:planetName,satellites:countSat}}, true);
if(req.query.Удалить=="Удалить")
planets.remove({ _id:i[0] }, {});
if(req.query.Добавить=="Добавить")
planets.insert({ name: '', satellites: 0 });


res.write('	<!DOCTYPE html><html>\
<head>  <meta charset="utf-8">\
        <title>База данных</title>\
        <link rel="stylesheet" href="stylesheets/style.css">\
    </head>\
    <body>\
    <a href="/"><-Меню</a>\
        <h1>Планеты</h1>\
        <p>Список планет и количество их спутников</p>');
//генерация таблицы
       planets.find({}).exec(function (err,docs)
       {
 res.write('<table cellpadding="3"  >');      	
      for(var i=0; i<docs.length; i++)
res.write(' <td><form><input name="'+docs[i]._id+'" size ="10" value="'+docs[i].name+'" <td>\
	<input name="satellites" size ="10" value="'+
	docs[i].satellites+'"<td>\
	<input type="submit" value="Изменить" name="Изменить">\
	<input type="submit" value="Удалить" name="Удалить"></form><tr>');
res.write('\
<form><input type="submit" value="Добавить" name="Добавить">\
</form></body></html>\
	');
 res.end('');
       });
});
module.exports = router;