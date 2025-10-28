import { UsuarioRepository } from "src/domain/entities/usuario/usuario.repository";

export const USUARIO_REPOSITORY_PORT = Symbol('USUARIO_REPOSITOTY_PORT');

export type UsuarioRepositoryPort = UsuarioRepository;