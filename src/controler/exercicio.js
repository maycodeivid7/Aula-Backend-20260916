import ServiceExercicio from "../service/exercicio.js";

class ControllerExercicio {

    Exercicio(req, res) {
        const mensagem = req.query.mensagem || "default";
        res.send(ServiceExercicio.Exercicio(mensagem));
    }

 }

export default new ControllerExercicio();