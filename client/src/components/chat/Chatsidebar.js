import React from "react";
import Navbar from "./Navbar";

import Chats from "./Chats";
import Search from "./Search";

const Chatsidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Chatsidebar;
