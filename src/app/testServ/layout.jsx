
// import { customInitApp } from '@/library/fb-admin-config';
// import { getFirestore } from 'firebase-admin/firestore'

// customInitApp();

export default async function TestServLayout({ children }) {

    // const store = getFirestore();
    // const dataRef = store.collection('col').doc('doc');
    // const dataSnap = await dataRef.get();
    // let data;
    // if (dataSnap.exists) {
    //     const getData = dataSnap.data();
    //     data = getData.text1;
    // }
    const data = 456

    
    return (
        <div>
            <div>{`test server layout - server code test : " ${data} "`}</div>
            <div>{children}</div>
        </div>
    )
}