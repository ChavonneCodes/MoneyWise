//custom error carrying a status and code
//blueprint for errors in our code. inherits JavaScript's built-in Error class and adds a status code, error code, and optional details array to provide more context about the error. This allows for more structured error handling in the application.
export class AppError extends Error {
  constructor(
    public statusCode: number,//HTTP status code associated with the error
    public code: string,//our own custom error identifier
    message: string,//explanation of the error
    public details?: unknown[]//optional array to provide additional context or information about the error
  ) {
    super(message);//constructor of the base class Error so the base class can handle it
    Object.setPrototypeOf(this, AppError.prototype);//custom error class behaves correctly within JavaScript's inheritance system.B e recognised as an AppError and Error
  }
}