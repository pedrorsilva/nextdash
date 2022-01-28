import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link btn"
            onClick={(event) => {
              router.push("/dashboard");
            }}
          >
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link btn"
            onClick={(event) => {
              router.push("/chat");
            }}
          >
            <i className="icon-cog menu-icon"></i>
            <span className="menu-title">Chat</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
