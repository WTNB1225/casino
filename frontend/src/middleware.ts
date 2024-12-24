import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function middleware(req: Request) {
    const requestHeader = new Headers(req.headers);
    requestHeader.set("x-url", req.url);
    const cookieStore = await cookies();
    const jwt = cookieStore.get("jwt");
    if (jwt) {
        requestHeader.set("Authorization", `Bearer ${jwt}`);
    }
    return NextResponse.next({
        request: {
            headers: requestHeader,
        }
    });
}