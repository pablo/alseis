// uihelper class
(function( alseis, $, undefined ) {

  alseis.add_scoresheet_column = function(game, scoresheet_no, $table) {
    $($table).find('thead .score_play_header').append('<th colspan="' + game.players.length + '">' + scoresheet_no + '</th>');
    $($table).find('thead .score_players_header').each(function() {
      for (var i = 0; i < game.players.length; i++)
      {
        $(this).append(
		'<th><h3><span class="label label-primary">' + 
		game.players[i].name + 
		'</span></h3><br/><span id="_max_' + i + '_' + 
		scoresheet_no + '" class="label label-success"></span></th>'
	);
      }
    });
    $($table).find('tbody .headers_col').each(function(idx, elem) {
      var $where = $(elem).siblings().length > 0 ? $(elem).siblings(':last') : $(elem);
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
        $where.after($inserted);
        $where = $inserted;

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
