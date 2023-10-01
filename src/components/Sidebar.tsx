import { useState } from "react";
import {
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar } from "antd";
import { AvatarUrlProfile, SidebarItems } from "../utils/HelperItems";
import { Link } from "react-router-dom";
const { Sider } = Layout;

// Define the SidebarProps interface
interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

// Define the Sidebar functional component
const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ position: "sticky", top: 0 }}
      className="w-[80%] flex flex-col justify-between relative"
    >
      {/* Menu */}
      <Menu
        theme="light"
        mode="inline"
        className="h-screen"
        defaultSelectedKeys={["2"]}
      >
        {/* Avatar */}
        <div
          style={{
            marginBottom: "25px",
            marginTop: "25px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Avatar
            className="bg-[#D7E5FD] text-[#B1CDFD] cursor-pointer hover:bg-[#B1CDFD] hover:text-[#D7E5FD]"
            src={AvatarUrlProfile}
          />
        </div>

        {/* Sidebar items */}
        {SidebarItems.map((item) => (
          <Menu.Item
            key={item.key}
            style={{ fontSize: 12 }}
            icon={item.icon}
            defaultValue={item.key}
          >
            <Link
              to={
                item.name === "Dashboard"
                  ? "/"
                  : item.name === "Catalogs"
                  ? "/info/Google"
                  : ""
              }
            >
              {item.name}
            </Link>
          </Menu.Item>
        ))}

        {/* Toggle button */}
        <Menu.Item
          icon={
            collapsed ? (
              <LeftOutlined onClick={() => setCollapsed(!collapsed)} />
            ) : (
              <RightOutlined onClick={() => setCollapsed(!collapsed)} />
            )
          }
          style={{ marginTop: 16, marginBottom: 10 }}
        ></Menu.Item>

        {/* Settings */}
        <Menu.Item
          key="9"
          icon={<SettingOutlined />}
          style={{ position: "absolute", bottom: "75px" }}
        >
          Settings
        </Menu.Item>

        {/* VK Avatar */}
        <div
          key="9"
          style={{
            bottom: "25px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Avatar
            className="bg-[#D7E5FD] text-[#B1CDFD] cursor-pointer hover:bg-[#B1CDFD] hover:text-[#D7E5FD]"
            style={{ position: "absolute", bottom: "25px" }}
          >
            VK
          </Avatar>
        </div>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
