let xhrRequest = require('xhr-request');

const baseUrl = 'http://api.sollinda.com/v1';

function request(url) {
  return new Promise((resolve, reject) => {
    xhrRequest(url, {json: true}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  }).catch(e => {
    throw Error('Not found');
  });
}

class CountryProfiles {
  get(id, type = 'iso-alpha-2') {
    return request(`${baseUrl}/country-profiles/${type}/${id}`);
  }
  list() {
    return request(`${baseUrl}/country-profiles/list`);
  }
}

class SollindaSDK {
  constructor(opts) {
    this.countryProfiles = new CountryProfiles(opts);
  }
}

module.exports = SollindaSDK;