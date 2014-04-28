// game & player classes
(function( alseis, $, undefined ) {


  // player class

  alseis.Player = function(no, sheets) {
    this.no = no;
    this.sheets = sheets;
    this.name = null;
    // setup N (sheets) scoresheets
    this.scoresheets = [];
    var player = this;
    for (var i=0; i < sheets; i++) {
      var scoresheet = new alseis.Scoresheet(i, player);
      $(scoresheet).on('score_changed', function(e, scoresheet) {
        $(player).trigger('score_changed', [scoresheet, player]);
      });
      this.scoresheets.push(scoresheet);
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
    var game = this;
    for (var i = 0; i < config.nplayers; i++) {
      var player = new alseis.Player(i, config.nsheets);
      $(player).on('score_changed', function(e, scoresheet, player) {
        $(game).trigger('score_changed', [scoresheet, player, game]);
      });
      this.players.push(player);
    }
  };

  alseis.Game.prototype.Note = function(player, sheet, play, val, bonus)
  {
    this.players[player].Note(sheet, play, val, bonus);
  };

}( window.alseis = window.alseis || {}, jQuery ));
