var SearchView = Backbone.View.extend({
  tagName: 'div',

  className: 'search',

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    if (this.collection.length > 0) {
      this.$el.html('<h6>RESULTS</h6>').append(
        this.collection.map(function(song){
          return new SearchEntryView({model: song}).render();
        })
      );
    }
  }
});