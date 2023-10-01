import React from "react";
import { Tabs, Layout } from "antd";
import ChartArea from "./ChartArea";
import OverviewArea from "./OverviewArea";

// Import necessary components from the Ant Design library
const { Content } = Layout;
const { TabPane } = Tabs;

// Define the ContentBox component
const ContentBox = () => {
  return (
    <Content
      style={{
        margin: "0px 0px",
        padding: "10px 25px",
        minHeight: 280,
        background: "#f5f5f5",
      }}
    >
      {/* Render the OverviewArea component */}
      <OverviewArea />
    </Content>
  );
};

// Export the ContentBox component
export default ContentBox;
