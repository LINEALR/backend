import { Inject, Injectable } from "@nestjs/common";
import { DeleteDispositivos } from "src/ports/in/nestjs/dipositivos/delete-dipositivos.port";
import type { DispositivosRepositoryPort } from "src/ports/out/nestjs/dispositivos-repository.port";
import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/nestjs/dispositivos-repository.port";

@Injectable()
export class DeleteDispositivosService implements DeleteDispositivos {
    constructor(@Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly repo: DispositivosRepositoryPort) {}

    async execute(id_dispositivo: number): Promise<void> {
        return await this.repo.delete(id_dispositivo);
    }
}