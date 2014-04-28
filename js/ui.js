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
    $($table).find('tbody .headers_col').each(function(idx, elem) {
      for (var i = 0; i < game.players.length; i++) 
      {
        var play = alseis.Scoresheet.GetPlay(idx-1);
        var $inserted = $(
          '<td id="_' + i + '_' + scoresheet_no + play + '" ' +
          'class="notecell _notecell' + play +
          '"></td>'
        );
        $inserted.attr('data-value', idx + 3);
        $inserted.attr('data-player', i);
        $inserted.attr('data-scoresheet', scoresheet_no);
        $inserted.attr('data-play', alseis.Scoresheet.GetPlay(idx-1));
        var $row = $(this).after($inserted);
      }
    });
  };

  alseis.color_signals = {
    0: 'danger',
    1: 'danger',
    2: 'warning',
    3: 'warning',
    4: 'success',
    5: 'primary'
  };

  alseis.dice_image = function (v) {
    return 'img/dice-0' + v + '.png';
  }

  alseis.dice_image_tag = function(img_size, v) {
    return '<img width="' + img_size + '" src="' + alseis.dice_image(v) + '"/>'; } 

}( window.alseis = window.alseis || {}, jQuery ));
