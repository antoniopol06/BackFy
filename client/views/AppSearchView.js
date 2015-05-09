var AppSearchView = Backbone.View.extend({
  initialize: function(){
    this.searchInputView = new SearchInputView({collection: this.model.get('searchList')});
    this.searchView = new SearchView({collection: this.model.get('searchList')});

    this.searchView.collection.on('add', function(){
      this.searchView.render();
    }, this);

    this.searchView.collection.on('addToList', function(song){
      this.model.get('playerList').addToList(song);
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.searchInputView.$el,
      this.searchView.$el
    ]);
  }
});