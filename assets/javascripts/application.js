// nothing to see yet !

var Myapp = new Backbone.Marionette.Application();

var Myapp.addRegions({
  mainRegion: '#content'
});

// Model
var Hero = Backbone.model.extend({});

// Collection
var Heroes = Backbone.Collection.extend({
  model: Hero
});

var HeroView = Backbone.Marionette.ItewView.extend({
  template: '#accordion-group-template'
});


var AccordionView = Backbone.Marionette.CollectionView.extend({
  itemView: HeroView
});
