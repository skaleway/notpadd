import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req:Request, {params}:{params:{projectId:string, userId:string}}){
    try {
        
        const {projectId, userId} = params

        const {content,title, description} = await req.json()

        const CreateNote = await db.note.create({
            data:{
                content,
                description,
                title,
                userId:userId,
                projectId:projectId
                
            }
        })

        if(!CreateNote) return new NextResponse("An error un expected error occured while creating Note", {status:402})
        
        return new NextResponse(JSON.stringify(CreateNote), {status:200})
        
    } catch (error:any) {

        console.error(error.messag)
        return new NextResponse("Internal Server error", {status:500})
        
    }
}