import { MongoOIDCError } from "mongodb";
import mongoose from "mongoose";

const criancasSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome : {type: String, required: true},
    idade : {type: Number},
}, {versionKey: false});

const criancas = mongoose.model("criancas", criancasSchema);

export {criancas, criancasSchema}; 