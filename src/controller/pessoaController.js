import pessoas from "../models/Adulto.js";
import { criancas } from "../models/Crianca.js";

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
            res.status(200).json(pessoaEncontrada);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async cadastrarPessoa(req, res){
        const novaPessoa = req.body; 
     try{
        const criancaEncontrada = await criancas.findById(novaPessoa.criancas)
        const pessoaCompleta = {...novaPessoa, criancas: {... criancaEncontrada._doc}}
        const pessoaCriada = await pessoas.create(pessoaCompleta);
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
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async deletarPessoa(req, res){
        try{
            const id = req.params.id 
            await pessoas.findByIdAndDelete(id);
            res.status(200).json({message: "pessoa deletada"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão da pessoa`});
        }
    };
};

export default PessoaController;