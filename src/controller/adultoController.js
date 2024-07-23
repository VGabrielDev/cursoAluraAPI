import adultos from "../models/Adulto.js";
import { criancas } from "../models/Crianca.js";

class AdultoController {

    static async listarAdultos(req, res){
        try{
            const listaAdultos = await adultos.find({});
            res.status(200).json(listaAdultos);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar pessoa`});
        }
    };

    static async listarAdultosPorId(req, res){
        try{
            const id = req.params.id 
            const adultoEncontrado = await adultos.findById(id);
            res.status(200).json(adultoEncontrado);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async cadastrarAdulto(req, res){
        const novoAdulto = req.body; 
     try{
        const criancaEncontrada = await criancas.findById(novoAdulto.criancas)
        const adultoCompleto = {...novoAdulto, criancas: {... criancaEncontrada._doc}}
        const adultoCriado = await adultos.create(adultoCompleto);
        res.status(201).json({message: "cadastrado com sucesso", pessoas:novoAdulto});
     }catch(erro){
        res.status(500).json({message: `${erro.message} - falha ao cadastrar pessoa`});
     }
    }

    static async atualizarAdulto(req, res){
        try{
            const id = req.params.id 
            await adultos.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "adulto atualizado"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async deletarAdulto(req, res){
        try{
            const id = req.params.id 
            await adultos.findByIdAndDelete(id);
            res.status(200).json({message: "adulto deletado"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão`});
        }
    };
};

export default AdultoController;