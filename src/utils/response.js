//A response class
class responseObj {
  constructor(msg, data, status) {
    this.msg = msg;
    this.data = data;
    this.status = status;
  }
}

export default responseObj;
