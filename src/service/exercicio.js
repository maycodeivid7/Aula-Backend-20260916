class ServiceExercicio {
    Exercicio(mensagem) {
        if (!isNaN(mensagem)) {
            throw new Error("Mensagem não pode ser um número");
        }
        return `Hello from exercicio service! ${mensagem}`;
    }
}

export default new ServiceExercicio();