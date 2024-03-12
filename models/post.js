import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const postmodel = mongoose.models._Data_protfolio || mongoose.model('_Data_protfolio', postSchema);
      
export default postmodel