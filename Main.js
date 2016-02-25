var http = require('http');

var server =new http.Server();

server.listen(2000,'127.0.0.1');



server.on('request',function(req,res){

var fs = require('fs');

if(req.url=="/favicon.ico")//отправка иконки при обращении клиента
res.end(fs.readFileSync('favicon.ico'));



if(req.url=="/resourse/info")//загрузка файла "info" при маршруте "resourse/info"
var text = fs.readFileSync('resourse/info.html', 'utf8');

else
var text = fs.readFileSync('index', 'utf8');//В остальных случаях загружать файл "index"

res.end(text);	
});