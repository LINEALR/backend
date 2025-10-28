import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/entities/dispositivo/dispositivos.entity";
import { GetDispositivos } from "src/ports/in/dipositivos/get-dispositivos.port";
import type { DispositivosRepositoryPort } from "src/ports/out/dispositivos-repository.port";
import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";

@Injectable()
export class GetDispositivosService implements GetDispositivos {
    constructor(@Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly repo: DispositivosRepositoryPort) { }

    async execute(search: Partial<Dispositivos>, page = 1, pageSize = 10):
        Promise<{
            dispositivos: Dispositivos[];
            total: number;
            totalPages: number;
            currentPage: number;
        }> {
        const dispositivo = await this.repo.get(search, page, pageSize);
        if (!dispositivo) {
            throw new Error(`Dispositivo con la información ${dispositivo} no encontrado`);
        }
        return dispositivo
    }
}