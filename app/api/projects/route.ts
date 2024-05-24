import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req:Request){

    try{

        const {title,description} = await req.json()

        if (!title || !description){
            return new NextResponse("title and description are both require", {status:400})
        }

        const User = await currentUser()
        if(!User){
            return new NextResponse("Un Authorized", {status:401})
        }
        const user = await db.user.findUnique({
            where:{
                userId:User.id
            }
        })
        if (!user){
            return new NextResponse("Sorry user not found", {status:404})
        }

        const Note = await db.project.create({
            data:{
                title,
                description,
                userId:user.id,
            }
        })

        if(!Note){
            return new NextResponse("Something happened while creating note...",{status:402})
        }
        return new NextResponse("Note create succesffuly", {status:201})

    }catch(error:any){
        console.error(error.message)
        return new NextResponse("Internal server error", {status:500})
    }

}