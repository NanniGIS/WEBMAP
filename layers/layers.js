var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ZPS_1 = new ol.format.GeoJSON();
var features_ZPS_1 = format_ZPS_1.readFeatures(json_ZPS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPS_1.addFeatures(features_ZPS_1);
var lyr_ZPS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZPS_1, 
                style: style_ZPS_1,
                interactive: true,
                title: '<img src="styles/legend/ZPS_1.png" /> ZPS'
            });
var format_ZSC_2 = new ol.format.GeoJSON();
var features_ZSC_2 = format_ZSC_2.readFeatures(json_ZSC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZSC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZSC_2.addFeatures(features_ZSC_2);
var lyr_ZSC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZSC_2, 
                style: style_ZSC_2,
                interactive: true,
                title: '<img src="styles/legend/ZSC_2.png" /> ZSC'
            });
var format_ZSCZPS_3 = new ol.format.GeoJSON();
var features_ZSCZPS_3 = format_ZSCZPS_3.readFeatures(json_ZSCZPS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZSCZPS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZSCZPS_3.addFeatures(features_ZSCZPS_3);
var lyr_ZSCZPS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZSCZPS_3, 
                style: style_ZSCZPS_3,
                interactive: true,
                title: '<img src="styles/legend/ZSCZPS_3.png" /> ZSC/ZPS'
            });
var format_IBAAreeimportantiperavifauna_4 = new ol.format.GeoJSON();
var features_IBAAreeimportantiperavifauna_4 = format_IBAAreeimportantiperavifauna_4.readFeatures(json_IBAAreeimportantiperavifauna_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IBAAreeimportantiperavifauna_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBAAreeimportantiperavifauna_4.addFeatures(features_IBAAreeimportantiperavifauna_4);
var lyr_IBAAreeimportantiperavifauna_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IBAAreeimportantiperavifauna_4, 
                style: style_IBAAreeimportantiperavifauna_4,
                interactive: true,
                title: '<img src="styles/legend/IBAAreeimportantiperavifauna_4.png" /> IBA - Aree importanti per avifauna'
            });
var format_Pericolositgeomorfologica_5 = new ol.format.GeoJSON();
var features_Pericolositgeomorfologica_5 = format_Pericolositgeomorfologica_5.readFeatures(json_Pericolositgeomorfologica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pericolositgeomorfologica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pericolositgeomorfologica_5.addFeatures(features_Pericolositgeomorfologica_5);
var lyr_Pericolositgeomorfologica_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pericolositgeomorfologica_5, 
                style: style_Pericolositgeomorfologica_5,
                interactive: true,
    title: 'Pericolosità geomorfologica<br />\
    <img src="styles/legend/Pericolositgeomorfologica_5_0.png" /> 1<br />\
    <img src="styles/legend/Pericolositgeomorfologica_5_1.png" /> 2<br />\
    <img src="styles/legend/Pericolositgeomorfologica_5_2.png" /> 3<br />\
    <img src="styles/legend/Pericolositgeomorfologica_5_3.png" /> 4<br />\
    <img src="styles/legend/Pericolositgeomorfologica_5_4.png" /> 4<br />\
    <img src="styles/legend/Pericolositgeomorfologica_5_5.png" /> 4<br />'
        });
var format_Rischiogeomorfologico_6 = new ol.format.GeoJSON();
var features_Rischiogeomorfologico_6 = format_Rischiogeomorfologico_6.readFeatures(json_Rischiogeomorfologico_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rischiogeomorfologico_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rischiogeomorfologico_6.addFeatures(features_Rischiogeomorfologico_6);
var lyr_Rischiogeomorfologico_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rischiogeomorfologico_6, 
                style: style_Rischiogeomorfologico_6,
                interactive: true,
    title: 'Rischio geomorfologico<br />\
    <img src="styles/legend/Rischiogeomorfologico_6_0.png" /> 1<br />\
    <img src="styles/legend/Rischiogeomorfologico_6_1.png" /> 2<br />\
    <img src="styles/legend/Rischiogeomorfologico_6_2.png" /> 3<br />\
    <img src="styles/legend/Rischiogeomorfologico_6_3.png" /> 4<br />'
        });
var format_DissestiperAttivit_7 = new ol.format.GeoJSON();
var features_DissestiperAttivit_7 = format_DissestiperAttivit_7.readFeatures(json_DissestiperAttivit_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissestiperAttivit_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissestiperAttivit_7.addFeatures(features_DissestiperAttivit_7);
var lyr_DissestiperAttivit_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissestiperAttivit_7, 
                style: style_DissestiperAttivit_7,
                interactive: true,
    title: 'Dissesti per Attività<br />\
    <img src="styles/legend/DissestiperAttivit_7_0.png" /> Attivo<br />\
    <img src="styles/legend/DissestiperAttivit_7_1.png" /> Inattivo<br />\
    <img src="styles/legend/DissestiperAttivit_7_2.png" /> Quiescente<br />\
    <img src="styles/legend/DissestiperAttivit_7_3.png" /> Stabilizzato artificialmente o naturalmente<br />'
        });
var format_Incendi2014_8 = new ol.format.GeoJSON();
var features_Incendi2014_8 = format_Incendi2014_8.readFeatures(json_Incendi2014_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2014_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2014_8.addFeatures(features_Incendi2014_8);
var lyr_Incendi2014_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2014_8, 
                style: style_Incendi2014_8,
                interactive: true,
                title: '<img src="styles/legend/Incendi2014_8.png" /> Incendi 2014'
            });
var format_Incendi2015_9 = new ol.format.GeoJSON();
var features_Incendi2015_9 = format_Incendi2015_9.readFeatures(json_Incendi2015_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2015_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2015_9.addFeatures(features_Incendi2015_9);
var lyr_Incendi2015_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2015_9, 
                style: style_Incendi2015_9,
                interactive: true,
                title: '<img src="styles/legend/Incendi2015_9.png" /> Incendi 2015'
            });
