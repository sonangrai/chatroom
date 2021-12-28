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

export default responseObj;
