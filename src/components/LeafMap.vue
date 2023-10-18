<template>
  <l-map :zoom="zoom" :center="center" @click="handleLatLang">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
  </l-map>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
import 'leaflet/dist/leaflet.css';

export default {
  name: "LeafMap",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159]
    };
  },
  methods: {
    handleLatLang: function(e) {
      const {lat, lng} = e.latlng;
      this.markerLatLng = [lat, lng];
    }
  }
}
</script>
<style lang="scss">
  .vue2leaflet-map {
    height: 510px;
    @media screen and (max-width: $mobile-breakpoint) {
      height: 250px;
    }
  }
</style>