var format_Incendi2016_10 = new ol.format.GeoJSON();
var features_Incendi2016_10 = format_Incendi2016_10.readFeatures(json_Incendi2016_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2016_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2016_10.addFeatures(features_Incendi2016_10);
var lyr_Incendi2016_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2016_10, 
                style: style_Incendi2016_10,
                interactive: true,
                title: '<img src="styles/legend/Incendi2016_10.png" /> Incendi 2016'
            });
var format_Incendi2017_11 = new ol.format.GeoJSON();
var features_Incendi2017_11 = format_Incendi2017_11.readFeatures(json_Incendi2017_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2017_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2017_11.addFeatures(features_Incendi2017_11);
var lyr_Incendi2017_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2017_11, 
                style: style_Incendi2017_11,
                interactive: true,
                title: '<img src="styles/legend/Incendi2017_11.png" /> Incendi 2017'
            });
var format_Incendi2018_12 = new ol.format.GeoJSON();
var features_Incendi2018_12 = format_Incendi2018_12.readFeatures(json_Incendi2018_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2018_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2018_12.addFeatures(features_Incendi2018_12);
var lyr_Incendi2018_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2018_12, 
                style: style_Incendi2018_12,
                interactive: true,
                title: '<img src="styles/legend/Incendi2018_12.png" /> Incendi 2018'
            });
var format_Incendi2019_13 = new ol.format.GeoJSON();
var features_Incendi2019_13 = format_Incendi2019_13.readFeatures(json_Incendi2019_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2019_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2019_13.addFeatures(features_Incendi2019_13);
var lyr_Incendi2019_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2019_13, 
                style: style_Incendi2019_13,
                interactive: true,
                title: '<img src="styles/legend/Incendi2019_13.png" /> Incendi 2019'
            });
var format_Incendi2020_14 = new ol.format.GeoJSON();
var features_Incendi2020_14 = format_Incendi2020_14.readFeatures(json_Incendi2020_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2020_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2020_14.addFeatures(features_Incendi2020_14);
var lyr_Incendi2020_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2020_14, 
                style: style_Incendi2020_14,
                interactive: true,
                title: '<img src="styles/legend/Incendi2020_14.png" /> Incendi 2020'
            });
var format_Incendi2021_15 = new ol.format.GeoJSON();
var features_Incendi2021_15 = format_Incendi2021_15.readFeatures(json_Incendi2021_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2021_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2021_15.addFeatures(features_Incendi2021_15);
var lyr_Incendi2021_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2021_15, 
                style: style_Incendi2021_15,
                interactive: true,
                title: '<img src="styles/legend/Incendi2021_15.png" /> Incendi 2021'
            });
var format_Incendi2013_16 = new ol.format.GeoJSON();
var features_Incendi2013_16 = format_Incendi2013_16.readFeatures(json_Incendi2013_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2013_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2013_16.addFeatures(features_Incendi2013_16);
var lyr_Incendi2013_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2013_16, 
                style: style_Incendi2013_16,
                interactive: true,
                title: '<img src="styles/legend/Incendi2013_16.png" /> Incendi 2013'
            });
var format_Incendi2012_17 = new ol.format.GeoJSON();
var features_Incendi2012_17 = format_Incendi2012_17.readFeatures(json_Incendi2012_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2012_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2012_17.addFeatures(features_Incendi2012_17);
var lyr_Incendi2012_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2012_17, 
                style: style_Incendi2012_17,
                interactive: true,
                title: '<img src="styles/legend/Incendi2012_17.png" /> Incendi 2012'
            });
var format_Incendi2011_18 = new ol.format.GeoJSON();
var features_Incendi2011_18 = format_Incendi2011_18.readFeatures(json_Incendi2011_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2011_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2011_18.addFeatures(features_Incendi2011_18);
var lyr_Incendi2011_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2011_18, 
                style: style_Incendi2011_18,
                interactive: true,
                title: '<img src="styles/legend/Incendi2011_18.png" /> Incendi 2011'
            });
var format_Incendi2010_19 = new ol.format.GeoJSON();
var features_Incendi2010_19 = format_Incendi2010_19.readFeatures(json_Incendi2010_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2010_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2010_19.addFeatures(features_Incendi2010_19);
var lyr_Incendi2010_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2010_19, 
                style: style_Incendi2010_19,
                interactive: true,
                title: '<img src="styles/legend/Incendi2010_19.png" /> Incendi 2010'
            });
var format_Incendi2009_20 = new ol.format.GeoJSON();
var features_Incendi2009_20 = format_Incendi2009_20.readFeatures(json_Incendi2009_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2009_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2009_20.addFeatures(features_Incendi2009_20);
var lyr_Incendi2009_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2009_20, 
                style: style_Incendi2009_20,
                interactive: true,
                title: '<img src="styles/legend/Incendi2009_20.png" /> Incendi 2009'
            });
var format_Incendi2008_21 = new ol.format.GeoJSON();
var features_Incendi2008_21 = format_Incendi2008_21.readFeatures(json_Incendi2008_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2008_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2008_21.addFeatures(features_Incendi2008_21);
var lyr_Incendi2008_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2008_21, 
                style: style_Incendi2008_21,
                interactive: true,
                title: '<img src="styles/legend/Incendi2008_21.png" /> Incendi 2008'
            });
var format_Incendi2007_22 = new ol.format.GeoJSON();
var features_Incendi2007_22 = format_Incendi2007_22.readFeatures(json_Incendi2007_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendi2007_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendi2007_22.addFeatures(features_Incendi2007_22);
var lyr_Incendi2007_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendi2007_22, 
                style: style_Incendi2007_22,
                interactive: true,
                title: '<img src="styles/legend/Incendi2007_22.png" /> Incendi 2007'
            });
var format_CartaforestaleLR1996_23 = new ol.format.GeoJSON();
var features_CartaforestaleLR1996_23 = format_CartaforestaleLR1996_23.readFeatures(json_CartaforestaleLR1996_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaforestaleLR1996_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaforestaleLR1996_23.addFeatures(features_CartaforestaleLR1996_23);
var lyr_CartaforestaleLR1996_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CartaforestaleLR1996_23, 
                style: style_CartaforestaleLR1996_23,
                interactive: true,
                title: '<img src="styles/legend/CartaforestaleLR1996_23.png" /> Carta forestale LR 19/96'
            });
