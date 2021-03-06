"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KpIndexToGeomagneticLat = KpIndexToGeomagneticLat;
exports.GeomagneticLatToKPIndex = GeomagneticLatToKPIndex;
var KP_INDEX_MIN = 0;
var KP_INDEX_MAX = 9;

//above the max the kpValue don't change
var GOEMAG_LAT_MAX = 66.5;

//Under this threshold value the kPValue don't change
var GOEMAG_LAT_MIN = 48.1;

function KpIndexToGeomagneticLat(kpIndex) {
  //If above the 0 line
  if (kpIndex == KP_INDEX_MIN) {
    return GOEMAG_LAT_MAX;
  }
  //if not realy in the north
  if (kpIndex >= KP_INDEX_MAX) {
    return GOEMAG_LAT_MIN;
  }
  return (133037 - 4097 * kpIndex) / 2000;
}

function GeomagneticLatToKPIndex(geomagnaticLat) {
  //If above the 0 line
  if (geomagnaticLat > GOEMAG_LAT_MAX) {
    return KP_INDEX_MIN;
  }
  //if not realy in the north
  if (geomagnaticLat < GOEMAG_LAT_MIN) {
    return KP_INDEX_MAX;
  }

  return (geomagnaticLat - 68.567) / -2.0485 - 1;
}