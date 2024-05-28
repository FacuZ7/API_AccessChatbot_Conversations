import mongoose from "mongoose";

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;

    try {
        await mongoose.connect(DB_URI)
            
        //     parece que esto esta deprecated, dejo comentado por las dudas.
        //     , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // })

        console.log('****** CONECTADO A MONGO ******')
    } catch (err) {
        console.log('****** ERROR EN CONEXIÓN A MONGO ******' + err.message)
    }

}

export default dbConnect