const request = require('request-promise-native');

class Products {
  constructor() {}

  async get({accessToken}) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };
    const result = await request.get('https://api.hubapi.com/crm/v3/objects/products?limit=10&archived=false&properties=name&properties=description&properties=price&properties=amount&properties=hs_images', {
      headers: headers
    });
    return JSON.parse(result)
  }
}

module.exports = new Products();