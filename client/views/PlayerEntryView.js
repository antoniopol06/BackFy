var PlayerEntryView = Backbone.View.extend({
  tagName: 'div',

  className: 'song-list',

  initialize: function(){
    this.template = _.template($('#entryview').html());
  },

  events:{
  },

  render: function(index){
    this.model.set('indexElement',index);
    return this.$el.html(this.template(this.model.attributes));
  }
});