"use client";

import { auth, store } from "@/library/fb-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Logoutbtn from "@/components/Logout";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Memberpage() {
  const route = useRouter();

  // useEffect(() => {
  //   const errTest = onAuthStateChanged(auth, async () => {
  //     const url = `/api/logIn`;
  //     const options = { method: "GET" };
  //     await fetch(url, options);
  //     return () => errTest();
  //   });
  // }, []);

  const onClickIncrease = async (e) => {
    const url = "/api/increase";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "increase",
        num: "3",
      }),
    };
    fetch(url, options).then((res) => {
      if (res.status === 200) {
        console.log("success incresase");
        route.refresh();
      }
    });
  };

  const onClickDecreate = async (e) => {
    const url = "/api/decrease";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "decrease",
        num: "3",
      }),
    };
    fetch(url, options).then((res) => {
      if (res.status === 200) {
        console.log("success decresase");
        route.refresh();
      }
    });
  };
  //
  const onClickClientIecreate = async (e) => {
    const dataRef = doc(store, "col", "doc");
    const docSnap = await getDoc(dataRef);
    const data = docSnap.data();
    const newData = { num: Number(data.num + 3) };
    await updateDoc(dataRef, newData);
    route.refresh();
  };
  //
  const onClickClientDecreate = async (e) => {
    const dataRef = doc(store, "col", "doc");
    const docSnap = await getDoc(dataRef);
    const data = docSnap.data();
    const newData = { num: Number(data.num - 3) };
    await updateDoc(dataRef, newData);
    route.refresh();
  };
  //
  return (
    <div>
      <div>api carculator</div>
      <button onClick={(e) => onClickIncrease(e)}>api increase</button>
      <button onClick={(e) => onClickDecreate(e)}>api decreate</button>
      <div>client carculator</div>
      <button onClick={(e) => onClickClientIecreate(e)}>client increase</button>
      <button onClick={(e) => onClickClientDecreate(e)}>client decreate</button>
    </div>
  );
}
