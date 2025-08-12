export class Colaborador {
  public id_colaboradores?: number;
  public num_control: number;
  public nombre: string;
  public correo: string;
  public id_area: number;

  constructor(data: {
    num_control: number;
    nombre: string;
    correo: string;
    id_area: number;
    id_colaboradores?: number;
  }) {
    Object.assign(this, data);
  }
}