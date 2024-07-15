import mongoose, { mongo } from "mongoose";

async function conectarNaDatabase (){
    mongoose.connect("mongodb+srv://vgabrieldev:99253325Hh*@cluster0.jhucvuq.mongodb.net/registros?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection
};

export default conectarNaDatabase;
