// scoresheet class
(function( alseis, $, undefined ) {
  // private members
  var first_shot_bonus = 5;
  var actual_scores = {
    '_straight': 20,
    '_fullhouse': 30,
    '_four_of_a_kind': 40,
    '_yahtzee': 50
  };
  var max_scores = {
    '_4': 16,
    '_5': 20,
    '_6': 30,
    '_straight': actual_scores['_straight'] + first_shot_bonus,
    '_fullhouse': actual_scores['_fullhouse'] + first_shot_bonus,
    '_four_of_a_kind': actual_scores['_four_of_a_kind'] + first_shot_bonus,
    '_yahtzee': actual_scores['_yahtzee'] + first_shot_bonus
  };

  var _single_score = function(play, val) {
    if (play == '_4')
      return 4*val;
    else if (play == '_5')
      return 5*val;
    else if (play == '_6')
      return 6*val;
    else
      return actual_scores[play];
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

  alseis.Scoresheet.prototype.UpdateTotal = function()
  {
    var _total = "#_" + this.player.no + "_" + this.no;
    $(_total).text(this.CurrentScore());
  }


  /* takes note of a play */
  alseis.Scoresheet.prototype.Note = function(play, val, bonus) {
    // TODO: add check for notes already commited?
    this.notes[play] = 
      _single_score(play, val) + (bonus ? first_shot_bonus : 0);

    // update ui
    var _id = "#_" + this.player.no + "_" + this.no + play;
    $(_id).text(this.notes[play]);
    this.UpdateTotal();
    $(this).trigger('score_changed', [this]);
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
        _max_score += this.notes[p] ? this.notes[p] : max_notes_score[p];
      }
    }
    return _max_score;
  }

}( window.alseis = window.alseis || {}, jQuery ));


