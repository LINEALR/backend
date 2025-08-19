import { Usuario } from "../usuario.entity";
import { ExepcionGenerica } from "src/nestjs/domain/colaboradores/exeptions/exepcionGenerica.exeption";

export class UsuarioValidator {
    static valiate(usuario: Usuario): void {
        if (usuario.num_control < 0) {
            throw new ExepcionGenerica('Error en la operación');
        }
    }
}