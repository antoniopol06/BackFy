var AppModel = Backbone.Model.extend({

  initialize: function() {
    this.set('searchList', new SearchListCollection());
    this.set('currentSong', new SongModel());
    this.set('playerList', new PlayListCollection());

  }

});