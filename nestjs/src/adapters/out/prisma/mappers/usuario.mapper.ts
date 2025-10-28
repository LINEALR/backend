import { Usuario } from "src/domain/entities/usuario/usuario.entity";

export class UsuarioMapper {
    static toPrisma(entity: Usuario) {
        return {
            id_usuario: entity.id_usuario,
            num_control: entity.num_control,
            id_rol: entity.id_rol,
            contrasena: entity.contrasena,
            status: entity.status
        };
    }

    static partalToPrisma(entity: Partial<Usuario>) {
        return {
            ...(entity.id_usuario !== undefined && { id_usuario: entity.id_usuario }) ?? 0,
            ...(entity.num_control !== undefined && { num_control: entity.num_control }) ?? 0,
            ...(entity.id_rol !== undefined && { id_rol: entity.id_rol }) ?? 0,
            ...(entity.contrasena !== undefined && { contrasena: entity.contrasena }),
            ...(entity.status !== undefined && { status: entity.status }),
        };
    }

    static toDomain(raw: any): Usuario {
        return new Usuario({
            id_usuario: raw.id_usuario,
            num_control: raw.num_control,
            id_rol: raw.id_rol,
            contrasena: raw.contrasena,
            status: raw.status
        });
    }
}