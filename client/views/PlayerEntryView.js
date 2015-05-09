var PlayerEntryView = Backbone.View.extend({
  tagName: 'div',

  className: 'pointer song-list',

  template: _.template('<% if(indexElement == 0) { %> <div class="loading"></div> <% } %><img src="<%= album.images[0].url %>"/><%= name.length > 30 ? name.replace(name.slice(30), "...") : name %>'),

  events: {
  },

  render: function(index){
    this.model.set('indexElement',index);
    return this.$el.html(this.template(this.model.attributes));
  }
});