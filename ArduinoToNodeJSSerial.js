var SerialPort = require('serialport');// include the library
// get port name from the command line:
var portName = process.argv[2];
var myPort = new SerialPort(portName, 9600);
var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read ASCII lines
myPort.pipe(parser); // pipe the serial stream to the parser

myPort.on('open', showPortOpen);
parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.baudRate);
}

function readSerialData(data) {
//This is where the code goes!!!!!!
	var myData = data.trim(); //trim cuts out whitespace from the incoming data so it's a clean string we can work with.
   	if(myData === "test"){console.log("Detected test string!");}
   	else{console.log(myData);}
//End of code. Back to basic port functions.
}

function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}

//Use this function to send data to the Arduino
function sendToSerial(data) {
 console.log("sending to serial: " + data);
 myPort.write(data);
}