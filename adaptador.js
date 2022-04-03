class API1 {
  constructor() {
    this.operations = function (url, opts, verb) {
      switch (verb) {
        case "get":
          break;

        case "post":
          break;

        default:
          break;
      }
    };
  }
}

class API2 {
  constructor() {
    this.get = function (url, opts) {};

    this.post = function (url, opts) {};
  }
}

class APIAdapter {
  constructor() {
    const api2 = new API2();

    this.operations = function (url, opts, verb) {
      switch (verb) {
        case "get":
            return api2.get(url, opts)
          break;
        case "post":
            return api2.post(url, opts)
          break;

        default:
          break;
      }
    };
  }
}


const api = new API1()
api.operations('', {q: 1}, 'get');

const api2 = new API2()
api2.get('', {q: 1});

const adapter = new APIAdapter();
adapter.operations('', {q: 1}, 'get')