export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(400, 'Bad Request');
    this.errors.set(401, 'Unauthorized');
    this.errors.set(402, 'Payment Required');
    this.errors.set(403, 'Forbidden');
    this.errors.set(404, 'Not Found');
  }

  getError(key) {
    return this.errors.has(key) ? this.errors.get(key) : 'Unknown error';
  }
}
