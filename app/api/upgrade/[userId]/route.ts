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



          /* payement logic here for basic account */

          const ispaymentsuccessfull = true


            if(!ispaymentsuccessfull) return new NextResponse("Payment failed, please try again later or contact us for suppor",{status:402})

            const UpdateUserAccountTypetoBasic= await db.user.update({
                where:{
                    id:userId
                },
                data:{
                    accounttype:AccountType.Basic
                }
            })

            if(!UpdateUserAccountTypetoBasic) return new NextResponse("An uexpected error occured while upgrading account. please contact us for support",{status:401})
            
            return new NextResponse("Account Upgraded to BASIC Plan, Congratulations", {status:200})

            
        }
        if(DoesUserExist.accounttype === AccountType.Basic || DoesUserExist.accounttype === AccountType.Free && accounttype === AccountType.Premium){

/* payement logic here for premium account */

const ispaymentsuccessfull = true 

if (!ispaymentsuccessfull) 
    
    {

        return new NextResponse("Payment failed, please try again later or contact us for support",{status:402})
    }

        const UpdateUserAccounttoPremuim = await db.user.update({
                where:{
                    id:userId
                },
                data:{
                    accounttype:AccountType.Premium

                }
    
            })

            if(!UpdateUserAccounttoPremuim) return new NextResponse("An uexpected error occured while upgrading account. please contact us for support",{status:401})

            return new NextResponse("Account Upgraded to Premium Plan, Congratulations", {status:200})
        }

        

   return new NextResponse("Account Upgraded to Premium Plan, Congratulations", {status:200})
        
    } catch (error:any) {
        console.error(error.messag)
        return new NextResponse("Internal Server error",{status:500})
    }
}