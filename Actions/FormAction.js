'use server'

import database from "@/db/Db";
import contactModel from "@/models/ContactModel";
import { revalidatePath } from "next/cache";

const formAction = async (e) => {
    const name = e.get('name').toString();
    const email = e.get('email').toString();
    const message = e.get('message').toString();


  try {
    await database();
    const postData = new contactModel({name: name, email: email, message: message});
    await postData.save();
  } catch (error) {
    throw new Error('server error')
  }

} // end form Action

export default  formAction