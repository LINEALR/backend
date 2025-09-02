import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/dispositivo/dispositivos.entity";
import { UpdateDispositivos } from "src/ports/in/dipositivos/update-dispositivos.port";
import type { DispositivosRepositoryPort } from "src/ports/out/dispositivos-repository.port";
import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";

@Injectable()
export class UpdateDispositivosService implements UpdateDispositivos {
    constructor(@Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly repo: DispositivosRepositoryPort) {}

    async execute(id_dispositivos: number, data: Partial<Dispositivos>): Promise<Dispositivos> {
        return await this.repo.upadte(id_dispositivos, data);
    }
}