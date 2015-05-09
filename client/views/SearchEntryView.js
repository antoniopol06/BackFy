var SearchEntryView = Backbone.View.extend({
  tagName: 'div',

  className: 'pointer song',

  template: _.template('<div class="img"><img src="<%= album.images[0].url %>"/></div><div class="info"><b><%= artists[0].name %></b><p><%= name %></p></div>'),

  events: {
    'click': function(event){
      //this.model.play();
      this.model.addToList();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});