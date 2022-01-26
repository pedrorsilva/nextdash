import Footer from "../_components/footer";
import Header from "../_components/header";

import Sidebar from "../_components/sidebar";

const DashboardLayout = ({ children }) => (
  <>
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />

        <div className="main-panel">
          <div className="content-wrapper">{children}</div>

          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default DashboardLayout;
