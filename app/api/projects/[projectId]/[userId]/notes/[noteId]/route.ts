import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(req:Request, {params}:{params:{projectId:string, userId:string, noteId:string}}){
    try {

        const {projectId,userId,noteId} = params 

        if (!projectId || !userId && !noteId) return new NextResponse("Notes id is required. very your url", {status:400})
        

        const GetNote = await db.note.findFirst({
            where:{
                id:noteId,
                projectId:projectId
            }
        })

        if(!GetNote) return new NextResponse("An unexpected error occured",{status:401})
        
        return new NextResponse(JSON.stringify(GetNote),{status:200})
        
    } catch (error:any) {
        console.error(error)
        return new NextResponse("Internal server error", {status:500})
        
    }
}


export async function PUT(req:Request,{params}:{params:{projectId:string, userId:string, noteId:string}}){
    
}