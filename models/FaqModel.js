import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    question: String,
    answer: String
}); // end faq schema

const faqModel = mongoose.models.Faq_Data || new mongoose.model('Faq_Data', faqSchema)

export default faqModel