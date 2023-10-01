import React from "react";
import { Layout, Select } from "antd";

// Destructure Layout components
const { Header } = Layout;

// Define an interface for title and color
interface titleDescription {
  title: string;
  color: string;
}

// Define the HeaderTab component
const HeaderTab: React.FC<titleDescription> = ({ title, color }) => {
  return (
    <Header
      style={{
        background: "#f5f5f5",
        padding: "0px 25px",
        borderBottom: "1px solid #f5fafa",
      }}
    >
      <div className="flex justify-between items-center">
        {/* Render the title with specified color */}
        <h1 className="font-semibold text-[15px]" style={{ color }}>
          {title}
        </h1>

        {/* Render select elements for program and date selection */}
        <div className="space-x-16 opacity-60 sm:flex hidden items-center">
          {/* Program selection */}
          <select
            name=""
            id=""
            className="border-none w-[60%] bg-[#f5f5f5] p-2 outline-none"
          >
            <option value="">American Internship Program</option>
            <option value="">African Internship Program</option>
            <option value="">Singapore Internship Program</option>
            <option value="">Asian Internship Program</option>
            <option value="">Austria Internship Program</option>
          </select>

          {/* Date selection */}
          <div className="flex space-x-0 items-center w-[60%]">
            <select
              name=""
              id=""
              className="border-none w-[70%] bg-[#f5f5f5] p-2 outline-none"
            >
              <option value="" selected>
                30/09/2023
              </option>
              <option value="">03/10/2023</option>
            </select>
            <select
              name=""
              id=""
              className="border-none w-[70%] bg-[#f5f5f5] p-2 outline-none"
            >
              <option value="" selected>
                September, 2023
              </option>
              <option value="">October, 2022</option>
            </select>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderTab;
