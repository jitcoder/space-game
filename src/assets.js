import axios from 'axios';

class AssetFactory {
  constructor() {
    this.assetList = ['shuttle'];
    this.promises = [];
    this.loadedCount = 0;
    this.assets = {};

    for (const asset of this.assetList) {
      this.promises.push(axios
        .get(`assets/${asset}.json`)
        .then(({ data }) => {
          return new Promise((resolve) => {
            const sheet = new Image();
            sheet.onload = (e) => {
              console.info(`${data.id} loaded`);
              this.loadedCount++;
  
              resolve({ ...data, sheet });
            }
  
            sheet.src = `assets/${asset}.png`;
          })

        }));
    }

    this._loaded = Promise
      .all(this.promises)
      .then((assets) => {
        for (const asset of assets) {
          this.assets[asset.id] = asset;
        }
      });
  }

  new(id) {
    const C = require(`./objects/${id}`);

    return new C.default;
  }
}

export const factory = new AssetFactory();
