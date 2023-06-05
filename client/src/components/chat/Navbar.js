"use client";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    auth.signOut();
    router.push("/login");
  };

  return (
    <div className="navbar">
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
