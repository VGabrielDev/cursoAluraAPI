import { MongoOIDCError } from "mongodb";
import mongoose from "mongoose";

// definindo estrutura e propriedades do documento
const pessoaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome : {type: String, required: true},
    cargo : {type: String},
    idade : {type: Number},
    qtdcriancas: {type: Number}
}, {versionKey: false});

const pessoa = mongoose.model("pessoas", pessoaSchema);

export default pessoa; 