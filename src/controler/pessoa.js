import ServiceExercicio from "../service/pessoa.js";

class ControllerPessoa {

    Buscar() {
        try {
            const nomes = ServicePessoa.Buscar();
            res.send({ nomes });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id;
            const nome = ServicePessoa.BuscarUm(id);
            res.send({ nome });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    Criar(req, res) {
        try {
            const nome = req.body.nome;
            ServicePessoa.Criar(nome);
            res.status(201).send({ message: "Pessoa criada com sucesso" });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id;
            const nome = req.body.nome;
            ServicePessoa.Alterar(id, nome)
            res.send({ message: "Pessoa alterada com sucesso" });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id;
            ServicePessoa.Deletar(id)
            res.send({ message: "Pessoa deletada com sucesso" });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

 }

export default new ControllerPessoa();