"use client";
import { auth } from '@/library/fb-config';
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Logoutbtn() {
  const router = useRouter();
  const onClickLogout = async () => {
    await signOut(auth);
    router.refresh();
    router.push("/");
  };

  return <button onClick={(e) => onClickLogout(e)}>log out</button>;
}
