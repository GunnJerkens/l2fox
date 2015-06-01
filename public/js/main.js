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
    $('#days').text("0" + this.remain.days + ":");
    $('#hours').text("0" + this.remain.hours + ":");
    $('#minutes').text("0" + this.remain.minutes + ":");
    $('#seconds').text(this.remain.seconds);
  };

  function loadApp() {
    var cd = new Countdown();
    cd.run();
  }

  setInterval(loadApp, 1000);

})(jQuery);