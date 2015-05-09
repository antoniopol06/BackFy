var AppListView = Backbone.View.extend({
  initialize: function(){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.playerListView = new PlayerListView({collection: this.model.get('playerList')});

    this.playerListView.collection.on('add', function(song) {
      if (this.playerListView.collection.length === 1){
        this.playerView.setSong(song);
      }
      this.playerListView.render();
    }, this);

    this.playerListView.collection.on('remove', function(song) {
      if (this.playerListView.collection.length > 0){
        this.playerView.setSong(_.first(this.playerListView.collection.models));
      }
      this.playerListView.render();
    }, this);

    this.playerView.model.on('change', function(song) {
      this.playerView.setSong(song.get('currentSong'));
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.playerListView.$el
    ]);
  }
});