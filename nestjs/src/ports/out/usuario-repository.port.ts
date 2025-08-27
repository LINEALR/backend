import { UsuarioRepository } from "src/domain/usuario/usuario.repository";

export const USUARIO_REPOSITORY_PORT = Symbol('USUARIO_REPOSITOTY_PORT');

export type UsuarioRepositoryPort = UsuarioRepository;