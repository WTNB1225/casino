'use server';
import { cookies } from "next/headers";

export async function setJwt(token: any) {
    const cookieStore = await cookies();
    cookieStore.set('jwt', token, {secure: true, httpOnly: true});
}