"use client";

import Image from "next/image";
import Login from "./login_flow/page";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[375px] h-[90vh] relative overflow-hidden">
          <Login />
        </div>
      </div>
    </>
  );
}
