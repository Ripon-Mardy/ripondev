import mongoose from "mongoose"

const database = async () => {
    try {
        const mongouri = process.env.MONGO_URL;
        await mongoose.connect(mongouri)
        console.log('mongodb connection succesfull');
    } catch (error) {
        throw new Error('Error in connecting mongodb..')
    }
}

export default database