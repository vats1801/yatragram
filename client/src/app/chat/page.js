import Sidebar from "@/components/Sidebar";
import Chat from "@/components/chat/Chat";
import Chatsidebar from "@/components/chat/Chatsidebar";

import React from "react";

export default function page() {
  return (
    <div className=" flex">
      <Sidebar />

      <div className="home flex-1">
        <div className="container">
          <Chatsidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
}
