import { db } from "@/lib/db";

import { NextResponse } from "next/server";




export async function GET(req:Request, {params}:{params:{userId:string}}){
    try {
        
        const { userId } = params 
        
        if (!userId) return new NextResponse("userId is required", { status: 400 })
        
        
        const dashboardData = await db.project.findMany({
            where:
            {
                userId: userId
            },
            include: {
                User: true,
                articles:true 

            }
        })


        if (!dashboardData) return new NextResponse("An error occured whilst gettting data"), { status: 404 }
        

        return new NextResponse(JSON.stringify(dashboardData), { status: 200 })

    } catch (error: any) {
        
        console.error(error.messaga)
        return new NextResponse("Internal server error", {status:500})
        
    }
}