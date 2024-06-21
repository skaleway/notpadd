import {db} from "../../../lib/db"
import { NextResponse } from "next/server" 


export async function GET(req:Request){
    try {

        const user = await db.user.findMany()

        if (!user) return new NextResponse("No user found", { status: 404 })
        
        return new NextResponse(JSON.stringify(user), {status:200})
        
    } catch (error: any) {
        console.error(error.message)
        return new NextResponse("Internal server error", {status:500})
        
    }
}