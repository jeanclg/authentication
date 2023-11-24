export default class AppError extends Error {
  constructor(public message: string) {
    super(message);
  }
}
