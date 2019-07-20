Kinvey.init({
  instanceId: 'undefined',
  appKey: 'kid_r1U8HJTWS',
  appSecret: '140772b4c914475d85c0989e247b25de'
});

const httpRequester = {
  url: 'https://baas.kinvey.com/appdata/kid_r1U8HJTWS/students',
  userAndPasword: 'aGlwbzoxMjM0',
  get: function () {
    return fetch(this.url, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${this.userAndPasword}`,
      }
    });
  },
  delete: function (elementId) {
    return fetch(this.url + `/${elementId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Basic ${this.userAndPasword}`,
        "Content-type": "application/json",
      },
    })
  },
  put: function (elementId, object) {
    return fetch(this.url + `/${elementId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Basic ${this.userAndPasword}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    })
  },
  post: function (object) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${this.userAndPasword}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    });
  },

}

const checkServerResponse = (serverResponse) => {
  if (serverResponse.status > 300) {
    window.alert(`Server Error: ${serverResponse.status}`)
    throw new Error(`Server Error: ${serverResponse.status}`)
  }
  return serverResponse.json();
}
.catch (error => console.log(`Error Detected: ${error}`));

const clearContent = (elementToClear) => elementToClear.innerHTML = '';
const clearValue = (elementToClear) => elementToClear.value = '';

const createDiv = () => document.createElement('div');
const createSpan = () => document.createElement('span');
const createP = () => document.createElement('p');
const createInput = () => document.createElement('input');
const createBtn = () => document.createElement('button');

const createTable = () => document.createElement('table');
const createTr = () => document.createElement('tr');
const createTh = () => document.createElement('th');
const createTd = () => document.createElement('td');

const createIdAttribute = (atribute, setValue) => {
  const attribute = document.createAttribute(atribute);
  attribute.value = setValue;
  return attribute;
};
