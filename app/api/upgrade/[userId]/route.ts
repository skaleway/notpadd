import { db } from "@/lib/db";
import {NextResponse} from "next/server"
import { AccountType } from "@prisma/client";


export async function PUT(req:Request, {params}:{params:{userId:string}}){
    try {
        const {userId} = params 
        const {accounttype} = await req.json()

        if(!userId) return new NextResponse("UserId needed, please try again later", {status:402})
        
        const DoesUserExist = await db.user.findUnique({
            where:{
                id:userId 
            }
        })

        if(!DoesUserExist) return new NextResponse("User not found",{status:404})

        if (DoesUserExist.accounttype === AccountType.Free && accounttype === AccountType.Basic ){

            const UpdateUserAccountType = await db.user.update({
                where:{
                    id:userId
                },
                data:{
                    accounttype:AccountType.Basic
                }
            })

            if(!UpdateUserAccountType) return new NextResponse("An uexpected error occured while upgrading account",{status:401})
            
            return new NextResponse("Account Upgraded to BASIC Plan, Congratulations", {status:200})

            
        }
        if(DoesUserExist.accounttype === AccountType.Basic || DoesUserExist.accounttype === AccountType.Free && accounttype === AccountType.Premium){

            const UpdateUserAccountType = await db.user.update({
                where:{
                    id:userId
                },
                data:{
                    accounttype:AccountType.Premium

                }
    
            })
        }
        
    } catch (error:any) {
        console.error(error.messag)
        return new NextResponse("Internal Server error",{status:500})
    }
}