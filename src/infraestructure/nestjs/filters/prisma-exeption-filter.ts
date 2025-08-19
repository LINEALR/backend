import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { Prisma } from "@prisma/client";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExeptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        
        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        
        switch (exception.code) {
            case 'P2002': // Unique constraint failed
                statusCode = HttpStatus.CONFLICT;
                break;
            case 'P2003': // Foreign key constraint failed
                statusCode = HttpStatus.BAD_REQUEST;
                break;
            case 'P2025': //Recoed not found
                statusCode = HttpStatus.NOT_FOUND;
                break;
            default:
                statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
                break;
        }

        response.status(statusCode).json({
            statusCode,
            code: exception.code,
            message: exception.message,
            meta: exception.meta,
        });
    }
}