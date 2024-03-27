import {mongoose} from "mongoose";

const database = async () => {
    try {
        // const dbUrl = process.env.DATABASE_URL;
        await mongoose.createConnection("mongodb+srv://riponmardy:Ripon&m1@cluster0.h1xsxyh.mongodb.net/Faq?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('mongodb connection established');
    } catch (error) {
        throw new Error(error)
    }
}

export default database