var format_vincoloidrogeologico_24 = new ol.format.GeoJSON();
var features_vincoloidrogeologico_24 = format_vincoloidrogeologico_24.readFeatures(json_vincoloidrogeologico_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vincoloidrogeologico_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vincoloidrogeologico_24.addFeatures(features_vincoloidrogeologico_24);
var lyr_vincoloidrogeologico_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vincoloidrogeologico_24, 
                style: style_vincoloidrogeologico_24,
                interactive: true,
                title: '<img src="styles/legend/vincoloidrogeologico_24.png" /> vincolo idrogeologico'
            });
var format_CartaHabitatsecondonatura2000HN2_25 = new ol.format.GeoJSON();
var features_CartaHabitatsecondonatura2000HN2_25 = format_CartaHabitatsecondonatura2000HN2_25.readFeatures(json_CartaHabitatsecondonatura2000HN2_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaHabitatsecondonatura2000HN2_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaHabitatsecondonatura2000HN2_25.addFeatures(features_CartaHabitatsecondonatura2000HN2_25);
var lyr_CartaHabitatsecondonatura2000HN2_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CartaHabitatsecondonatura2000HN2_25, 
                style: style_CartaHabitatsecondonatura2000HN2_25,
                interactive: true,
    title: 'Carta Habitat secondo natura 2000 HN2<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_0.png" /> 1130 - Estuari<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_1.png" /> 1150 - Lagune costiere<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_2.png" /> 1210 - Vegetazione annua delle linee di deposito marine<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_3.png" /> 1240 - Scogliere con vegetazione delle coste mediterranee con Limonium spp. endemici<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_4.png" /> 1310 - Vegetazione annua pioniera a Salicornia e altre specie delle zone fangose e sabbiose<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_5.png" /> 1410 - Pascoli inondati mediterranei (Juncetalia maritimi)<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_6.png" /> 1420 - Praterie e fruticeti mediterranee e termo-atlantici (Sarcocornetea fruticosi)<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_7.png" /> 1430 - Praterie e fruticeti alonitrofili (Pegano-Salsoletea) <br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_8.png" /> 1510* - Steppe salate mediterranee (Limonietalia) <br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_9.png" /> 2110 - Dune mobili embrionali<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_10.png" /> 2120 - Dune mobili del cordone litorale con presenza di Ammophila arenaria ("dune bianche")<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_11.png" /> 2210 - Dune fisse del litorale del Crucianellion maritimae<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_12.png" /> 2230 - Dune con prati dei Malcolmietalia<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_13.png" /> 2250* - Dune costiere con Juniperus spp.<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_14.png" /> 3150 - Laghi eutrofici naturali con vegetazione del Magnopotamion o Hydrocharition<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_15.png" /> 3170* - Stagni temporanei mediterranei<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_16.png" /> 3250 - Fiumi mediterranei a flusso permanente con Glaucium flavum<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_17.png" /> 3280 - Fiumi mediterranei a flusso permanente con il Paspalo-Agrostidion e con filari ripari di Salix e Populus alba<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_18.png" /> 3290 - Fiumi mediterranei a flusso intermittente con il Paspalo-Agrostidion<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_19.png" /> 4090 - Lande oro-mediterranee endemiche a ginestre spinose<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_20.png" /> 5210 - Matorral arborescenti a Juniperus spp.<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_21.png" /> 5220* - Matorral arborescenti di Zyziphus<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_22.png" /> 5230* - Matorral arborescenti di Laurus nobilis<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_23.png" /> 5320 - Formazioni basse di euforbie vicino alle scogliere<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_24.png" /> 5330 - Arbusteti termomediterranei e pre-desertici<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_25.png" /> 5420 - Frigane a Sarcopoterium spinosum<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_26.png" /> 6220* - Percorsi substeppici di graminacee e piante annue dei Thero-Brachypodietea<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_27.png" /> 6420 - Praterie umide mediterranee con piante erbacee alte del Molinio-Holoschoenion<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_28.png" /> 8130 - Ghiaioni del Mediterraneo occidentale e termofili<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_29.png" /> 8210 - Pareti rocciose calcaree con vegetazione casmofitica<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_30.png" /> 8220 - Pareti rocciose silicee con vegetazione casmofitica<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_31.png" /> 8220 - Pareti rocciose silicee con vegetazione casmofitica<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_32.png" /> 8320 - Campi di lava e cavità naturali<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_33.png" /> 9180* - Foreste di versanti, ghiaioni e valloni del Tilio-Acerion<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_34.png" /> 91AA* - Boschi orientali di Quercia bianca<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_35.png" /> 91E0* - Foreste alluvionali di Alnus glutinosa e Fraxinus excelsior (Alno-Padion, Alnion incanae, Salicion albae)<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_36.png" /> 91E0* - Foreste alluvionali di Alnus glutinosa e Fraxinus excelsior (Alno-Padion, Alnion incanae, Salicion albae)<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_37.png" /> 91M0 - Foreste Pannonico-Balcaniche di cerro e rovere<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_38.png" /> 9210* - Faggeti degli Appennini con Taxus e Ilex<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_39.png" /> 9220* - Faggeti degli Appennini con Abies alba e faggeti con Abies nebrodensis<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_40.png" /> 9260 - Foreste di Castanea sativa<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_41.png" /> 92A0 - Foreste a galleria di Salix alba e Populus alba<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_42.png" /> 92A0 - Foreste a galleria di Salix alba e Populus alba<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_43.png" /> 92C0  - Foreste di Platanus orientalis e Liquidambar orientalis (Platanion orientalis)<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_44.png" /> 92D0  - Gallerie e forteti ripari meridionali (Nerio-Tamaricetea e Securinegion tinctoriae)<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_45.png" /> 9320 - Foreste di Olea e Ceratonia<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_46.png" /> 9330 - Foreste di Quercus suber<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_47.png" /> 9340 - Foreste di Quercus ilex e Quercus rotundifolia<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_48.png" /> 9380 - Foreste di Ilex aquifolium<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_49.png" /> 9530* - Pinete (sub-)mediterranee di pini neri endemici<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_50.png" /> 9540 - Pinete mediterranee di pini mesogeni endemici<br />\
    <img src="styles/legend/CartaHabitatsecondonatura2000HN2_25_51.png" /> 9580* - Foreste mediterranee di Taxus baccata<br />'
        });
