// nothing to see yet !

var Myapp = new Backbone.Marionette.Application();

Myapp.addRegions({
  mainRegion: '#content'
});

// Model
var Hero = Backbone.Model.extend({});
var Villain = Backbone.Model.extend({});

// Collection
var Heroes = Backbone.Collection.extend({
  model: Hero
});

var Villains = Backbone.Collection.extend({
  model: Villain
});

// Views
var VillainView = Backbone.Marionette.ItemView.extend({
  template: '#villain-template',
  tagName: 'li',
  events: {
    'click': 'logInfoUrl'
  },
  logInfoUrl: function() {
    console.log(this.model.get('info_url'));
  }
});

var HeroView = Backbone.Marionette.CompositeView.extend({
  template: '#accordion-group-template',
  className: 'accordion-group',

  events: {
    'click a': 'logInfoUrl'
  },
  logInfoUrl: function() {
    console.log('*******s', this.model.get('info_url'));
  },
  initialize: function() {
    this.collection = this.model.get('villains');
  }
});

var AccordionView = Backbone.Marionette.CollectionView.extend({
  id: 'heroList',
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

    heroes.each(function(hero) {
      var villains = hero.get('villains');
      var villainCollection = new Villains(villains);
      hero.set('villains', villainCollection);
    });

    Myapp.mainRegion.show(accordionView);
  });

  Myapp.start({heroes: heroes});
});
