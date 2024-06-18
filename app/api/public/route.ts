import { db } from "@/lib/db";


import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const { headers } = req;
    const next_notpadd_userId = headers.get("next_notpadd_userId");
    const next_notpadd_projectId = headers.get("next_notpadd_projectId");


    if (!next_notpadd_projectId && !next_notpadd_userId) {
        

        return new NextResponse("You are not authorized to view this page", { status: 401 });
    }

    return new NextResponse("You are authorized to view this page", { status: 200 });



}


// const pagerequestdata = {
//     getallprojects: false,
//     getallarticles: false,
//     getartcleonly: false,
//     getothersnotesonly:false,
//     getsimplenotesonly:false,
//     getblogsonly: false,

    
// }