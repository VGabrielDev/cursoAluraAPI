import pessoas from "../models/Pessoa.js";

class PessoaController {

    static async listarPessoas(req, res){
        const listaPessoas = await pessoas.find({});
        res.status(200).json(listaPessoas);
    }

    static async cadastrarPessoa(req, res){
     try{
        const novaPessoa = await pessoas.create(req.body); 
        res.status(201).json({message: "cadastrado com sucesso", pessoas:novaPessoa});
     }catch(erro){
        res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
     }
    }
};

export default PessoaController;