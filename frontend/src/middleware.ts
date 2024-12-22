import { NextResponse } from "next/server";

export function middleware(req: Request) {
    const requestHeader = new Headers(req.headers);
    requestHeader.set("x-url", req.url);

    return NextResponse.next({
        request: {
            headers: requestHeader,
        }
    });
}