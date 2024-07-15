import pessoas from "../models/Pessoa.js";

class PessoaController {

    static async listarPessoas(req, res){
        const listaPessoas = await pessoas.find({});
        res.status(200).json(listaPessoas);
    }
};

export default PessoaController;