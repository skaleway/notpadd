import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req:Request){

    try{

        const {title,description, userId} = await req.json()

        if (!title || !description || !userId){
            return new NextResponse("title and description are both require", {status:400})
        }

        // const User = await currentUser()
        // if(!User){
        //     return new NextResponse("UnAuthorized", {status:401})
        // }
        const user = await db.user.findUnique({
            where:{
                id:userId
            }
        })
        if (!user){
            return new NextResponse("Sorry user not found", {status:404})
        }

        const Project = await db.project.create({
            data:{
                title,
                description,
                userId:user.id,
            }
        })

        if(!Project){
            return new NextResponse("Something happened while creating note...",{status:402})
        }
        return new NextResponse(JSON.stringify(Project), {status:201})

    }catch(error:any){
        console.error(error.message)
        return new NextResponse("Internal server error", {status:500})
    }

}

export async function GET(req:Request){
    try {

        const Projects = await db.project.findMany()
        if(!Projects) return new NextResponse("Error getting projects", {status:404})
        
        return new NextResponse(JSON.stringify(Projects), {status:200})
    } catch (error:any) {
        console.log(error.message)
        return new NextResponse("Internal server error",{status:500})
        
    }
}