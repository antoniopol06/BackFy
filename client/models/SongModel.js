var SongModel = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  addToList: function(){
    this.trigger('addToList', this);
  }

});