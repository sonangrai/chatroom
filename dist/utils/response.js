"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * A response class
 *  msg = the message of the response
 *  data = data object
 *  status = the response status
 */
class responseObj {
  constructor(msg, data, status) {
    this.msg = msg;
    this.data = data;
    this.status = status;
  }

}

var _default = responseObj;
exports.default = _default;
//# sourceMappingURL=response.js.map