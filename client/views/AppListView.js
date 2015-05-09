var AppListView = Backbone.View.extend({
  initialize: function(){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.playerListView = new PlayerListView({collection: this.model.get('playerList')});

    this.playerListView.collection.on('add', function(song){
      this.playerListView.render();
    }, this);


  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.playerListView.$el
    ]);
  }
});