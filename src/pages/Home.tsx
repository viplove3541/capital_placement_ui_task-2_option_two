import React, { useState, useRef, useEffect } from "react";
import { Tabs, Layout, Col, Row } from "antd";
import ChartArea from "../components/ChartArea";
import OverviewArea from "../components/OverviewArea";
import HeaderTab from "../components/HeaderTab";
import { PieChartOutlined } from "@ant-design/icons";
import { Tour } from "antd";
import type { TourProps } from "antd";
import { Skeleton } from "antd";

const { Content } = Layout;
const { TabPane } = Tabs;

const Home = () => {
  // State to control the visibility of the tour
  const [open, setOpen] = useState<boolean>(false);
  // State to control the visibility of the skeleton loading
  const [openSkeleton, setSkeletonOpen] = useState<boolean>(true);

  // Refs to target elements for the tour
  const overviewRef = useRef(null);
  const chartRef = useRef(null);

  // Define tour steps
  const steps: TourProps["steps"] = [
    {
      title: "Chart Area",
      description:
        "See applications made and how it's been represented in the chart and table.",
      target: () => chartRef?.current,
    },
    {
      title: "Opportunity Overview",
      description: "See the analysis of application on each firm",
      cover: (
        <div>
          <h2 className="text-[14px] font-bold">
            Click on the icon on the top right corner and the sidebar to see
            full details of application on each firm. see Icon below.
          </h2>
          <PieChartOutlined className="text-[25px] mt-4 text-blue-600" />
        </div>
      ),
      target: () => overviewRef?.current,
    },
  ];

  // Use effect to control the tour and skeleton loading
  useEffect(() => {
    // Simulate loading with a timeout
    const skeletonTimer = setTimeout(() => {
      setSkeletonOpen(false);

      // Check if the tour has been completed before
      const tourCompleted = localStorage.getItem("tourCompleted");

      // If the tour has not been completed, open it
      if (!tourCompleted) {
        setOpen(true);
      }
    }, 1000);

    // Cleanup timer on unmount
    return () => {
      clearTimeout(skeletonTimer);
    };
  }, []);

  // Handle tour close event
  const handleTourClose = () => {
    // Mark the tour as completed
    localStorage.setItem("tourCompleted", "true");
    // Close the tour
    setOpen(false);
  };

  return (
    <div>
      <HeaderTab title="Opportunity Overview" color="#1D4ED8" />

      <Content
        style={{
          margin: "0px 0px",
          padding: "10px 25px",
          minHeight: 280,
          background: "#f5f5f5",
        }}
      >
        {openSkeleton ? (
          // Display skeleton loading while data is loading
          <div className="w-full  p-4">
            <Skeleton
              active
              paragraph={{ rows: 18 }} // Specify the number of rows
            />
          </div>
        ) : (
          // Display content once data is loaded
          <>
            <div ref={chartRef}>
              <ChartArea />
            </div>

            <div ref={overviewRef}>
              <OverviewArea />
            </div>
          </>
        )}

        {/* Display the tour component */}
        <Tour open={open} onClose={handleTourClose} steps={steps} />
      </Content>
    </div>
  );
};

export default Home;

