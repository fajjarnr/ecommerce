import {
  AppstoreOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import firebase from "firebase";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  // let { user } = useSelector((state) => ({ ...state }));
  const user = useSelector((state) => state.user);

  let dispatch = useDispatch();
  let history = useHistory();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <div className="header">
        {!user && (
          <Item
            key="register"
            icon={<UserAddOutlined />}
            className="float-right"
          >
            <Link to="/register">Register</Link>
          </Item>
        )}

        {!user && (
          <Item key="login" icon={<UserOutlined />} className="float-right">
            <Link to="/login">Login</Link>
          </Item>
        )}

        {user && (
          <SubMenu
            icon={<SettingOutlined />}
            title={user.email && user.email.split("@")[0]}
            className="float-right"
            key="dropDown"
          >
            {user && user.role === "subscriber" && (
              <Item key="dashboard">
                <Link to="/user/history">Dashboard</Link>
              </Item>
            )}

            {user && user.role === "admin" && (
              <Item key="dashboard">
                <Link to="/admin/dashboard">Dashboard</Link>
              </Item>
            )}

            <Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
              Logout
            </Item>
          </SubMenu>
        )}
      </div>
    </Menu>
  );
};

export default Header;