var format_benipaesaggisticiDLgs4204_26 = new ol.format.GeoJSON();
var features_benipaesaggisticiDLgs4204_26 = format_benipaesaggisticiDLgs4204_26.readFeatures(json_benipaesaggisticiDLgs4204_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_benipaesaggisticiDLgs4204_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_benipaesaggisticiDLgs4204_26.addFeatures(features_benipaesaggisticiDLgs4204_26);
var lyr_benipaesaggisticiDLgs4204_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_benipaesaggisticiDLgs4204_26, 
                style: style_benipaesaggisticiDLgs4204_26,
                interactive: true,
                title: '<img src="styles/legend/benipaesaggisticiDLgs4204_26.png" /> beni paesaggistici D.Lgs. 42/04'
            });
var format_CTR_2012_2013_27 = new ol.format.GeoJSON();
var features_CTR_2012_2013_27 = format_CTR_2012_2013_27.readFeatures(json_CTR_2012_2013_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CTR_2012_2013_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CTR_2012_2013_27.addFeatures(features_CTR_2012_2013_27);
var lyr_CTR_2012_2013_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CTR_2012_2013_27, 
                style: style_CTR_2012_2013_27,
                interactive: true,
                title: '<img src="styles/legend/CTR_2012_2013_27.png" /> CTR_2012_2013'
            });
var format_LOTTODIPROGETTO_28 = new ol.format.GeoJSON();
var features_LOTTODIPROGETTO_28 = format_LOTTODIPROGETTO_28.readFeatures(json_LOTTODIPROGETTO_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTTODIPROGETTO_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTTODIPROGETTO_28.addFeatures(features_LOTTODIPROGETTO_28);
var lyr_LOTTODIPROGETTO_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTTODIPROGETTO_28, 
                style: style_LOTTODIPROGETTO_28,
                interactive: true,
                title: '<img src="styles/legend/LOTTODIPROGETTO_28.png" /> LOTTO DI PROGETTO'
            });
var format_AREEINTERESSATEDATECNOLOGIAFV_29 = new ol.format.GeoJSON();
var features_AREEINTERESSATEDATECNOLOGIAFV_29 = format_AREEINTERESSATEDATECNOLOGIAFV_29.readFeatures(json_AREEINTERESSATEDATECNOLOGIAFV_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREEINTERESSATEDATECNOLOGIAFV_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREEINTERESSATEDATECNOLOGIAFV_29.addFeatures(features_AREEINTERESSATEDATECNOLOGIAFV_29);
var lyr_AREEINTERESSATEDATECNOLOGIAFV_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREEINTERESSATEDATECNOLOGIAFV_29, 
                style: style_AREEINTERESSATEDATECNOLOGIAFV_29,
                interactive: true,
                title: '<img src="styles/legend/AREEINTERESSATEDATECNOLOGIAFV_29.png" /> AREE INTERESSATE DA TECNOLOGIA FV'
            });
var group_CTR = new ol.layer.Group({
                                layers: [lyr_CTR_2012_2013_27,],
                                title: "CTR"});
var group_BENIPAESAGGISTICI = new ol.layer.Group({
                                layers: [lyr_benipaesaggisticiDLgs4204_26,],
                                title: "BENI PAESAGGISTICI"});
var group_HABITATNATURA2000 = new ol.layer.Group({
                                layers: [lyr_CartaHabitatsecondonatura2000HN2_25,],
                                title: "HABITAT NATURA 2000"});
var group_SIF = new ol.layer.Group({
                                layers: [lyr_CartaforestaleLR1996_23,lyr_vincoloidrogeologico_24,],
                                title: "SIF"});
var group_INCENDI = new ol.layer.Group({
                                layers: [lyr_Incendi2014_8,lyr_Incendi2015_9,lyr_Incendi2016_10,lyr_Incendi2017_11,lyr_Incendi2018_12,lyr_Incendi2019_13,lyr_Incendi2020_14,lyr_Incendi2021_15,lyr_Incendi2013_16,lyr_Incendi2012_17,lyr_Incendi2011_18,lyr_Incendi2010_19,lyr_Incendi2009_20,lyr_Incendi2008_21,lyr_Incendi2007_22,],
                                title: "INCENDI"});
var group_PAIDISSESTI = new ol.layer.Group({
                                layers: [lyr_DissestiperAttivit_7,],
                                title: "PAI DISSESTI"});
var group_PAIGEOMORFOLOGIA = new ol.layer.Group({
                                layers: [lyr_Pericolositgeomorfologica_5,lyr_Rischiogeomorfologico_6,],
                                title: "PAI GEOMORFOLOGIA"});
var group_RETENATURA2000 = new ol.layer.Group({
                                layers: [lyr_ZPS_1,lyr_ZSC_2,lyr_ZSCZPS_3,lyr_IBAAreeimportantiperavifauna_4,],
                                title: "RETE NATURA 2000"});
var group_ORTOFOTO = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,],
                                title: "ORTOFOTO"});

