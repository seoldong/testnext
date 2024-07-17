import { NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore'
import { customInitApp } from '@/library/fb-admin-config';

export async function POST(req, res) {
    customInitApp();
    const store = getFirestore();
    const reqData = await req.json();
    const dataRef = store.collection('col').doc('doc');
    const dataSnap = await dataRef.get();
    if (dataSnap.exists) {
        const getData = dataSnap.data();
        const num = getData.num
        const newData = {
            num: Number(num) + Number(reqData.num)
        }
        await dataRef.update(newData)
    }
    return NextResponse.json({}, { status: 200 })
}