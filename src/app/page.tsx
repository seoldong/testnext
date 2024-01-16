"use client";
import { getRedirectResult, signInWithRedirect, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth, provider } from "../lib/fb-config";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if(!userCred){return;}
      const token = await userCred.user.getIdToken();
      const url = "/api/login";
      const option = {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log(option);
      

      fetch(url, option)
      .then((res) => {
        if (res.status === 200) {
          router.push("/member");
        }
      })
    })
  }, [router])

  const loginHandler = async () => {
    signInWithRedirect(auth, provider).catch((error) => {
      console.error(error);
    });
  };

  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");

        // fetch("/api/logout", {
        //   method: "POST",
        // }).then((response) => {
        //   if (response.status === 200) {
        //     router.push("/");
        //   }
        // });
      })
      .catch((error) => {
        console.log("error signing out");
      });
  };

  return (
    <div>
      <h1>hello world</h1>
      <button onClick={loginHandler}> {"login In With Google"}</button>
      <button onClick={logOutHandler} className="bg-red-300 m-5">
        log out btn
      </button>
    </div>
  );
}
