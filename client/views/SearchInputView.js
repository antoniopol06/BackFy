var SearchInputView = Backbone.View.extend({

  tagName: 'div',

  className: 'search-input',

  el: '<input id="search-text" type="text" placeholder="SEARCH SONG">',

  events: {
    'keydown': 'keyDown'
  },

  keyDown: function(event){
    if (event.keyCode === 13) {
      this.collection.loadResults(this.$el.val());
      this.$el.val('');
    }
  },

  render: function(){
    this.$el.html(this.el);
  }

});