// storage
(function( alseis, $, undefined ) {

    // player class

    const LOCALSTORAGE_CONFIG_KEY = "alseis.config";

    const initial_players = [
        {
            name: "VC"
        },
        {
            name: "CDP"
        },
        {
            name: "PS"
        }
    ];

    const initial_nsheets = 4;

    alseis.Storage = function() {

    };



    alseis.Storage.prototype.GetConfig = function(sheet, play, val, bonus) {
        var stringdata = localStorage.getItem(LOCALSTORAGE_CONFIG_KEY);
        if (stringdata == null) {
            stringdata = JSON.stringify({
                nsheets: initial_nsheets,
                players: initial_players
            })
            localStorage.setItem(LOCALSTORAGE_CONFIG_KEY, stringdata);
        }
        return JSON.parse(stringdata);
    };

    alseis.Storage.prototype.SaveConfig = function(config) {
        localStorage.setItem(LOCALSTORAGE_CONFIG_KEY, JSON.stringify(config));
    }

}( window.alseis = window.alseis || {}, jQuery ));
