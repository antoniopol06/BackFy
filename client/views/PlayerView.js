var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
  },

  events: {
    'timeupdate': function(event) {
      var audio = event.target;
      var percent = Math.floor((audio.currentTime / audio.duration) * 100);
      $('.loading').css({width: percent + "%"});
    },
    'ended': function(event) {
      this.model.nextSong();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('preview_url') : '');
  }

});