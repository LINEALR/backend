export const DELETE_COLABORADORES_PORT = Symbol("DELETE_COLABORADORES_PORT");

export interface DeleteColaboradores {
    execute(id_colaboradores: number): Promise<void>;
}