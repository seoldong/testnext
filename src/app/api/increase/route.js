import { db } from '@/library/fb-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req, res) {

    const reqData = await req.json();

    const dataRef = doc(db, "col", "doc");
    const docSnap = await getDoc(dataRef);
    if (docSnap.exists()) {
        console.log('use api route : increase');
        const data = docSnap.data();
        await updateDoc(docSnap, `${data.num + { reqData }}`);
    }

    return NextResponse.json({}, { status: 200 })
}