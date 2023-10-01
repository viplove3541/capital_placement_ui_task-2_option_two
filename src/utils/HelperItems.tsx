import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  PieChartOutlined,
  HeartOutlined,
} from "@ant-design/icons";

// Avatar URL for the user profile
export const AvatarUrlProfile =
  "https://png.pngtree.com/png-clipart/20230824/original/pngtree-chat-bot-icon-vector-picture-image_8418981.png";

// Sidebar items with icons
export const SidebarItems = [
  {
    key: "1",
    name: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    name: "Bank",
    icon: <UserOutlined />,
  },
  {
    key: "3",
    name: "Requests",
    icon: <CalendarOutlined />,
  },
  {
    key: "4",
    name: "Opportunity Hub",
    icon: <ShareAltOutlined />,
  },
  {
    key: "5",
    name: "Reports",
    icon: <BookOutlined />,
  },
  {
    key: "6",
    name: "Catalogs",
    icon: <PieChartOutlined />,
  },
  {
    key: "7",
    name: "Sharing",
    icon: <HeartOutlined />,
  },
];

// Define the structure of the categories
interface CategoriesType {
  title: string;
  value: string;
  subvalue: string;
  color: string;
  percent: string;
}

// Sample categories data
export const Categories: CategoriesType[] = [
  {
    title: "Applied",
    value: "13,988",
    subvalue: "2,332",
    color: "bg-teal-100",
    percent: "64",
  },
  {
    title: "Other",
    value: "8,012",
    subvalue: "6,564",
    color: "bg-gray-100",
    percent: "78",
  },
  {
    title: "Hired",
    value: "1,278",
    subvalue: "127",
    color: "bg-blue-100",
    percent: "19",
  },
];

// Sample categories data 2
export const Categories2: CategoriesType[] = [
  {
    title: "Recommended",
    value: "13,988",
    subvalue: "2,332",
    color: "bg-teal-100",
    percent: "64",
  },
  {
    title: "Interview",
    value: "8,012",
    subvalue: "6,564",
    color: "bg-gray-100",
    percent: "78",
  },
];

// Define the structure of overviews data
interface overviewsDataType {
  title: string;
  value: string;
}

// Sample overview data for Google
export const OverviewsGoogle: overviewsDataType[] = [
  {
    title: "Applied",
    value: "98",
  },
  {
    title: "Recommended",
    value: "57",
  },
  {
    title: "Interviewed",
    value: "39",
  },
  {
    title: "Other",
    value: "33",
  },
  {
    title: "Hired",
    value: "16",
  },
  {
    title: "Total Rejected",
    value: "60",
  },
];

// Sample overview data for Microsoft
export const OverviewsMicrosoft: overviewsDataType[] = [
  {
    title: "Applied",
    value: "102",
  },
  {
    title: "Recommended",
    value: "37",
  },
  {
    title: "Interviewed",
    value: "27",
  },
  {
    title: "Other",
    value: "17",
  },
  {
    title: "Hired",
    value: "12",
  },
  {
    title: "Total Rejected",
    value: "73",
  },
];

// Define the structure of overview data
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
  rejected: number;
}

// Sample overview data
export const OverviewData: OverviewDataType[] = [
  {
    key: "1",
    active: "Active",
    disqualified: "Disqualified",
    opportuinity: "Ux Internship",
    applied: 56,
    recommended: 3,
    interview: 18,
    other: 32,
    hired: 11,
    rejected: 12,
  },
  {
    key: "2",
    active: "Active",
    disqualified: "Didqualified",
    opportuinity: "Art Internship",
    applied: 20,
    recommended: 17,
    interview: 4,
    other: 3,
    hired: 1,
    rejected: 2,
  },
];

// Sample overview data for Microsoft
export const OverviewDataMicrosoft: OverviewDataType[] = [
  {
    key: "1",
    active: "Active",
    disqualified: "Disqualified",
    opportuinity: "Ux Internship",
    applied: 89,
    recommended: 56,
    interview: 26,
    other: 18,
    hired: 11,
    rejected: 67,
  },
  {
    key: "2",
    active: "Active",
    disqualified: "Didqualified",
    opportuinity: "Art Internship",
    applied: 129,
    recommended: 108,
    interview: 67,
    other: 29,
    hired: 16,
    rejected: 203,
  },
];
