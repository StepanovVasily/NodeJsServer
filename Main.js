var app = require('./app.js');// express();





app.get('/', function(req, res){
 


//if(req.url=="/favicon.ico")//отправка иконки при обращении клиента
//res.end(fs.readFileSync('favicon.ico'));

//if(req.url=="resourse/info")//загрузка файла "info" при маршруте "resourse/info"
//var text = fs.readFileSync('resourse/info.html', 'utf8');

//else
//var text = fs.readFileSync('index', 'utf8');//В остальных случаях загружать файл "index"

//res.end(text);	
});

app.listen(2000);

