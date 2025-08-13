export interface DeleteColaboradores {
    execute(id_colaboradores: number): Promise<void>;
}