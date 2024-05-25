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
    
    try {
        
        const {projectId,userId, noteId} = params

        const {title, content,description, type,isPublic} = await req.json()

        if (!projectId && !userId && !noteId) return new NextResponse("ProjectId, userId and noteId are required", {status:401})

        const DoesNoteExist = await db.note.findUnique({
            where:{
                id:noteId,
                userId:userId,
                projectId:projectId
            }
        })

        if(!DoesNoteExist) return new NextResponse("Note not found", {status:402})


        const updateNote = await db.note.update(
            
            {
                where:{
                    id:noteId,
                    userId:userId,
                    projectId:projectId
                },
                data:{
                    title:title,
                    content:content,
                    description:description,
                    type:type,
                    isPublic:isPublic
                }

        })

        if(!updateNote) return new NextResponse("An error occured whilr updating note", {status:400})

        return new NextResponse(JSON.stringify(updateNote), {status:200})

    } catch (error:any) {
        console.error(error.message)
        return new NextResponse("Internal server error", {status:500})
        
    }
}


export async function DELETE(req:Request, {params}:{params:{projectId:string,userId:string,noteId:string}}){
    try {

        const {projectId,userId,noteId} = params 
        if(!projectId && !userId && !noteId) return new NextResponse("ProjectId, userid and noteid are required", {status:401})
        
        const DoesNoteExist = await db.note.findUnique({
            where:
            {
                id:noteId, 
                userId:userId,
                projectId:projectId
            }
        })

        if(!DoesNoteExist) return new NextResponse("Note Not found...", {status:404})
        
    return new NextResponse("Note deleted successfully", {status:200})
    } catch (error:any) {

        console.error(error.message)

        return new NextResponse("Internal Server error", {status:500})
        
    }
}