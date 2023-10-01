import React from "react";
import { Col, Progress, Row } from "antd";
import { LineChartOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { Categories, Categories2 } from "../utils/HelperItems";
import LineGraph from "./LineGraph";
import TableGraph from "./TableGraph";

// Define a functional component called ChartArea
const ChartArea: React.FC = () => {
  return (
    <div className="">
      {/* Create a row with gutter spacing */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={14}>
          {/* Left column */}
          <div className="">
            <Row gutter={8}>
              {/* Map through Categories and render data */}
              {Categories.map((category) => (
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <div className="p-5 bg-white rounded-md shadow-md mb-5">
                    <h2 className="text-sm font-semibold mb-2">
                      {category.title}
                    </h2>
                    <h1 className="font-bold text-md mb-1">{category.value}</h1>
                    <p className="text-[10px] text-gray-600 mb-2">
                      Previous Period
                    </p>

                    <div className="flex space-x-1 items-center">
                      <h6 className="text-[9px]">{category.subvalue}</h6>
                      <div
                        className={`flex items-center ${category.color} p-1 rounded-md`}
                      >
                        <LineChartOutlined className="text-[7px]" />{" "}
                        <span className="text-[7px]">{category.percent}%</span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Render a LineGraph component */}
            <div className="p-5 bg-white shadow-md rounded-md mt-0 w-full">
              <LineGraph />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={10}>
          {/* Right column */}
          <div className="bg-white rounded-md shadow-md p-5">
            <h3 className="font-semibold text-sm">Total Candidate flow</h3>
            <h5 className="font-bold my-3">4,567</h5>

            {/* Render a Progress component */}
            <Progress
              percent={30}
              showInfo={false}
              size="small"
              strokeColor="#D0F2CA"
              trailColor="#FFE0E0"
            />
            <div className="flex items-center space-x-1">
              <CheckSquareOutlined className="text-[10px] bg-[#D0F2CA]" />
              <span className="text-[12px]">Qualified</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckSquareOutlined className="text-[10px] bg-[#FFE0E0]" />
              <span className="text-[12px]">Disqualified</span>
            </div>
          </div>

          <div className="mt-8">
            {/* Render a TableGraph component */}
            <TableGraph />

            <Row gutter={8}>
              {/* Map through Categories2 and render data */}
              {Categories2.map((category) => (
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="p-5 bg-white rounded-md shadow-md mb-5 mt-5">
                    <div className="flex justify-between items-center">
                      <h2 className="text-sm font-semibold mb-2">
                        {category.title}
                      </h2>
                      <h1 className="font-bold text-md mb-1">
                        {category.value}
                      </h1>
                    </div>
                    <p className="text-[10px] text-gray-600 mb-2">
                      Previous Period
                    </p>

                    <div className="flex space-x-1 items-center">
                      <h6 className="text-[9px]">{category.subvalue}</h6>
                      <div
                        className={`flex items-center ${category.color} p-1 rounded-md`}
                      >
                        <LineChartOutlined className="text-[7px]" />{" "}
                        <span className="text-[7px]">{category.percent}%</span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

// Export the ChartArea component
export default ChartArea;
