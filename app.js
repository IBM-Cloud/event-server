var express = require('express');
var ibmbluemix = require('ibmbluemix');
var ibmdata = require('ibmdata');

var app = express();

var config = {
    applicationRoute : "yourApplicationRoute",
    applicationId : "yourApplicationId"
};

// init core sdk
ibmbluemix.initialize(config);

var logger = ibmbluemix.getLogger();

//redirect to cloudcode doc page when accessing the root context
app.get('/', function(req, res){
	res.sendfile('public/index.html');
});

// init service sdks 
app.use(function(req, res, next) {
    req.data = ibmdata.initializeService(req);
//    req.ibmpush = ibmpush.initializeService(req);
    req.logger = logger;
    next();
});

// init basics for an express app
app.use(require('./lib/setup'));

//uncomment below code to protect endpoints created afterwards by MAS
//var mas = require('ibmsecurity')();
//app.use(mas);

var ibmconfig = ibmbluemix.getConfig();

logger.info('mbaas context root: '+ibmconfig.getContextRoot());
// "Require" modules and files containing endpoints and apply the routes to our application
app.use(ibmconfig.getContextRoot(), require('./lib/accounts'));
app.use(ibmconfig.getContextRoot(), require('./lib/staticfile'));

// Want to see how you can easily extend this template to work with third party node modules?
// If so, add the Twilio service to your Mobile Cloud application and uncomment this next line.
// app.use(ibmconfig.getContextRoot(), require('./lib/mytwilio')(ibmbluemix));

app.listen(ibmconfig.getPort());
logger.info('Server started at port: '+ibmconfig.getPort());