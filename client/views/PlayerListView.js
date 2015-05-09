var PlayerListView = Backbone.View.extend({
  tagName: 'div',

  className: 'playlist',

  initialize: function() {
    this.render();
    this.collection.on('nextSong', function(song) {
      this.collection.remove(song);
    }, this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();


    if (this.collection.length === 0) {
      this.$el.html('<p>UPS! nothing in your playlist</p>');
    }else{
      this.$el.html('<h6>PLAYLIST</h6>').append(
        this.collection.map(function(song, index){
          return new PlayerEntryView({model: song}).render(index)
        })
      );
    }
  }
});