import { handlers, auth } from "@/auth";
import { NextRequest } from "next/server";
import { getToken } from "@auth/core/jwt";


const { GET: AuthGET, POST: AuthPOST } = handlers;

export async function POST(request: NextRequest) {

  console.log(`POST request:`, request);
  const res = await AuthPOST(request);

  return res;
}

export async function GET(request: NextRequest) {

  let response = await AuthGET(request);

  console.log(`route response:`, response);

  return response;
}
