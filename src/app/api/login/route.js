import { NextResponse } from 'next/server';
import { customInitApp } from '../../../lib/fb-admin-config';
import { auth } from 'firebase-admin';
import { cookies, headers } from 'next/headers';


customInitApp();

export async function POST() {

  const authorization = await headers().get('Authorization');

  if (authorization?.startsWith("Bearer ")) {

    const idToken = authorization.split("Bearer ")[1];
    const decodedToken = await auth().verifyIdToken(idToken);

    if (decodedToken) {
      const expiresIn = (((1000 * 60) * 60) * 1) * 1; // m * s * h * d
      const sessionCookie = await auth().createSessionCookie(idToken, { expiresIn });
      const options = {
        name: "session",
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      }
      cookies().set(options);
    }
  }

  console.log('signIn cookies')
  return NextResponse.json({}, { status: 200 });
}

// ----------

export async function GET(req, res) {

  const session = cookies().get("session")?.value || "";

    if (!session) {
      console.log('api get err 01');
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }

    const decodedClaims = await auth().verifySessionCookie(session, true)

    if (!decodedClaims) {
      console.log('api get err 02');
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }

    return NextResponse.json({ isLogged: true }, { status: 200 });
}

// ----------
