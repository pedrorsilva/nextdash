import Image from "next/image";
import DashboardLayout from "./_layouts/dashboad";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card tale-bg">
          <div className="card-people mt-auto">
            <Image
              src={require("../assets/img/dashboard/people.svg")}
              alt="people"
            />
            <div className="weather-info">
              <div className="d-flex">
                <div>
                  <h2 className="mb-0 font-weight-normal">
                    <i className="icon-sun me-2"></i>31<sup>C</sup>
                  </h2>
                </div>
                <div className="ms-2">
                  <h4 className="location font-weight-normal">São Paulo</h4>
                  <h6 className="font-weight-normal">São Paulo</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 grid-margin transparent">
        <div className="row">
          <div className="col-md-6 mb-4 stretch-card transparent">
            <div className="card card-tale">
              <div className="card-body">
                <p className="mb-4">Mensagens diárias</p>
                <p className="fs-30 mb-2">4006</p>
                <p>10.00% (30 dias)</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 stretch-card transparent">
            <div className="card card-dark-blue">
              <div className="card-body">
                <p className="mb-4">Total de conversas</p>
                <p className="fs-30 mb-2">40</p>
                <p>22.00% (30 dias)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
            <div className="card card-light-blue">
              <div className="card-body">
                <p className="mb-4">Novas conexões</p>
                <p className="fs-30 mb-2">5</p>
                <p>2.00% (30 dias)</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card transparent">
            <div className="card card-light-danger">
              <div className="card-body">
                <p className="mb-4">Tamanho do backup</p>
                <p className="fs-30 mb-2">1Gb</p>
                <p>0.22% (30 dias)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.layout = DashboardLayout;

export default Dashboard;
