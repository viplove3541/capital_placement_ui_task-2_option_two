import React from "react";
import { Button, Col, Input, Row, Select, Space } from "antd";

// Import icons from Ant Design
import { SearchOutlined, InfoCircleOutlined } from "@ant-design/icons";

// Import other components and data
import OverviewDetails from "./OverviewDetails";
import {
  OverviewData,
  OverviewDataMicrosoft,
  OverviewsGoogle,
  OverviewsMicrosoft,
} from "../utils/HelperItems";

// Destructure Option from Select
const { Option } = Select;

// Define the OverviewArea component
const OverviewArea: React.FC = () => {
  return (
    <div className="mt-10">
      {/* Header */}
      <div className="header">
        <h1 className="text-[16px] font-semibold">
          Detailed Opportunity Overview
        </h1>
      </div>

      {/* Input Headers */}
      <div className="input-headers mt-5">
        {/* Row for input elements with gutter spacing */}
        <Row className="w-full " gutter={12}>
          {/* Column for search input */}
          <Col xs={24} sm={24} md={12} lg={14}>
            <div className="border-white justify-between bg-white flex items-center px-3 rounded-md">
              <div className="flex items-center w-full">
                <SearchOutlined className="text-[14px] opacity-40" />
                <Input placeholder="Search by employer name" />
              </div>
              <InfoCircleOutlined className="text-[14px] opacity-40" />
            </div>
          </Col>

          {/* Column for sorting select input */}
          <Col xs={24} sm={24} md={6} lg={5}>
            <Select
              defaultValue="Sort BY"
              style={{ width: "100%" }} // Adjusted width
            >
              <Option value="applied">Applied</Option>
              <Option value="recommended">Recommended</Option>
              <Option value="interview">Interview</Option>
              <Option value="other">Other</Option>
              <Option value="hired">Hired</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
          </Col>

          {/* Column for export button */}
          <Col xs={24} sm={24} md={6} lg={5}>
            <Button
              type="default"
              size="middle"
              className="w-full font-bold bg-white text-[#0557E5] border-white outline-none"
            >
              Export all as CSV
            </Button>
          </Col>
        </Row>
      </div>

      {/* Render OverviewDetails component for Microsoft */}
      <div className="mt-5">
        <OverviewDetails
          firm="Microsoft"
          data={OverviewsGoogle} // Replace with appropriate data
          applicationDetails={OverviewData}
        />
      </div>

      {/* Render OverviewDetails component for Google */}
      <div className="mt-5">
        <OverviewDetails
          firm="Google"
          data={OverviewsMicrosoft} // Replace with appropriate data
          applicationDetails={OverviewDataMicrosoft}
        />
      </div>
    </div>
  );
};

// Export the OverviewArea component
export default OverviewArea;
