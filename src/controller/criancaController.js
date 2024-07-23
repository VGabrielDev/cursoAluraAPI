import { criancas } from "../models/Crianca.js";

class CriancaController {

    static async listarCriancas(req, res){
        try{
            const listaCriancas = await criancas.find({});
            res.status(200).json(listaCriancas);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async buscarCriancasPorPessoa(req, res){
        const pessoa = req.query.nome;
        try{
            const criancasDaPessoa = await criancas.find({nome : pessoa})
            res.status(200).json(criancasDaPessoa);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async listarCriancasPorId(req, res){
        try{
            const id = req.params.id 
            const criancaEncontrada = await criancas.findById(id);
            res.status(200).json(criancaEncontrada);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async cadastrarCrianca(req, res){
     try{
        const novaCrianca = await criancas.create(req.body); 
        res.status(201).json({message: "cadastrado com sucesso", criancas:novaCrianca});
     }catch(erro){
        res.status(500).json({message: `${erro.message} - falha ao cadastrar criança`});
     }
    }

    static async atualizarCrianca(req, res){
        try{
            const id = req.params.id 
            await criancas.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "criança atualizada"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async deletarCrianca(req, res){
        try{
            const id = req.params.id 
            await criancas.findByIdAndDelete(id);
            res.status(200).json({message: "criança deletada"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão da criança`});
        }
    };
};

export default CriancaController;