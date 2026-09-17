import ServiceExercicio from "../service/exercicio.js";

class ControllerExercicio {

    Exercicio(req, res) {
        try {
            const mensagem = req.query.mensagem || "default";
            res.send(ServiceExercicio.Exercicio(mensagem));
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

 }

export default new ControllerExercicio();