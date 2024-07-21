// import { customInitApp } from '@/library/fb-admin-config';
// import { getFirestore } from 'firebase-admin/firestore';

export default async function TestServPage() {

    // customInitApp();

    // const store = getFirestore();
    // const dataRef = store.collection('col').doc('doc');
    // const dataSnap = await dataRef.get();
    // let data;
    // if (dataSnap.exists) {
    //     const getData = dataSnap.data();
    //     data = getData.text2;
    // }

    const data = 123

    return (
        <div>
            <div>{`test server page - test server component : " ${data} "`}</div>
        </div>
    )
}