var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    if(!this.model){
      this.el.pause();
    }
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('preview_url') : '');
  }

});