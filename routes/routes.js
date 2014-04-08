module.exports = function(app, models, log, cache, io){
  var sock;
  io.sockets.on('connection', function (socket) {
    sock = socket;
  });


  app.get('/', function(req, res){
  	res.render('index');
  });


  /*
  * This service will be used to render the landing page.
  */
  app.get('/partials/landing', function(req, res){
    res.render('partials/landing');
  });

  /*
  * This service will be used to render the another page.
  */
  app.get('/partials/anotherpage', function(req, res){
    res.render('partials/anotherpage');
  });

  /*
  * This service will be used to get some sample data.
  */
  app.get('/getsampledata', function(req, res){
    models.sample.find({}, function(err, samples) {
      res.send({data: samples});
    });
  });


  /*
  * This service will be used to save sample data to mongodb
  */
  app.post('/addsampledata', function(req, res){
    log.info('Data recieved: '+ JSON.stringify(req.body));
    var sam = new models.sample();
    sam.sampleName = req.body.name;
    sam.save();
    res.send(200);
  });


  app.get('*', function(req, res){
    res.render('index');
  });  

};