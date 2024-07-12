import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        email: 'jaser', 
        name: 'jaser'
    })
}