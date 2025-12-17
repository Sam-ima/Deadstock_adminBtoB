import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Dashboard from "../../pages/dashboard/dashboard";
// import DepartmentsPage from "../../pages/departmentPage";
// import PrimaryServiceIndex from "../../pages/servicesPage/primaryServices";
// import Index from "../../pages/servicesPage/consultationService";
// import SocialServiceIndex from "../../pages/servicesPage/socialService";
// import AuthoritiesIndex from "../../pages/authorities";
// import AnnouncementIndex from "../../pages/announcements";
// import PublicationsIndex from "../../pages/publications";
// import ResearchIndex from "../../pages/research";
// import NewsLetterIndex from "../../pages/newsletter";
// import GalleryIndex from "../../pages/gallery";
// import CitizenCharterIndex from "../../pages/citizenCharter";
// import ImageSliderIndex from "../../pages/imageSlider";
// import EnquiryIndex from "../../pages/contact";
// import ContactIndex from "../../pages/hospitalContact";
// import AboutUsIndex from "../../pages/aboutUs";
// import BedCountIndex from "../../pages/bedCount";
// import ExtraInfoIndex from "../../pages/extraInfo";
// import HospitalProfileIndex from "../../pages/hospitalProfile";

function PageContent({ pathname }) {
  const getPageContent = () => {
    switch (pathname) {
      case "/dashboard":
        return <Typography>Hello dashboard</Typography>;
      case "/departments":
        return  <Typography>Hello dashboard</Typography>;
      case "/services":
        return "Services Overview";
      case "/services/primary":
        return  <Typography>Hello dashboard</Typography>;
      case "/services/consultation":
        return  <Typography>Hello dashboard</Typography>;
      case "/services/social":
        return  <Typography>Hello dashboard</Typography>;
      case "/authorities":
        return  <Typography>Hello dashboard</Typography>;
      case "/publications":
        return  <Typography>Hello dashboard</Typography>;
      case "/announcements":
        return  <Typography>Hello dashboard</Typography>;
      case "/research":
        return  <Typography>Hello dashboard</Typography>;
      // case "/newsletter":
      //   return <NewsLetterIndex />;
      
      default:
        return "Page not found";
    }
  };

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        overflowX: "auto",
      }}
    >
      {getPageContent()}
    </Box>
  );
}

PageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default PageContent;
