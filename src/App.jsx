import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayoutBasic from "./components/drawer/dashboardMain";
import { SearchProvider } from "./context/searchbar/searchContext";
import { SnackbarProvider } from "./context/snackbar/snackbarContext";
// import DepartmentsPage from "./pages/departmentPage";
// import PrimaryServiceIndex from "./pages/servicesPage/primaryServices";
// import ConsultationServiceIndex from "./pages/servicesPage/consultationService";
// import SocialServiceIndex from "./pages/servicesPage/socialService";
// import AuthoritiesIndex from "./pages/authorities";
// import AnnouncementIndex from "./pages/announcements";
// import PublicationsIndex from "./pages/publications";
// import ResearchIndex from "./pages/research";
// import NewsLetterIndex from "./pages/newsletter";
// import GalleryIndex from "./pages/gallery";
// import CitizenCharterIndex from "./pages/citizenCharter";
// import { SnackbarProvider } from "./context/snackbarContext";
// import AdminLogin from "./components/login/authContext";
// import ProtectedRoute from "./components/login/protectedRoute";

function App() {
  return (
    <>
      <SearchProvider>
        <SnackbarProvider>
          <Router>
            <Routes>
              {/* Public routes */}
              {/* <Route path="/login" element={<AdminLogin />} /> */}

              {/* Protected routes */}
              <Route
                path="/dashboard"
                element={
                  // <ProtectedRoute>
                    <DashboardLayoutBasic />
                  // </ProtectedRoute>
                }
              >
                {/* Nested routes for dashboard layout */}
                {/* <Route index element={<Navigate to="/dashboard" replace />} /> */}
                
                {/* <Route path="departments" element={<DepartmentsPage />} /> */}
                {/* <Route
                  path="services/primary"
                  element={<PrimaryServiceIndex />}
                />
                <Route
                  path="services/consultation"
                  element={<ConsultationServiceIndex />}
                />
                <Route
                  path="services/social"
                  element={<SocialServiceIndex />}
                />
                <Route path="authorities" element={<AuthoritiesIndex />} />
                <Route path="publications" element={<PublicationsIndex />} />
                <Route path="announcements" element={<AnnouncementIndex />} />
                <Route path="research" element={<ResearchIndex />} />
                <Route path="newsletter" element={<NewsLetterIndex />} />
                <Route path="gallery" element={<GalleryIndex />} />
                <Route
                  path="citizenCharter"
                  element={<CitizenCharterIndex />}
                /> */}
              </Route>

              {/* Redirect unknown routes to login */}
              {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
            </Routes>
          </Router>
        </SnackbarProvider>
      </SearchProvider>
    </>
  );
}

export default App;
