import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/dispositivo/disposivos.entity";
import { GetDispositivos } from "src/ports/in/dipositivos/get-dispositivos.port";
import type { DispositivosRepositoryPort } from "src/ports/out/dispositivos-repository.port";
import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";

@Injectable()
export class GetDispositivosService implements GetDispositivos {
    constructor(@Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly repo: DispositivosRepositoryPort) {}
    
    async execute(disposivos: Partial<Dispositivos>): Promise<Dispositivos[] | null> {
        const dispositivo = await this.repo.get(disposivos);
        if (!dispositivo) {
            throw new Error (`Dispositivo con la información ${dispositivo} no encontrado`);
        }
        return dispositivo
    }
}