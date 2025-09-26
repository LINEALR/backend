import { AreasSistemas } from "./areas-sistemas.entity";

export interface AreasSistemasRepository {
    get(search: Partial<AreasSistemas>, page?: number, pageSize?: number):
        Promise<{
            areasSistemas: AreasSistemas[];
            total: number;
            totalPages: number;
            currentPage: number;
        }>;
    create(area_sistemas: Partial<AreasSistemas>): Promise<AreasSistemas>;
    update(id_area: number, area_sistemas: Partial<AreasSistemas>): Promise<AreasSistemas>;
    delete(id_area: number): Promise<void>;
}