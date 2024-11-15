import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../enum/error.code';

export class InvoiceNotFoundException extends HttpException {
  constructor(message?: string, error?: typeof Error) {
    super(
      {
        message: error
          ? error.toString()
          : message
            ? message.toString()
            : 'not found',
        code: ErrorCode.INVOICE_NOT_FOUND,
        statusCode: HttpStatus.NOT_FOUND,
        alerts: [],
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
