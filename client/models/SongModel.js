var SongModel = Backbone.Model.extend({

  addToList: function() {
    this.trigger('addToList', this);
  },

  nextSong: function() {
    this.trigger('nextSong', this);
  }

});