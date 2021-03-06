
(function() {

if(typeof(L) == "undefined") 
  return;

/**
 * this is a dummy layer class that modifies the leaflet DOM element background 
 * instead of creating a layer with div
 */
var LeafLetPlainLayerView = L.Class.extend({
  includes: L.Mixin.Events,

  initialize: function(layerModel, leafletMap) {
    cdb.geo.LeafLetLayerView.call(this, layerModel, this, leafletMap);
  },

  onAdd: function() {
    this.redraw();
  },

  onRemove: function() { 
  },

  _modelUpdated: function() {
    this.redraw();
  },

  redraw: function() {
    var div = this.leafletMap.getContainer()
    div.style.backgroundColor = this.model.get('color');
    if(this.model.get('image')) {
      var st = 'url(' + this.model.get('image') + ') repeat center center';
      if(this.model.get('color')) {
        div.style.background = st + ' ' + this.model.get('color');
      }
    }
  }
});

_.extend(LeafLetPlainLayerView.prototype, cdb.geo.LeafLetLayerView.prototype);

cdb.geo.LeafLetPlainLayerView = LeafLetPlainLayerView;

})();
