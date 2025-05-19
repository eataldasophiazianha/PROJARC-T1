import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  ForbiddenException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import {
  ExceptionsAdapter,
  ExceptionParams,
} from 'src/domain/adapters/exceptions.adapter';

@Injectable()
export class ExceptionsIntegration implements ExceptionsAdapter {
  badRequest(data: ExceptionParams): void {
    throw new BadRequestException(data);
  }

  internalServerError(data?: ExceptionParams): void {
    throw new InternalServerErrorException(data);
  }

  forbidden(data?: ExceptionParams): void {
    throw new ForbiddenException(data);
  }

  unauthorized(data?: ExceptionParams): void {
    throw new UnauthorizedException(data);
  }

  notFound(data?: ExceptionParams): void {
    throw new NotFoundException(data);
  }
}
