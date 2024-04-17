const fs = require('fs');
const path = require('path');

const getBannerController = (req, res) => {
  const dataPath = path.join(__dirname, '../data/data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al leer los datos');
      }
      const bannerData = JSON.parse(data);
      res.status(200).json(bannerData.banners);
  });
}

module.exports = getBannerController