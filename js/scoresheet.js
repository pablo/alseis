// scoresheet class
(function( alseis, $, undefined ) {
  // private members
  var first_shot_bonus = 5;
  var actual_scores = {
    '_4': 4,
    '_5': 5,
    '_6': 6,
    '_straight': 20,
    '_fullhouse': 30,
    '_four_of_a_kind': 40,
    '_yahtzee': 50
  };
  var max_scores = {
    '_4': actual_scores['_4'] * 5,
    '_5': actual_scores['_5'] * 5,
    '_6': actual_scores['_6'] * 5,
    '_straight': actual_scores['_straight'] + first_shot_bonus,
    '_fullhouse': actual_scores['_fullhouse'] + first_shot_bonus,
    '_four_of_a_kind': actual_scores['_four_of_a_kind'] + first_shot_bonus,
    '_yahtzee': actual_scores['_yahtzee'] + first_shot_bonus
  };

  var _single_score = function(play, val) {
    return val*actual_scores[play];
  };

  alseis.Scoresheet = function(no, player) {
    this.notes = {
      '_4': undefined,
      '_5': undefined,
      '_6': undefined,
      '_straight': undefined,
      '_fullhouse': undefined,
      '_four_of_a_kind': undefined,
      '_yahtzee': undefined
    };
    this.no = no;
    this.player = player;
  };

  // public methods

  // static
  alseis.Scoresheet.GetColor = function (play, value, bonus) {
    console.log('play: ' + play + ' - value: ' + value);
    if (play == '_4' || play == '_5' || play == '_6') {
      var vv = value;
      if (vv >= 5)
        return 'primary';
      else if (vv >= 4)
        return 'success';
      else if (vv >= 2)
        return 'warning';
      else
        return 'danger';
    } else {
      if (value == 0)
        return 'danger';
      else if (bonus)
        return 'success';
      else
        return 'warning';
    }

  };


  // static
  alseis.Scoresheet.GetPlay = function (idx) {
    switch(idx) {
      case 0:
        return '_4';
      case 1:
        return '_5';
      case 2:
        return '_6';
      case 3:
        return '_straight';
      case 4:
        return '_fullhouse';
      case 5:
        return '_four_of_a_kind';
      case 6:
        return '_yahtzee';
    }
    return '';
  };

  /*
  alseis.Scoresheet.prototype.UpdateTotal = function()
  {
    var _html = 
      '<h2><span class="label label-info">' + 
      this.CurrentScore() + 
      '</span></h2>';
    var _total = "#_" + this.player.no + "_" + this.no;
    $(_total).html(_html);

    $('#_max_' + this.player.no + '_' + this.no).text(this.MaxScore());
  }
    */

  /* takes note of a play */
  alseis.Scoresheet.prototype.Note = function(play, val, bonus) {
    // TODO: add check for notes already commited?
    this.notes[play] = 
      _single_score(play, val) + (bonus ? first_shot_bonus : 0);

    // update ui
    /*
    var _id = "#_" + this.player.no + "_" + this.no + play;
    var _html = 
      '<h4><span class="label label-' + 
      alseis.Scoresheet.GetColor(play, val, bonus) + 
      '">' + this.notes[play] + 
      '</span></h4>';

    $(_id).html(_html);
    this.UpdateTotal();

    */
    $(this).trigger('score_changed', [this, play, val, bonus]);
  };

  // local function to get currents
  var _current_score = function(play) {
    if (!notes[play])
      return undefined;
    return notes[play];
  }

  /* returns current cumulative score */
  alseis.Scoresheet.prototype.CurrentScore = function() {
    var _current_score = 0;
    for (var p in this.notes) {
      if (this.notes.hasOwnProperty(p)) {
        _current_score += this.notes[p] ? this.notes[p] : 0;
      }
    }
    return _current_score;
  };

  /* returns max possible score */
  alseis.Scoresheet.prototype.MaxScore = function() {
    var _max_score = 0;
    for (var p in this.notes) {
      if (this.notes.hasOwnProperty(p)) {
        _max_score += this.notes[p] != undefined ? this.notes[p] : max_scores[p];
      }
    }
    return _max_score;
  }

}( window.alseis = window.alseis || {}, jQuery ));


