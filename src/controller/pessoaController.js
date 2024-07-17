import pessoas from "../models/Pessoa.js";

class PessoaController {

    static async listarPessoas(req, res){
        try{
            const listaPessoas = await pessoas.find({});
            res.status(200).json(listaPessoas);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar pessoa`});
        }
    };

    static async listarPessoasPorId(req, res){
        try{
            const id = req.params.id 
            const pessoaEncontrada = await pessoas.findById(id);
            res.status(200).json(listaPessoas);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do livro`});
        }
    };

    static async cadastrarPessoa(req, res){
     try{
        const novaPessoa = await pessoas.create(req.body); 
        res.status(201).json({message: "cadastrado com sucesso", pessoas:novaPessoa});
     }catch(erro){
        res.status(500).json({message: `${erro.message} - falha ao cadastrar pessoa`});
     }
    }

    static async atualizarPessoa(req, res){
        try{
            const id = req.params.id 
            await pessoas.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "pessoa atualizada"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição da pessoa`});
        }
    };
};

export default PessoaController;