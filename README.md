AWS_SNS_Client_Demo
===================

Use AWS SNS Service and Nodejs/Express4.x

Easy to use, steps:

1. Clone the code, modify routes/index.js, substitute the [YOUR XXX] to yours.

2. Add topic in the AWS, https://console.aws.amazon.com/sns, like demo_sns, you will get Topic ARN:
arn:aws:sns:ap-southeast-1:237689230225:demo_sns

3. Put the code to server you had, execute: npm start, then visit the site from Browser, you will get the log like below:
> root@iZ28jcpiof0Z:~/subscribe/myapp# npm start

> myapp@0.0.0 start /root/subscribe/myapp
> node ./bin/www

> GET / 304 4625.617 ms - -
> { ResponseMetadata: { RequestId: '64c4f641-aceb-56p7-87ba-bag82b4e8c3d' },
  SubscriptionArn: 'pending confirmation' }
> POST / 200 4.461 ms - -
> GET /stylesheets/style.css 200 96.106 ms - 110

4. Publish message from AWS console, you will get the log like below.

> POST / 200 1.104 ms - -
> TestMessage