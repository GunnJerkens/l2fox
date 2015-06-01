;(function($) {

  function Countdown() {
    this.today  = new Date();
    this.geddon = new Date(this.today.getFullYear(), 05, 08);
    this.remain = {
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    };
  }

  Countdown.prototype.run = function() {
    var diff = this.getDateDiff();
    this.convertEpoch(diff);
    this.updateDisplay();
  };

  Countdown.prototype.getDateDiff = function() {
    return Math.abs(this.geddon.getTime() - this.today.getTime());
  };

  Countdown.prototype.convertEpoch = function(epoch) {
    this.remain.seconds = Math.floor(epoch/1000);
    this.remain.minutes = Math.floor(this.remain.seconds/60);
    this.remain.hours   = Math.floor(this.remain.minutes/60);
    this.remain.days    = Math.floor(this.remain.hours/24);

    this.remain.hours = this.remain.hours-(this.remain.days*24);
    this.remain.minutes = this.remain.minutes-(this.remain.days*24*60)-(this.remain.hours*60);
    this.remain.seconds = this.remain.seconds-(this.remain.days*24*60*60)-(this.remain.hours*60*60)-(this.remain.minutes*60);
  };

  Countdown.prototype.updateDisplay = function() {
    var days    = this.remain.days + ":",
        hours   = this.remain.hours + ":", 
        minutes = this.remain.minutes + ":";

    if(this.remain.days < 10) {
      days = "0" + days;
    }

    if(this.remain.hours < 10) {
      hours = "0" + hours;
    }

    if(this.remain.minutes < 10) {
      minutes = "0" + minutes;
    }

    $('#days').text(days);
    $('#hours').text(hours);
    $('#minutes').text(minutes);
    $('#seconds').text(this.remain.seconds);
  };

  function loadApp() {
    var cd = new Countdown();
    cd.run();
  }

  setInterval(loadApp, 1000);

})(jQuery);