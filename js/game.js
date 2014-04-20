// game & player classes
(function( alseis, $, undefined ) {


  // player class

  alseis.Player = function(sheets) {
    this.sheets = sheets;
    this.name = null;
    // setup N (sheets) scoresheets
    this.scoresheets = [];
    for (var i=0; i < sheets; i++) {
      this.scoresheets.push(
        //new alseis.Scoresheet()
      );
    }
  };


  alseis.Player.prototype.Note = function(sheet, play, val, bonus) {
    this.scoresheets[sheet].Note(play, val, bonus);
  };

  alseis.Player.prototype.SetName = function(name) {
    this.name = name;
  };
  
  // game class

  alseis.Game = function(config)
  {
    this.config = config;
    this.players = [];
    for (var i = 0; i < config.nplayers; i++) {
      this.players.push(new alseis.Player(config.nsheets));
    }
  };

}( window.alseis = window.alseis || {}, jQuery ));
