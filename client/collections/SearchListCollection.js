var SearchListCollection = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.spotify.com/v1/search',

  parse: function(response, options){
    return response.tracks.items;
  },

  loadResults: function(stringSearch){
    var data = {
      q: stringSearch,
      type: 'track'
    };
    this.fetch({
      data: data,
      success: function() {
      }.bind(this)
    });
  }
});