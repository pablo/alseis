// uihelper class
(function( alseis, $, undefined ) {

  alseis.add_scoresheet_column = function(game, scoresheet_no, $table) {
    $($table).find('thead .score_play_header').append('<th colspan="' + game.players.length + '">' + scoresheet_no + '</th>');
    $($table).find('thead .score_players_header').each(function() {
      for (var i = 0; i < game.players.length; i++) 
      {
        $(this).append('<th>' + game.players[i].name + '</th>');
      }
    });
    $($table).find('tbody .headers_col').each(function() {
      for (var i = 0; i < game.players.length; i++) 
      {
        $(this).after('<td class="notecell"></td>');
      }
    });
  };

}( window.alseis = window.alseis || {}, jQuery ));
