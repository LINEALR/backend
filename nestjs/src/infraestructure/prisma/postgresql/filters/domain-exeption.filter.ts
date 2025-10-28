import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, } from "@nestjs/common";
import { Response } from "express";
import { ColabroradorNotNameExeption } from "src/domain/entities/colaboradores/exeptions/colaborador-not-name.exeption";

@Catch()
export class DomainExeptionFilter implements ExceptionFilter {
    private readonly exeptionMap = new Map<Function, number>([
        [ColabroradorNotNameExeption, HttpStatus.NOT_FOUND],
    ]);

    catch(exeption: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const status = this.exeptionMap.get(exeption.constructor) || HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
            error: exeption.name,
            message: exeption.message,
            statusCode: status,
            timestamp: new Date().toISOString
        });
    }
}