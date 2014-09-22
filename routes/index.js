var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var AWS = require('aws-sdk');
    AWS.config.update({
        accessKeyId: '[YOUR accessKeyId]',
        secretAccessKey: '[YOUR secretAccessKey]',
        region: '[YOUR region, like ap-southeast-1]'
    });
    var sns = new AWS.SNS();

    var params = {
        Protocol: 'http', // required
        TopicArn: '[YOUR TopicArn]', // required
        Endpoint: '[YOUR sitename, like http://xxx.com]'
    };
    sns.subscribe(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            res.render('index', { title: 'Express' });
            console.log(data); // successful response
        }
    });
});

router.post('/', function(req, res) {
    var SNSClient = require('aws-snsclient');

    var client = SNSClient(function(err, message) {
        console.log(message.Message);
    });
    res.send(client(req, res));
});

module.exports = router;
