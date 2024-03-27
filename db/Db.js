import mongoose from "mongoose";

const database = async () => {
    try {
        const dbUrl = process.env.DATABASE_URL;
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('mongodb connection established');
    } catch (error) {
        throw new Error(error)
    }
}

export default database