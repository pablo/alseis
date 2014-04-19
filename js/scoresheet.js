// scoresheet object
(function( scoresheet, $, undefined ) {

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

  var notes = {
    '_4': undefined,
    '_5': undefined,
    '_6': undefined,
    '_straight': undefined,
    '_fullhouse': undefined,
    '_four_of_a_kind': undefined,
    '_yahtzee': undefined
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

  // public members

  /* takes note of a play */
  scoresheet.note = function(play, val, bonus) {
    // TODO: add check for notes already commited
    notes[play] = _single_score(play, val) + (bonus ? first_shot_bonus : 0);
  };

  // local function to get currents
  var _current_score = function(play) {
    if (!notes[play])
      return undefined;
    return notes[play];
  }

  /* returns current cumulative score */
  scoresheet.current_score = function() {
    var _current_score = 0;
    for (var p in notes) {
      if (notes.hasOwnProperty(p)) {
        _current_score += notes[p] ? notes[p] : 0;
      }
    }
    return _current_score;
  };

  /* returns max possible score */
  scoresheet.max_score = function() {
    var _max_score = 0;
    for (var p in notes) {
      if (notes.hasOwnProperty(p)) {
        _max_score += notes[p] ? notes[p] : max_notes_score[p];
      }
    }
    return _max_score;
  }

}( window.scoresheet = window.scoresheet || {}, jQuery ));


