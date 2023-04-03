# WEBMAP
Impianti Agro-Fv Webmap
# <!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="resources/ol.css">
        <link rel="stylesheet" href="resources/fontawesome-all.min.css">
        <link rel="stylesheet" href="resources/ol-layerswitcher.css">
        <link rel="stylesheet" href="resources/qgis2web.css">
        <style>
        .ol-geocoder.gcd-gl-container {
            top: 100px!important;
            left: .5em!important;
            width: 2.1em!important;
            height: 2.1em!important;
        }
        .ol-geocoder .gcd-gl-container{
            width: 2.1em!important;
            height: 2.1em!important;
        }
        .ol-geocoder .gcd-gl-control{
            width: 2.1em!important;
        }
        .ol-geocoder .gcd-gl-expanded {
            width: 15.625em!important;
            height: 2.1875em;
        }
        .ol-touch .ol-geocoder.gcd-gl-container{
            top: 130px!important;
        }
        .ol-geocoder .gcd-gl-btn {
            width: 1.375em!important;
            height: 1.375em!important;
            top: .225em!important;
            background-image: none!important;
        }
        </style>
<style>
.search-layer {
  top: 135px;
  left: .5em;
}
.ol-touch .search-layer {
  top: 180px;
}
</style>
        <style>
        html, body {
            background-color: #ffffff;
        }
        .ol-control button {
            background-color: #f8f8f8 !important;
            color: #000000 !important;
            border-radius: 0px !important;
        }
        .ol-zoom, .geolocate, .gcd-gl-control .ol-control {
            background-color: rgba(255,255,255,.4) !important;
            padding: 3px !important;
        }
        .ol-scale-line {
            background: none !important;
        }
        .ol-scale-line-inner {
            border: 2px solid #f8f8f8 !important;
            border-top: none !important;
            background: rgba(255, 255, 255, 0.5) !important;
            color: black !important;
        }
        </style>
        <link href="resources/ol-geocoder.min.css" rel="stylesheet">
<style>
.tooltip {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: white;
  padding: 4px 8px;
  opacity: 0.7;
  white-space: nowrap;
}
.tooltip-measure {
  opacity: 1;
  font-weight: bold;
}
.tooltip-static {
  background-color: #ffcc33;
  color: black;
  border: 1px solid white;
}
.tooltip-measure:before,
.tooltip-static:before {
  border-top: 6px solid rgba(0, 0, 0, 0.5);
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  content: "";
  position: absolute;
  bottom: -6px;
  margin-left: -7px;
  left: 50%;
}
.tooltip-static:before {
  border-top-color: #ffcc33;
}
.measure-control {
  top: 65px;
  left: .5em;
}
.ol-touch .measure-control {
  top: 80px;
}
</style>
        <style>
        html, body, #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }
        </style>
        <title></title>
    </head>
    <body>
        <div id="map">
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </div>
        <script src="resources/qgis2web_expressions.js"></script>
        <script src="resources/polyfills.js"></script>
        <script src="resources/functions.js"></script>
        <script src="resources/ol.js"></script>
        <script src="resources/ol-layerswitcher.js"></script>
        <script src="resources/ol-geocoder.js"></script>
        <script src="layers/ZPS_1.js"></script><script src="layers/ZSC_2.js"></script><script src="layers/ZSCZPS_3.js"></script><script src="layers/IBAAreeimportantiperavifauna_4.js"></script><script src="layers/Pericolositgeomorfologica_5.js"></script><script src="layers/Rischiogeomorfologico_6.js"></script><script src="layers/DissestiperAttivit_7.js"></script><script src="layers/Incendi2014_8.js"></script><script src="layers/Incendi2015_9.js"></script><script src="layers/Incendi2016_10.js"></script><script src="layers/Incendi2017_11.js"></script><script src="layers/Incendi2018_12.js"></script><script src="layers/Incendi2019_13.js"></script><script src="layers/Incendi2020_14.js"></script><script src="layers/Incendi2021_15.js"></script><script src="layers/Incendi2013_16.js"></script><script src="layers/Incendi2012_17.js"></script><script src="layers/Incendi2011_18.js"></script><script src="layers/Incendi2010_19.js"></script><script src="layers/Incendi2009_20.js"></script><script src="layers/Incendi2008_21.js"></script><script src="layers/Incendi2007_22.js"></script><script src="layers/CartaforestaleLR1996_23.js"></script><script src="layers/vincoloidrogeologico_24.js"></script><script src="layers/CartaHabitatsecondonatura2000HN2_25.js"></script><script src="layers/benipaesaggisticiDLgs4204_26.js"></script><script src="layers/CTR_2012_2013_27.js"></script><script src="layers/LOTTODIPROGETTO_28.js"></script><script src="layers/AREEINTERESSATEDATECNOLOGIAFV_29.js"></script>
        <script src="styles/ZPS_1_style.js"></script><script src="styles/ZSC_2_style.js"></script><script src="styles/ZSCZPS_3_style.js"></script><script src="styles/IBAAreeimportantiperavifauna_4_style.js"></script><script src="styles/Pericolositgeomorfologica_5_style.js"></script><script src="styles/Rischiogeomorfologico_6_style.js"></script><script src="styles/DissestiperAttivit_7_style.js"></script><script src="styles/Incendi2014_8_style.js"></script><script src="styles/Incendi2015_9_style.js"></script><script src="styles/Incendi2016_10_style.js"></script><script src="styles/Incendi2017_11_style.js"></script><script src="styles/Incendi2018_12_style.js"></script><script src="styles/Incendi2019_13_style.js"></script><script src="styles/Incendi2020_14_style.js"></script><script src="styles/Incendi2021_15_style.js"></script><script src="styles/Incendi2013_16_style.js"></script><script src="styles/Incendi2012_17_style.js"></script><script src="styles/Incendi2011_18_style.js"></script><script src="styles/Incendi2010_19_style.js"></script><script src="styles/Incendi2009_20_style.js"></script><script src="styles/Incendi2008_21_style.js"></script><script src="styles/Incendi2007_22_style.js"></script><script src="styles/CartaforestaleLR1996_23_style.js"></script><script src="styles/vincoloidrogeologico_24_style.js"></script><script src="styles/CartaHabitatsecondonatura2000HN2_25_style.js"></script><script src="styles/benipaesaggisticiDLgs4204_26_style.js"></script><script src="styles/CTR_2012_2013_27_style.js"></script><script src="styles/LOTTODIPROGETTO_28_style.js"></script><script src="styles/AREEINTERESSATEDATECNOLOGIAFV_29_style.js"></script>
        <script src="layers/layers.js" type="text/javascript"></script> 
        <script src="resources/Autolinker.min.js"></script>
        <script src="resources/qgis2web.js"></script>
    </body>
</html>
