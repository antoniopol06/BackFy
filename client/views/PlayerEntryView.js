var PlayerEntryView = Backbone.View.extend({
  tagName: 'div',

  className: 'pointer song-list',

  template: _.template('<img src="<%= album.images[0].url %>"/><%= name.replace(name.slice(30), "...") %>'),

  events: {
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});