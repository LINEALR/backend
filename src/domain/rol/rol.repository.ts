import { Rol } from "./rol.entity";

export interface RolRepository {
    create(rol: Rol): Promise<void>;
    getById(id_rol: number): Promise<Rol | null>;
    update(rol: Rol): Promise<void>;
    delete(id_area: number): Promise<void>;
}