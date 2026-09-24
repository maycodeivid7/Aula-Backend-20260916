import Pessoa from "../model/pessoa.js";

class ServicePessoa {

    Buscar() {
        return Pessoa.Buscar();
    }

    BuscarUm(id) {
        //if (!id ||id < 0 || id >= Pessoa.Buscar().length || isNaN(id)) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        return Pessoa.BuscarUm(id);
    }

    Criar(nome) {
        if (!nome || typeof nome !== "string") {
            throw new Error("Nome inválido");
        }
        Pessoa.Criar(nome);
    }

    Alterar(id, nome) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        if (!nome || typeof nome !== "string") {
            throw new Error("Nome inválido");
        }
        Pessoa.Alterar(id, nome);
    }

    Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        Pessoa.Deletar(id);
    }
}

export default new ServicePessoa();