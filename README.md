# Geovisto Bubblelayer Tool

Tool which provides the map layer functionality for [Geovisto core library](https://github.com/geovisto/geovisto).

This repository is a snapshot of Geoviosto `tools/layers/bubble` derived from the development repository: [geovisto/geovisto-map](https://github.com/geovisto/geovisto-map).

## Usage

![image](https://user-images.githubusercontent.com/44326793/231517793-49dfea9d-b7bb-407f-841f-1c87c0665633.png)

```js
import { GeovistoBubbleLayerTool } from 'geovisto-layer-bubble';
import 'geovisto-layer-bubble/dist/index.css';


// create instance of map with given props
const map = Geovisto.createMap({
  // ...
  tools?: Geovisto.createMapToolsManager([
    // instances of Geovisto tools (extensions) which will be directly used in the map
    // ...
    GeovistoBubbleLayerTool.createTool({
      id: "geovisto-tool-layer-bubble"
    }),
  ])
});

// rendering of the map
map.draw(Geovisto.getMapConfigManagerFactory().default({
  // initial settings of the map can be overriden by the map config - JSON structure providing user settings
  // ...
  tools?: [
    // config of Geovisto tools (extensions) used in the map
    // ...
    {
      "type": "geovisto-tool-layer-bubble",
      "id": "geovisto-tool-layer-bubble",
      "enabled": true,
      "layerName": "Bubble layer",
      // mapping of data domains to data dimensions
      "data": {
        "latitude": "-37.8210922667", // latitude in degrees
        "longitude": "175.2209316333", // longitude in degrees
        "category": "data.category", // category dimension
        "value": "data.value", // value dimension
        "aggregation": "sum", // [sum, count]
        "color": "#e32400" // color of bubbles
        "bubbleSize": 2 // size of bubbles
      }
    },
    // ...
  ]
}));
```

## Instalation

`npm install --save geovisto-layer-bubble`

Peer dependencies:

`npm install --save geovisto leaflet`

## Authors and Contributors

Author: [Petr Kašpar](https://github.com/xkaspa40), [Vladimír Korenčik](https://github.com/froztt)

Contributors: [Jiři Hynek](https://github.com/jirka)

## License

[MIT](https://github.com/geovisto/geovisto-layer-bubble/blob/master/LICENSE)

### Keywords

[gis](https://www.npmjs.com/search?q=keywords:gis) [map](https://www.npmjs.com/search?q=keywords:map) [geovisto](https://www.npmjs.com/search?q=keywords:geovisto) [leaflet](https://www.npmjs.com/search?q=keywords:leaflet) [spatial-data](https://www.npmjs.com/search?q=keywords:spatial-data) [visualization](https://www.npmjs.com/search?q=keywords:visualization) [bubble](https://www.npmjs.com/search?q=keywords:bubble)
