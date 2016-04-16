// nothing to see yet !

var Myapp = new Backbone.Marionette.Application();

Myapp.addRegions({
  mainRegion: '#content'
});

// Model
var Hero = Backbone.Model.extend({});

// Collection
var Heroes = Backbone.Collection.extend({
  model: Hero
});

// Views
var HeroView = Backbone.Marionette.ItemView.extend({
  template: '#accordion-group-template',
  className: 'accordion-group'
});

var AccordionView = Backbone.Marionette.CollectionView.extend({
  itemView: HeroView,
  className: 'accordion'
});

// Start Application here
$(function() {
  console.log('Start application');
  Myapp.addInitializer(function(options) {
    var heroes = new Heroes(options.heroes);

    var accordionView = new AccordionView({
      collection: heroes
    });
    Myapp.mainRegion.show(accordionView);
  });

  Myapp.start({heroes: heroes});
});
