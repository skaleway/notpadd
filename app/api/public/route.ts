import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { headers } = req;

    try {
        

    // const { title, description, userId } = await req.json();


    
    const next_notpadd_userId = headers.get("next_notpadd_userId");
    const next_notpadd_projectId = headers.get("next_notpadd_projectId");
    const get_only_private_articles = headers.get("get_only_private_articles");
    const get_only_public_articles = headers.get("get_only_public_articles");

console.log("headers here", next_notpadd_userId, next_notpadd_projectId, get_only_private_articles, get_only_public_articles)

    if (!next_notpadd_projectId && !next_notpadd_userId) {
        return new NextResponse("You are not authorized to view this page", { status: 401 });
    }





    return new NextResponse("You are authorized to view this page", { status: 200 });



    } catch (error:any) {
        return new NextResponse("Internal server error", { status: 500 });
        
    }
    
    


}


// const pagerequestdata = {
//     getallprojects: false,
//     getallarticles: false,
//     getartcleonly: false,
//     getothersnotesonly:false,
//     getsimplenotesonly:false,
//     getblogsonly: false,

    
// }