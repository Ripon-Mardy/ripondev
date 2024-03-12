import { NextResponse } from "next/server";
import database from "@/utils/db";
import postmodel from "@/models/post";

export const GET = async (request) => {
    try {
        await database();
        const postData = await postmodel.find();
        return new NextResponse(JSON.stringify(postData))
    } catch (error) {
        return NextResponse('Error in fetching from mongodb', error)
    }
}