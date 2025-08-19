export class ColabroradorNotNameExeption extends Error {
    constructor()
    {
        super (`Favor de ingresar el nombre del colaborador`);
        this.name = 'ColaboradorNotNameExeption'
    }
}