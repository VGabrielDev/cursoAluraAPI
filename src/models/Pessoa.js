import { MongoOIDCError } from "mongodb";
import mongoose from "mongoose";
import { criancasSchema} from "./Crianca";

// definindo estrutura e propriedades do documento
const pessoasSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome : {type: String, required: true},
    cargo : {type: String},
    idade : {type: Number},
    qtdcriancas: {type: Number}
}, {versionKey: false});

const pessoas = mongoose.model("pessoas", pessoasSchema);

export default pessoas; 