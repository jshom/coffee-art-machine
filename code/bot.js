var five = require("johnny-five");
var sleep = require("sleep");

//init board
var board = new five.board();

board.on("ready", function() {
  //init of parts
  var servo_nozzle = new five.Servo(1);
  var servo_base = new five.Servo(2);
  var led = new five.led(3);

  //configure
  servo_base.min(180);
  servo_nozzle.min(180);

  function begin() {
    //open valve
    servo_nozzle.to()
  }


});
