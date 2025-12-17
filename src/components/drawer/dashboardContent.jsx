import PropTypes from "prop-types";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import PageContent from "./pageContent";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import SearchBar from "../../context/searchbar/searchbar";
import Profile from "./profilePage";

function DashboardContent({ router }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const storedData = localStorage.getItem("adminData");
  let adminData = null;

  try {
    adminData = storedData ? JSON.parse(storedData) : null;
  } catch (e) {
    console.error("Invalid JSON in localStorage:", e);
    adminData = null;
  }

  // Default pathname to /dashboard if empty
  const pathname = router.pathname === "/" ? "/dashboard" : router.pathname;

  // Toolbar with SearchBar + ThemeSwitcher + Account
  function ToolbarActions() {
    return (
      <Stack direction="row" spacing={1} alignItems="center">
        <SearchBar />
        <ThemeSwitcher />
        <Profile />
      </Stack>
    );
  }

  return (
    <DashboardLayout
      onNavigation={handleNavigation}
      slots={{ toolbarActions: ToolbarActions }}
    >
      <PageContent pathname={pathname} />
    </DashboardLayout>
  );
}

DashboardContent.propTypes = {
  router: PropTypes.object.isRequired,
};

export default DashboardContent;
