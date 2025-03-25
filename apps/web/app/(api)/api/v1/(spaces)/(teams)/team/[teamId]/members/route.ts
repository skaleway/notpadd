
import {db} from "@workspace/db"
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";


export async function GET(req:Request, {params}: {
    params: Promise<{ teamId: string }>
  }){
    try {
        const {teamId} = await params
        if(!teamId){
            return new NextResponse("TeamId is required", {status:400})
        }

        const team = await db.team.findUnique({
            where:{
                id:teamId
            },
            include:{
                members:true
            }
        })

        if(!team){
            return new NextResponse("Team not found", {status:404})
        }

        return new NextResponse(JSON.stringify(team), {status:200})
        
    } catch (error:any) {
        console.error(error.message)
        return new NextResponse("Internal server error", {status:500})
        
    }
}


export async function POST(req:Request, {params}:{
    params: Promise<{ teamId: string }>
  }){
    try {
        const {teamId } = await params
        const {userId} = await req.json()
        const user = await currentUser()
       
        if(!user){
            return new NextResponse("Unauthorized", {status:401})
        }

        const userdata = await db.user.findUnique({
            where:{
                id:user.id
            }
        })

        if(!userdata){
            return new NextResponse("User not found", {status:404})
        }

        if(!teamId){
            return new NextResponse("TeamId is required", {status:400})
        }

        const team = await db.team.findUnique({
            where:{
                id:teamId
            }
        })

        if(!team){
            return new NextResponse("Team not found", {status:404})
        }

        if(team.creatorId !== userdata.id){
            return new NextResponse("Unauthorized", {status:401})
        }

        const ismemberinteam = await db.member.findFirst({
            where:{
                userId:userId,
                teamId:teamId
            }
        })

        if(ismemberinteam){
            return new NextResponse("User is already a member of this team", {status:400})
        }

        await db.member.create({
            data:{
                userId:userId,
                teamId:teamId
            }
        })

        return new NextResponse("member added successfully", {status:201})
        
    } catch (error:any) {
        console.error(error.message)
        return new NextResponse("Internal server error", {status:500})
        
    }
}


export async function DELETE(req:Request, {params}: {
    params: Promise<{ teamId: string }>
  }){
    try {
        const {teamId} = await params
        const {userId} = await req.json()

        const user = await currentUser()
        if(!user){
            return new NextResponse("Unauthorized", {status:401})
        }

        const userdata = await db.user.findUnique({
            where:{
                id:user.id
            }
        })

        if(!userdata){
            return new NextResponse("User not found", {status:404})
        }

        if(!teamId){
            return new NextResponse("TeamId is required", {status:400})
        }

        const team = await db.team.findUnique({
            where:{
                id:teamId
            }
        })

        if(!team){
            return new NextResponse("Team not found", {status:404})
        }

        if(team.creatorId !== userdata.id){
            return new NextResponse("Unauthorized", {status:401})
        }

        const ismemberinteam = await db.member.findFirst({
            where:{
                userId:userId,
                teamId:teamId
            }
        })

        if(!ismemberinteam){
            return new NextResponse("User is not a member of this team", {status:400})
        }

 await db.member.deleteMany({
            where:{
                userId:userId,
                teamId:teamId
            }
        })

        return new NextResponse("Member removed successfully", {status:200})

        
    } catch (error:any) {
        console.error(error.message)
        return new NextResponse("Internal server error", {status:500})
    }
}