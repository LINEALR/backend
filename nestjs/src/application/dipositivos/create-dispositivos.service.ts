import { Inject, Injectable } from "@nestjs/common";
import { Dispositivos } from "src/domain/dispositivo/dispositivos.entity";
import type { DispositivosRepositoryPort } from "src/ports/out/dispositivos-repository.port";
import { CreateDispositivos } from "src/ports/in/dipositivos/create-dispositivos.port";
import { DISPOSITIVOS_REPOSITORY_PORT } from "src/ports/out/dispositivos-repository.port";

@Injectable()
export class CreateDispositivosService implements CreateDispositivos {
    constructor(@Inject(DISPOSITIVOS_REPOSITORY_PORT) private readonly repo: DispositivosRepositoryPort) {}

    async execute(data: Partial<Dispositivos>): Promise<Dispositivos> {
        if (!data.dispositivo) {
            throw new Error(`El nobre del dispositivo es obligatorio`);
        }
        return await this.repo.create(data);
    }
}