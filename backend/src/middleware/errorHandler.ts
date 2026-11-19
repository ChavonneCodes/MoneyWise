
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/AppError';

//err is unknown because an error can come from different places such as an AppError,database error or programming error
export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    //json error of response is sent back to the frontend
    return res.status(err.statusCode).json({
      error: { code: err.code, message: err.message, details: err.details ?? [] },
    });
  }
  //UNEXPECTED ERRORS
  console.error(err); // log detail server-side only
  return res.status(500).json({
    error: { code: 'INTERNAL_ERROR', message: 'Something went wrong', details: [] },
  });
}