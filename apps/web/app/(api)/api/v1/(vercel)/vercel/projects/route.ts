
import { NextResponse } from "next/server";
import axios from "axios";


export async function GET(req:Request){
    try {

        const getVercelProjects = await axios.get(
            `https://api.vercel.com/v9/projects`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
                },
            }
        )

        console.log("projects here:", getVercelProjects.data);
        return NextResponse.json(getVercelProjects.data, {
            status: 200,
        });

        
    } catch (error:any) {
        console.error(error.message);
        return new NextResponse("Internal server error", { status: 500 });
        
    }
}