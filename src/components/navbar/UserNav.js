import {
  HistoryOutlined,
  KeyOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  const [current, setCurrent] = useState("1");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
      <Menu.Item key="1" icon={<HistoryOutlined />}>
        <Link key="1" to="/user/history">
          History
        </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<KeyOutlined />}>
        <Link key="2" to="/user/password">
          Password
        </Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UnorderedListOutlined />}>
        <Link key="3" to="/user/wishlist">
          Wishlist
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default UserNav;
