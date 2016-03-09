import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(resultsMap) {
      var address = this.get('address');
      this.set('map.city', address);
      var results = '';
      var container = this.$('.map-display')[0];
      var map = this.get('map');
      var options = {
        zoom: 13,
        //center: {lat: -34.397, lng: 150.644}
      };
      map.findAddress(container, options, address);
      //setMarker(45.522523, -122.685156);
      },

      populatePlaces() {
        var address = this.get('google-map.results.geometry.location');
        var places = this.get('places');
      }

    }
});
