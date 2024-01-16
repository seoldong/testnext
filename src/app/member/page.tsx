"use client";
import { auth } from "@/lib/fb-config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Member = () => {
  const router = useRouter();

  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");

        fetch("/api/logout", {
          method: "POST",
        }).then((response) => {
          if (response.status === 200) {
            router.push("/");
          }
        });
      })
      .catch((error) => {
        console.log("error signing out");
      });
  };

  return (
    <>
      <h1>member page</h1>
      <button onClick={logOutHandler} className="bg-red-300 m-5">
        log out btn
      </button>
    </>
  );
};

export default Member;
