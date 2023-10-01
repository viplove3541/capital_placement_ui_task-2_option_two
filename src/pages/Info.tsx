import React, { useState, useRef } from "react";
import { Tabs, Layout } from "antd";
import ChartArea from "../components/ChartArea";
import OverviewArea from "../components/OverviewArea";
import HeaderTab from "../components/HeaderTab";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Tour } from "antd";
import type { TourProps } from "antd";
import { useParams } from "react-router-dom";
const { Content } = Layout;

const Home = () => {
  // Get the 'firm' parameter from the URL
  const { firm } = useParams();

  // State to control the visibility of the tour
  const [open, setOpen] = useState<boolean>(false);

  // Refs to target elements for the tour
  const appliedRef = useRef(null);
  const hiredRef = useRef(null);
  const chartRef = useRef(null);

  // Define tour steps
  const steps: TourProps["steps"] = [
    {
      title: "Upload File",
      description: "Put your files here.",
      // Cover image for the step
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      // Target the appliedRef element
      target: () => appliedRef?.current,
    },
    {
      title: "Save",
      description: "Save your changes.",
      // Target the hiredRef element
      target: () => hiredRef?.current,
    },
    {
      title: "Other Actions",
      description: "Click to see other actions.",
      // Target the chartRef element
      target: () => chartRef?.current,
    },
  ];

  return (
    <>
      {/* HeaderTab component with a dynamic title */}
      <HeaderTab title={`Program Overview ${firm}`} color="#000" />
      {/* Content section */}
      <Content
        style={{
          margin: "0px 0px",
          padding: "10px 25px",
          minHeight: 280,
          background: "#f5f5f5",
        }}
      >
        {/* Display two instances of the ChartArea component */}
        <ChartArea />
        <ChartArea />
      </Content>
    </>
  );
};

export default Home;
