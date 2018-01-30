var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

//readStream object fires events when opening and closing files.
var rs = fs.createReadStream('./file.html');
rs.on('open', function () {
	console.log('The file is open');
	});
	
//events is the built-in module
//all event methods and properties are an instance of EventEmitter object	
 	var js = function () {
		console.log('I love JavaScript');
	}
	var react = function () {
		console.log('I love React.js');
	}
	var web = function () {
		console.log('I love creating front-end components');
	}
	
	eventEmitter.on('JavaScript', js);
	eventEmitter.on('ReactJS', react);
	eventEmitter.on('WebDevelopment', web);
	
	eventEmitter.emit('JavaScript');
	eventEmitter.emit('ReactJS');
	eventEmitter.emit('WebDevelopment');