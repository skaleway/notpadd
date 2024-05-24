import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function PUT(req:Request, {params}:{params:{projectId:string}}){
    try {
        const {projectId} = params
        const {title, description} = await req.json()

        if(!projectId) return new NextResponse("Project not found", {status:400})
        
        const UpdateProject = await db.project.update({
            where:{
                id:projectId,
                userId:"2b0b3b26-85d1-486f-b1b1-52218cafd171"
            },
           data:{
            title:title,
            description:description,

           } 
        })

        if(!UpdateProject) return new NextResponse("Something happened while updating projce", {status:403})
        return new NextResponse("Project update sucessfully", {status:200})

    } catch (error:any) {

        console.error(error.message)
        return new NextResponse("Internal server error", {status:500})
        
    }
}

export async function GET(req:Request, {params}:{params:{projectId:string}}){
    try {
        const {projectId} = params

        if(!projectId) return new NextRequest("project id required")


        
        
    } catch (error:any) {

        console.error(error.message)
        return new NextResponse("Internal Server Error", {status:500})
        
    }

}