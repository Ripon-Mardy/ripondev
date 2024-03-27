import { NextResponse } from "next/server";
import faqModel from "@/models/FaqModel";
import database from "@/db/Db";

export const GET = async (request) => {
  await database();
  try {
    const faqData = await faqModel.find();
    return  NextResponse.json(faqData);
  } catch (error) {
    console.log(error);
  }
};
