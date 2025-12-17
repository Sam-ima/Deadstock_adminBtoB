import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CampaignIcon from "@mui/icons-material/Campaign";
import ScienceIcon from "@mui/icons-material/Science";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import GavelIcon from "@mui/icons-material/Gavel";
import BedIcon from '@mui/icons-material/Bed';
import InfoIcon from '@mui/icons-material/Info';
import { ContactPhone } from "@mui/icons-material";
import LogoImage from "../../assets/react.svg";
// import LogoutIcon from "@mui/icons-material/Logout";
import { createTheme } from "@mui/material";

export const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    segment: "departments",
    title: "Departments",
    icon: <ApartmentIcon />,
    path: "/departments",
  },
  {
    segment: "services",
    title: "Services",
    icon: <MedicalServicesIcon />,
    path: "/services",
    children: [
      {
        segment: "primary",
        title: "Primary Services",
        icon: <DescriptionIcon />,
        path: "/services/primary",
      },
      {
        segment: "consultation",
        title: "Consultation Services",
        icon: <PeopleAltIcon />,
        path: "/services/consultation",
      },
      {
        segment: "social",
        title: "Social Services",
        icon: <MenuBookIcon />,
        path: "/services/social",
      },
    ],
  },
  {
    segment: "authorities",
    title: "Authorities",
    icon: <PeopleAltIcon />,
    path: "/authorities",
  },
  {
    segment: "publications",
    title: "Publications",
    icon: <MenuBookIcon />,
    path: "/publications",
  },
  {
    segment: "announcements",
    title: "Announcements",
    icon: <CampaignIcon />,
    path: "/announcements",
  },
  {
    segment: "research",
    title: "Research",
    icon: <ScienceIcon />,
    path: "/research",
  },
];

export const BRANDING = {
  title: "MCVTC",
  logo: (
    <img
      src={LogoImage}
      alt="App Logo"
      style={{ height: "40px", borderRadius: "50%" }}
    />
  ),
};

export const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
});
