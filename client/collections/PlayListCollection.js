var PlayListCollection = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(){

  },

  addToList: function(song){
    this.add(song);
  }

})