lyr_GoogleHybrid_0.setVisible(true);lyr_ZPS_1.setVisible(true);lyr_ZSC_2.setVisible(true);lyr_ZSCZPS_3.setVisible(true);lyr_IBAAreeimportantiperavifauna_4.setVisible(true);lyr_Pericolositgeomorfologica_5.setVisible(true);lyr_Rischiogeomorfologico_6.setVisible(true);lyr_DissestiperAttivit_7.setVisible(true);lyr_Incendi2014_8.setVisible(true);lyr_Incendi2015_9.setVisible(true);lyr_Incendi2016_10.setVisible(true);lyr_Incendi2017_11.setVisible(true);lyr_Incendi2018_12.setVisible(true);lyr_Incendi2019_13.setVisible(true);lyr_Incendi2020_14.setVisible(true);lyr_Incendi2021_15.setVisible(true);lyr_Incendi2013_16.setVisible(true);lyr_Incendi2012_17.setVisible(true);lyr_Incendi2011_18.setVisible(true);lyr_Incendi2010_19.setVisible(true);lyr_Incendi2009_20.setVisible(true);lyr_Incendi2008_21.setVisible(true);lyr_Incendi2007_22.setVisible(true);lyr_CartaforestaleLR1996_23.setVisible(true);lyr_vincoloidrogeologico_24.setVisible(true);lyr_CartaHabitatsecondonatura2000HN2_25.setVisible(true);lyr_benipaesaggisticiDLgs4204_26.setVisible(true);lyr_CTR_2012_2013_27.setVisible(true);lyr_LOTTODIPROGETTO_28.setVisible(true);lyr_AREEINTERESSATEDATECNOLOGIAFV_29.setVisible(true);
var layersList = [group_ORTOFOTO,group_RETENATURA2000,group_PAIGEOMORFOLOGIA,group_PAIDISSESTI,group_INCENDI,group_SIF,group_HABITATNATURA2000,group_BENIPAESAGGISTICI,group_CTR,lyr_LOTTODIPROGETTO_28,lyr_AREEINTERESSATEDATECNOLOGIAFV_29];
lyr_ZPS_1.set('fieldAliases', {'objectid': 'objectid', 'codice': 'codice', 'tipo_sito': 'tipo_sito', 'denominazi': 'denominazi', 'reg_biog': 'reg_biog', 'regione': 'regione', 'aggiorn': 'aggiorn', 'fuso': 'fuso', 'perimeter': 'perimeter', 'hectares': 'hectares', 'nowprint': 'nowprint', 'sic_zsc': 'sic_zsc', 'zps': 'zps', 'st_area(shape)': 'st_area(shape)', 'st_length(shape)': 'st_length(shape)', 'dati.sde.sic_zps_sicilia_202012.area': 'dati.sde.sic_zps_sicilia_202012.area', });
lyr_ZSC_2.set('fieldAliases', {'objectid': 'objectid', 'codice': 'codice', 'tipo_sito': 'tipo_sito', 'denominazi': 'denominazi', 'reg_biog': 'reg_biog', 'regione': 'regione', 'aggiorn': 'aggiorn', 'fuso': 'fuso', 'perimeter': 'perimeter', 'hectares': 'hectares', 'nowprint': 'nowprint', 'sic_zsc': 'sic_zsc', 'zps': 'zps', 'st_area(shape)': 'st_area(shape)', 'st_length(shape)': 'st_length(shape)', 'dati.sde.sic_zps_sicilia_202012.area': 'dati.sde.sic_zps_sicilia_202012.area', });
lyr_ZSCZPS_3.set('fieldAliases', {'objectid': 'objectid', 'codice': 'codice', 'tipo_sito': 'tipo_sito', 'denominazi': 'denominazione', 'reg_biog': 'reg_biog', 'regione': 'regione', 'aggiorn': 'aggiorn', 'fuso': 'fuso', 'perimeter': 'perimeter', 'hectares': 'hectares', 'nowprint': 'nowprint', 'sic_zsc': 'sic_zsc', 'zps': 'zps', 'st_area(shape)': 'st_area(shape)', 'st_length(shape)': 'st_length(shape)', 'dati.sde.sic_zps_sicilia_202012.area': 'dati.sde.sic_zps_sicilia_202012.area', });
lyr_IBAAreeimportantiperavifauna_4.set('fieldAliases', {'OBJECTID': 'FID', 'codice_iba': 'codice_iba', 'nome_iba': 'nome_iba', 'regioni': 'regioni', 'areamq': 'areamq', 'areaha': 'areaha', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Pericolositgeomorfologica_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PAI_NMR': 'PAI_NMR', 'BACINO': 'BACINO', 'PROVINCIA': 'PROVINCIA', 'COMUNE': 'COMUNE', 'Altri_comu': 'Altri_comu', 'LOCALITA': 'LOCALITA', 'COLL_DISS': 'DISS', 'SIGLA_P': 'SIGLA_P', 'PERICOLO': 'PERICOLO', 'N_DPR': 'N_DPR', 'DATA_DPR': 'DATA_DPR', 'NGURS': 'NGURS', 'DGURS': 'DGURS', 'Altri_com2': 'Altro comune 2', 'CTR': 'Numero/i CTR', 'N_AdSG': 'Numero decreto di adozione del segretario AdB', 'DATA_AdSG': 'Data decreto di adozione del segretario AdB', 'NGURS_AdSG': 'Numero GURS del decreto di adozione del segretario AdB', 'DGURS_AdSG': 'Data GURS del decreto di adozione del segretario AdB', 'N_DSG': 'Numero decreto segretario AdB', 'DATA_DSG': 'Data decreto segretario AdB', 'NGURS_DSG': 'Numero GURS decreto segretario AdB', 'DGURS_DSG': 'Data GURS decreto segretario AdB', 'SHAPE_Length': 'Shape_Length', 'SHAPE_Area': 'Shape_Area', });
lyr_Rischiogeomorfologico_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'N_BAC': 'N_BAC', 'BACINO': 'BACINO', 'Provincia': 'Provincia', 'COMUNE': 'COMUNE', 'Altri_comu': 'Altri_comu', 'COLL_DISS': 'DISS', 'SIGLA_P': 'SIGLA_P', 'ELEMENTO_R': 'ELEMENTO', 'ELEMENTO_1': 'ELEMENTO_1', 'E': 'E', 'RISCHIO': 'RISCHIO', 'N_DPR': 'N_DPR', 'DATA_DPR': 'DATA_DPR', 'NGURS': 'NGURS', 'DGURS': 'DGURS', 'Altri_com2': 'Altro comune 2', 'CTR': 'Numero/i CTR', 'N_AdSG': 'Numero decreto di adozione del segretario AdB', 'DATA_AdSG': 'Data decreto di adozione del segretario AdB', 'NGURS_AdSG': 'Numero GURS del decreto di adozione del segretario AdB', 'DGURS_AdSG': 'Data GURS del decreto di adozione del segretario AdB', 'N_DSG': 'Numero decreto segretario AdB', 'DATA_DSG': 'Data decreto segretario AdB', 'NGURS_DSG': 'Numero GURS decreto segretario AdB', 'DGURS_DSG': 'Data GURS decreto segretario AdB', 'SHAPE_Length': 'Shape_Length', 'SHAPE_Area': 'Shape_Area', });
lyr_DissestiperAttivit_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PAI_NMR': 'PAI_NMR', 'BACINO': 'BACINO', 'PROVINCIA': 'PROVINCIA', 'COMUNE': 'COMUNE', 'Altri_comu': 'Altri_comu', 'LOCALITA': 'LOCALITA', 'SIGLA': 'SIGLA', 'COD_TIP': 'COD_TIP', 'COD_ATT': 'COD_ATT', 'PERICOLO': 'PERICOLO', 'DATA_EVENT': 'DATA_EVENT', 'N_DPR': 'N_DPR', 'DATA_DPR': 'DATA_DPR', 'NGURS': 'NGURS', 'DGURS': 'DGURS', 'Altri_com2': 'Altro comune 2', 'CTR': 'Numero/i CTR', 'N_AdSG': 'Numero decreto di adozione del segretario AdB', 'DATA_AdSG': 'Data decreto di adozione del segretario AdB', 'NGURS_AdSG': 'Numero GURS del decreto di adozione del segretario AdB', 'DGURS_AdSG': 'Data GURS del decreto di adozione del segretario AdB', 'N_DSG': 'Numero decreto segretario AdB', 'DATA_DSG': 'Data decreto segretario AdB', 'NGURS_DSG': 'Numero GURS decreto segretario AdB', 'DGURS_DSG': 'Data GURS decreto segretario AdB', 'SHAPE_Length': 'Shape_Length', 'SHAPE_Area': 'Shape_Area', });
lyr_Incendi2014_8.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2015_9.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2016_10.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2017_11.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2018_12.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2019_13.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2020_14.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2021_15.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2013_16.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2012_17.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2011_18.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2010_19.set('fieldAliases', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': 'OBJECTID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': 'ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': 'COSTOSPEGN', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': 'DANNOBENI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': 'DANNOSPSRIPR', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': 'DANNOVALMACCH', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': 'DTAFINEINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': 'DTAINIZIOFUOCO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': 'DTAINIZIOINTERV', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': 'DTASEGNALAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': 'FK_AAAMAMCOMU_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': 'LOCALITA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': 'TEMPMEDINTAERO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': 'TEMPMEDINTATMZ', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': 'TEMPMEDLAVPERS', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': 'TOTSQAIB', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': 'TOTSUP', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': 'TOTSUPBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': 'TOTSUPNNBOSCATA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': 'ALTRESUPFORESTALI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': 'ALTEZZASCOTT', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': 'AREABRUCULTANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': 'AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': 'CAUSEPRESUNTE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': 'DIRVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': 'INTENSVENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': 'INTFRONFIAM', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': 'ISPDIST', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': 'LUOGOINIZIOINC', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': 'STVIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': 'VIABACCESSO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': 'ANNO', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': 'COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI', });
lyr_Incendi2009_20.set('fieldAliases', {'OBJECTID': 'FID', 'Comune': 'Comune', 'Provincia': 'Provincia', 'D_Incendio': 'D_Incendio', 'DATI_WEB.DBO.Incendi_2009.Area': 'Area', 'Localita': 'Localita', 'Shape.STArea()': 'Shape.STArea()', 'Shape.STLength()': 'Shape.STLength()', });
lyr_Incendi2008_21.set('fieldAliases', {'OBJECTID': 'FID', 'PROV': 'PROV', 'COM': 'COM', 'LOC': 'LOC', 'DATA_INC': 'DATA_INC', 'SUP_CALC': 'SUP_CALC', 'USO': 'USO', 'AREA_TOT': 'AREA_TOT', 'Shape.STArea()': 'Shape.STArea()', 'Shape.STLength()': 'Shape.STLength()', });
lyr_Incendi2007_22.set('fieldAliases', {'OBJECTID': 'FID', 'PROV': 'PROV', 'COM': 'COM', 'LOC': 'LOC', 'DATA_INC': 'DATA_INC', 'AREA_TOT': 'AREA_TOT', 'SUP_CALC': 'SUP_CALC', 'Shape.STArea()': 'Shape.STArea()', 'Shape.STLength()': 'Shape.STLength()', });
lyr_CartaforestaleLR1996_23.set('fieldAliases', {'OBJECTID': 'FID', 'ID': 'ID', 'SUP_HA': 'SUP_HA', 'L16': 'L16', 'Shape.STArea()': 'Shape.STArea()', 'Shape.STLength()': 'Shape.STLength()', });
lyr_vincoloidrogeologico_24.set('fieldAliases', {'OBJECTID': 'FID', 'ISTAT': 'ISTAT', 'TOPONIMO': 'TOPONIMO', 'ISTAT_PROV': 'ISTAT_PROV', 'PROVINCIA': 'PROVINCIA', 'ZONA': 'ZONA', 'SUPERFICIE': 'SUPERFICIE', 'Shape.STArea()': 'Shape.STArea()', 'Shape.STLength()': 'Shape.STLength()', });
lyr_CartaHabitatsecondonatura2000HN2_25.set('fieldAliases', {'dati.sde.carta_habitat_HCB_HN2_CLC.objectid': 'objectid', 'dati.sde.carta_habitat_HCB_HN2_CLC.cb_codice': 'cb_codice', 'dati.sde.carta_habitat_HCB_HN2_CLC.habitat': 'HABITAT', 'dati.sde.carta_habitat_HCB_HN2_CLC.clc': 'clc', 'dati.sde.Legenda_HabitatNatura2000_HN2_20200916.objectid': 'objectid', 'dati.sde.Legenda_HabitatNatura2000_HN2_20200916.habitat': 'habitat', 'dati.sde.Legenda_HabitatNatura2000_HN2_20200916.legenda_habitat': 'legenda_habitat', });
lyr_benipaesaggisticiDLgs4204_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'provincia': 'provincia', 'categoria': 'categoria', 'ORIG_FID': 'ORIG_FID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CTR_2012_2013_27.set('fieldAliases', {'OBJECTID': 'objectid', 'Layer': 'Layer', 'DocName': 'DocName', 'Shape_Length': 'Shape_Length', 'CODE': 'code', });
lyr_LOTTODIPROGETTO_28.set('fieldAliases', {'Area (Ha)': 'Area (Ha)', 'N. PROGR': 'N. PROGR', 'Power (MW)': 'Power (MW)', 'Nome Prog': 'Nome Prog', 'Localita\'': 'Localita\'', });
lyr_AREEINTERESSATEDATECNOLOGIAFV_29.set('fieldAliases', {'Area (Ha)': 'Area (Ha)', 'somma_area': 'somma_area', 'N. PROGR': 'N. PROGR', 'Nome Prog': 'Nome Prog', 'Localita\'': 'Localita\'', 'Power (MW)': 'Power (MW)', });
lyr_ZPS_1.set('fieldImages', {'objectid': '', 'codice': '', 'tipo_sito': '', 'denominazi': '', 'reg_biog': '', 'regione': '', 'aggiorn': '', 'fuso': '', 'perimeter': '', 'hectares': '', 'nowprint': '', 'sic_zsc': '', 'zps': '', 'st_area(shape)': '', 'st_length(shape)': '', 'dati.sde.sic_zps_sicilia_202012.area': '', });
lyr_ZSC_2.set('fieldImages', {'objectid': '', 'codice': '', 'tipo_sito': '', 'denominazi': '', 'reg_biog': '', 'regione': '', 'aggiorn': '', 'fuso': '', 'perimeter': '', 'hectares': '', 'nowprint': '', 'sic_zsc': '', 'zps': '', 'st_area(shape)': '', 'st_length(shape)': '', 'dati.sde.sic_zps_sicilia_202012.area': '', });
lyr_ZSCZPS_3.set('fieldImages', {'objectid': '', 'codice': '', 'tipo_sito': '', 'denominazi': '', 'reg_biog': '', 'regione': '', 'aggiorn': '', 'fuso': '', 'perimeter': '', 'hectares': '', 'nowprint': '', 'sic_zsc': '', 'zps': '', 'st_area(shape)': '', 'st_length(shape)': '', 'dati.sde.sic_zps_sicilia_202012.area': '', });
lyr_IBAAreeimportantiperavifauna_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'codice_iba': 'TextEdit', 'nome_iba': 'TextEdit', 'regioni': 'TextEdit', 'areamq': 'TextEdit', 'areaha': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pericolositgeomorfologica_5.set('fieldImages', {'OBJECTID': '', 'PAI_NMR': '', 'BACINO': '', 'PROVINCIA': '', 'COMUNE': '', 'Altri_comu': '', 'LOCALITA': '', 'COLL_DISS': '', 'SIGLA_P': '', 'PERICOLO': '', 'N_DPR': '', 'DATA_DPR': '', 'NGURS': '', 'DGURS': '', 'Altri_com2': '', 'CTR': '', 'N_AdSG': '', 'DATA_AdSG': '', 'NGURS_AdSG': '', 'DGURS_AdSG': '', 'N_DSG': '', 'DATA_DSG': '', 'NGURS_DSG': '', 'DGURS_DSG': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Rischiogeomorfologico_6.set('fieldImages', {'OBJECTID': '', 'N_BAC': '', 'BACINO': '', 'Provincia': '', 'COMUNE': '', 'Altri_comu': '', 'COLL_DISS': '', 'SIGLA_P': '', 'ELEMENTO_R': '', 'ELEMENTO_1': '', 'E': '', 'RISCHIO': '', 'N_DPR': '', 'DATA_DPR': '', 'NGURS': '', 'DGURS': '', 'Altri_com2': '', 'CTR': '', 'N_AdSG': '', 'DATA_AdSG': '', 'NGURS_AdSG': '', 'DGURS_AdSG': '', 'N_DSG': '', 'DATA_DSG': '', 'NGURS_DSG': '', 'DGURS_DSG': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_DissestiperAttivit_7.set('fieldImages', {'OBJECTID': '', 'PAI_NMR': '', 'BACINO': '', 'PROVINCIA': '', 'COMUNE': '', 'Altri_comu': '', 'LOCALITA': '', 'SIGLA': '', 'COD_TIP': '', 'COD_ATT': '', 'PERICOLO': '', 'DATA_EVENT': '', 'N_DPR': '', 'DATA_DPR': '', 'NGURS': '', 'DGURS': '', 'Altri_com2': '', 'CTR': '', 'N_AdSG': '', 'DATA_AdSG': '', 'NGURS_AdSG': '', 'DGURS_AdSG': '', 'N_DSG': '', 'DATA_DSG': '', 'NGURS_DSG': '', 'DGURS_DSG': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Incendi2014_8.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2015_9.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2016_10.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2017_11.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2018_12.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2019_13.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2020_14.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2021_15.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2013_16.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2012_17.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2011_18.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2010_19.set('fieldImages', {'DATI_WEB.DBO.DFCNSIINCD_DENORM.OBJECTID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.COSTOSPEGN': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOBENI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOSPSRIPR': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DANNOVALMACCH': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAFINEINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOFUOCO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTAINIZIOINTERV': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DTASEGNALAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMCOMU_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LOCALITA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTAERO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDINTATMZ': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TEMPMEDLAVPERS': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSQAIB': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUP': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPNNBOSCATA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTRESUPFORESTALI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZASCOTT': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AREABRUCULTANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.CAUSEPRESUNTE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DIRVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSVENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTFRONFIAM': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ISPDIST': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.LUOGOINIZIOINC': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.STVIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.VIABACCESSO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ANNO': '', 'DATI_WEB.DBO.AAAMAMCOMU.DESCRIPTION': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_E': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.PUNTOINN_N': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_UFFICIO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_CAUSE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AREABRUCIATA_ANNI': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_AVVISTAMENTO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_COMUNE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FK_AAAMAMPROV_ID': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DESC_PROVINCIA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.ALTEZZA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.INTENSITA_FIAMMA': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.DATA_VALIDAZIONE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.TOTSUPFORESTALE': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.SUPARBLEGNO': '', 'DATI_WEB.DBO.DFCNSIINCD_DENORM.FLAG_GEDI': '', });
lyr_Incendi2009_20.set('fieldImages', {'OBJECTID': '', 'Comune': '', 'Provincia': '', 'D_Incendio': '', 'DATI_WEB.DBO.Incendi_2009.Area': '', 'Localita': '', 'Shape.STArea()': '', 'Shape.STLength()': '', });
lyr_Incendi2008_21.set('fieldImages', {'OBJECTID': '', 'PROV': '', 'COM': '', 'LOC': '', 'DATA_INC': '', 'SUP_CALC': '', 'USO': '', 'AREA_TOT': '', 'Shape.STArea()': '', 'Shape.STLength()': '', });
lyr_Incendi2007_22.set('fieldImages', {'OBJECTID': '', 'PROV': '', 'COM': '', 'LOC': '', 'DATA_INC': '', 'AREA_TOT': '', 'SUP_CALC': '', 'Shape.STArea()': '', 'Shape.STLength()': '', });
lyr_CartaforestaleLR1996_23.set('fieldImages', {'OBJECTID': '', 'ID': '', 'SUP_HA': '', 'L16': '', 'Shape.STArea()': '', 'Shape.STLength()': '', });
lyr_vincoloidrogeologico_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'TOPONIMO': 'TextEdit', 'ISTAT_PROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'ZONA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Shape.STArea()': 'TextEdit', 'Shape.STLength()': 'TextEdit', });
lyr_CartaHabitatsecondonatura2000HN2_25.set('fieldImages', {'dati.sde.carta_habitat_HCB_HN2_CLC.objectid': '', 'dati.sde.carta_habitat_HCB_HN2_CLC.cb_codice': '', 'dati.sde.carta_habitat_HCB_HN2_CLC.habitat': '', 'dati.sde.carta_habitat_HCB_HN2_CLC.clc': '', 'dati.sde.Legenda_HabitatNatura2000_HN2_20200916.objectid': '', 'dati.sde.Legenda_HabitatNatura2000_HN2_20200916.habitat': '', 'dati.sde.Legenda_HabitatNatura2000_HN2_20200916.legenda_habitat': '', });
lyr_benipaesaggisticiDLgs4204_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'provincia': 'TextEdit', 'categoria': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CTR_2012_2013_27.set('fieldImages', {'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'DocName': 'TextEdit', 'Shape_Length': 'TextEdit', 'CODE': 'TextEdit', });
lyr_LOTTODIPROGETTO_28.set('fieldImages', {'Area (Ha)': '', 'N. PROGR': '', 'Power (MW)': '', 'Nome Prog': '', 'Localita\'': '', });
lyr_AREEINTERESSATEDATECNOLOGIAFV_29.set('fieldImages', {'Area (Ha)': '', 'somma_area': '', 'N. PROGR': '', 'Nome Prog': '', 'Localita\'': '', 'Power (MW)': '', });
lyr_ZPS_1.set('fieldLabels', {});
lyr_ZSC_2.set('fieldLabels', {});
lyr_ZSCZPS_3.set('fieldLabels', {});
lyr_IBAAreeimportantiperavifauna_4.set('fieldLabels', {});
lyr_Pericolositgeomorfologica_5.set('fieldLabels', {});
lyr_Rischiogeomorfologico_6.set('fieldLabels', {});
lyr_DissestiperAttivit_7.set('fieldLabels', {});
lyr_Incendi2014_8.set('fieldLabels', {});
lyr_Incendi2015_9.set('fieldLabels', {});
lyr_Incendi2016_10.set('fieldLabels', {});
lyr_Incendi2017_11.set('fieldLabels', {});
lyr_Incendi2018_12.set('fieldLabels', {});
lyr_Incendi2019_13.set('fieldLabels', {});
lyr_Incendi2020_14.set('fieldLabels', {});
lyr_Incendi2021_15.set('fieldLabels', {});
lyr_Incendi2013_16.set('fieldLabels', {});
lyr_Incendi2012_17.set('fieldLabels', {});
lyr_Incendi2011_18.set('fieldLabels', {});
lyr_Incendi2010_19.set('fieldLabels', {});
lyr_Incendi2009_20.set('fieldLabels', {});
lyr_Incendi2008_21.set('fieldLabels', {});
lyr_Incendi2007_22.set('fieldLabels', {});
lyr_CartaforestaleLR1996_23.set('fieldLabels', {});
lyr_vincoloidrogeologico_24.set('fieldLabels', {});
lyr_CartaHabitatsecondonatura2000HN2_25.set('fieldLabels', {});
lyr_benipaesaggisticiDLgs4204_26.set('fieldLabels', {});
lyr_CTR_2012_2013_27.set('fieldLabels', {});
lyr_LOTTODIPROGETTO_28.set('fieldLabels', {'Area (Ha)': 'inline label', 'N. PROGR': 'inline label', 'Power (MW)': 'inline label', 'Nome Prog': 'inline label', 'Localita\'': 'inline label', });
lyr_AREEINTERESSATEDATECNOLOGIAFV_29.set('fieldLabels', {'Area (Ha)': 'header label', 'somma_area': 'header label', 'N. PROGR': 'header label', 'Nome Prog': 'header label', 'Localita\'': 'header label', 'Power (MW)': 'header label', });
lyr_AREEINTERESSATEDATECNOLOGIAFV_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});