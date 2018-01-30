var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'adithyamahesha@gmail.com',
		pass: '*************'
	}
});
var mailOptions = {
	from: 'adithyamahesha@gmail.com',
	to: 'adithyamaheshb@gmail.com,helloworld@gmail.com',
	subject: 'Sending Email using Node.js',
	text: "Hello, World!",
	//html: '<h3>Hello World!</h3>'
};
transporter.sendMail(mailOptions, function(error, info) {
	if(error) {
		console.log(error);
	}
	else{
		console.log('Email sent: ' + info.response);
	}
});