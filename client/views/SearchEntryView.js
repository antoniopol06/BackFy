var SearchEntryView = Backbone.View.extend({
  tagName: 'div',

  className: 'pointer song',

  initialize: function() {
    this.template = _.template($('#searchentry').html());
  },

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