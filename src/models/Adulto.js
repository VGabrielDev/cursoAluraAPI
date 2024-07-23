import { MongoOIDCError } from "mongodb";
import mongoose from "mongoose";
import {criancasSchema} from "./Crianca.js";

// definindo estrutura e propriedades do documento
const adultosSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome : {type: String, required: true},
    cargo : {type: String},
    idade : {type: Number},
    qtdcriancas: {type: Number},
    criancas: criancasSchema
}, {versionKey: false});

const adultos = mongoose.model("adultos", adultosSchema);

export default adultos; 