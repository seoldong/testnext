"use client";

import { auth, db } from "@/library/fb-config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Memberlayout({ children }) {
  const [data, setData] = useState("");
  useEffect(() => {
    const sign = onAuthStateChanged(auth, async (userCred) => {
      console.log("uid", userCred?.uid);
      if (userCred) {
        const dataRef = doc(db, "col", "doc");
        const docSnap = await getDoc(dataRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setData(data.num);
        }
      }
    });
  });

  return (
    <div>
      <div>this is member layout</div>
      <div>{data}</div>
      <div>{children}</div>
    </div>
  );
}
