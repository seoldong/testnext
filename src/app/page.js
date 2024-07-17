'use client'
import { auth } from "@/library/fb-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function LogInBtn() {
  const [id, setId] = useState("qwe@mail.com");
  const [pw, setPw] = useState("qweasdzxc");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const signCheck = onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        setMsg("logIn");
      } else {
        setMsg("logOut");
      }
    });
    return () => signCheck();
  }, []);

  const onClickLogin = async (e) => {
    e.preventDefault();
    const logIn = await signInWithEmailAndPassword(auth, id, pw);
  };

  const onClickCreateAccount = async (e) => {
    e.preventDefault();
    const cac = await createUserWithEmailAndPassword(auth, id, pw);
  };

  return (
    <div>
      <div>
        <input type='email' value={id} onChange={e => setId(e.target.value)} />
        <input type='text' value={pw} onChange={e => setPw(e.target.value)} />
        <button onClick={(e) => onClickLogin(e)}>log in</button>
      </div>
      <div>
        <input type='email' value={id} onChange={e => setId(e.target.value)} />
        <input type='text' value={pw} onChange={e => setPw(e.target.value)} />
        <button onClick={(e) => onClickCreateAccount(e)}>create ac</button>
      </div>
      {msg === "logIn" ? <div>{`- success lon in -`}</div> : ""}
    </div>
  );
}
