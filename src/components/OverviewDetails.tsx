import React from "react";
import { PieChartOutlined, FileDoneOutlined } from "@ant-design/icons";
import { Col, Row, Space, Table, Tag } from "antd";
import { Link } from "react-router-dom";
const { Column } = Table;

// Define the props interface for OverviewDetails component
interface props {
  firm: string;
  data: any[];
  applicationDetails: any[];
}

// Define the OverviewDetails functional component
const OverviewDetails: React.FC<props> = ({
  firm,
  data,
  applicationDetails,
}) => {
  // Define the data structure for each overview item
  interface OverviewDataType {
    key: React.Key;
    opportuinity: string;
    active: string;
    disqualified: string;
    applied: number;
    recommended: number;
    interview: number;
    other: number;
    hired: number;
  }

  return (
    <div className="p-5 bg-white shadow-md rounded-md mt-0 w-full ">
      {/* Header section with firm name and icons */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold opacity-75">{firm}</h1>
        <div className="flex space-x-2 items-center opacity-50">
          <Link to={`info/${firm}`}>
            <div className="border px-3 py-2 rounded-md shadow-sm hover:cursor-pointer hover:shadow-none shadow-gray-400">
              <PieChartOutlined className="text-[15px]" />
            </div>
          </Link>
          <div className="border px-3 py-2 rounded-md shadow-sm hover:cursor-pointer hover:shadow-none shadow-gray-400">
            <FileDoneOutlined className="text-[15px]" />
          </div>
        </div>
      </div>

      {/* Overview data section */}
      <div className="mt-10">
        <Row className=" w-full" gutter={24}>
          {data.map((overview, index) => (
            <Col key={index} xs={24} sm={12} md={4} lg={4} xl={4}>
              <div
                className="  p-4 shadow-sm rounded-md shadow-gray-400 hover:cursor-pointer hover:shadow-xs"
                style={{
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid #fafafa",
                }}
              >
                <h2 className="font-bold text-[14px] mb-3">{overview.title}</h2>
                <h4 className="font-bold text-[12px] opacity-80">
                  {overview.value}
                </h4>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Application details table */}
      <div className="mt-5">
        <Table dataSource={applicationDetails}>
          <Column
            title="Opportunity Name"
            dataIndex="opportuinity"
            key="opportuinity"
          />
          <Column title="Applied" dataIndex="applied" key="applied" />
          <Column
            title="Recommended"
            dataIndex="recommended"
            key="recommended"
          />
          <Column title="Interviewed" dataIndex="interview" key="interview" />
          <Column title="Other" dataIndex="other" key="other" />
          <Column title="Hired" dataIndex="hired" key="hired" />
          <Column title="Total Rejected" dataIndex="rejected" key="rejected" />
        </Table>
      </div>
    </div>
  );
};

export default OverviewDetails;

