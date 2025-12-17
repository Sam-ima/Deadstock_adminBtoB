import PropTypes from "prop-types";
import AppWrapper from "./appWrapper";
import DashboardContent from "./dashboardContent";

function DashboardLayoutBasic(props) {
  return (
    <AppWrapper>{(router) => <DashboardContent router={router} />}</AppWrapper>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;