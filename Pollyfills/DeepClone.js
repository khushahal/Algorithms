

Object.prototype.deepClone = function _deepClone() {
    var _op = {};
    this.constructor
    Object.defineProperty(Object.prototype, "deepClone", { enumerable: false });

    if (typeof this !== "object") throw new Error("required an object");
  
    var _isPrimitive = function (type) {
      var _primitives = [
        "string",
        "number",
        "boolean",
        "null",
        "undefined",
        "bigint",
        "symbol",
        "function",
      ];
  
      for (var i = 0; i < _primitives.length; ++i) {
        if (_primitives[i] === typeof type) return true;
      }
  
      return false;
    };
  
    var _recursiveMethod = function (currObj, destObj) {
      for (let key in currObj) {
        if (_isPrimitive(currObj[key])) {
          destObj[key] = currObj[key];
        }
  
        if (!_isPrimitive(currObj[key])) {
          destObj[key] = {};
          _recursiveMethod(currObj[key], destObj[key]);
        }
      }
    };
  
    _recursiveMethod(this, _op);
    return _op;
};




let ob = {
  name: "Suraj",
  class: "Children",
  marks: 42,
  address: {
    city: "Lucknow",
    country: "India",
    contact: 9415917,
    subAddress: {
      city: "Bareilly",
      country: "India",
      contact: 9415916,
      x: {
          x1: {
              x2: {
                  x3: 1234,
                  class: 'Cool',
                  marksData: 'Superman'
              }
          }
      }
    },
  },
  likedBy: 'Shiva'
};

const _deepCloned = ob.deepClone();
_deepCloned.name =  'Shivam';
console.log(_deepCloned);
console.log(ob);

let c = 2;
const x = c.deepClone();