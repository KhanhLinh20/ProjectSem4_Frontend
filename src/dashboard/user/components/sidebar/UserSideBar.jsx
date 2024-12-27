import React, { useEffect, useState } from 'react'
import '../sidebar/UserSideBar.css'
import { NavLink } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const UserSideBar = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    // const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isApplicant, setIsApplicantOpen] = useState(false);
    const [isInterview, setIsInterview] = useState(false);
    const [user, setUser] = useState(false);
    const token = localStorage.getItem("token");
    useEffect(() => {
      if (token) {
        const jwt = jwtDecode(token);
        setUser({
          fristname: jwt.firstName,
          lastname: jwt.lastName,
          role: jwt.role,
        });
      }
    }, [token]);
    // Hàm để toggle mở/đóng các thư mục con
    const toggleDashboard = () => setIsDashboardOpen(!isDashboardOpen);
    const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen);
    // const toggleUsers = () => setIsUsersOpen(!isUsersOpen);
    const toggleApplicant = () => setIsApplicantOpen(!isApplicant);
    const toggleInterview = () => setIsInterview(!isInterview);
  return (
    <div>
         <aside className="sidebar">
      {/* Phần avatar và tên người dùng - phần cố định */}
      <div className="sidebar-profile text-white text-center p-3">
        <img
          src="https://via.placeholder.com/80"
          alt="Admin Avatar"
          className="rounded-circle mb-2"
          style={{ width: "80px", height: "80px" }}
        />
        <h5 className="m-0">
          {user.fristname} {user.lastname}
        </h5>
      </div>

      {/* Phần menu có thể cuộn */}
      <div className="sidebar-menu">
        <nav className="sidebar-nav">
          <ul className="list-unstyled">
            {/* Mục Dashboard với thư mục con */}
            <li>
              <NavLink
                to="/admin/"
                className="d-flex align-items-center sidebar-item"
              >
                <i className="bi bi-speedometer2 me-2"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            {/* Mục Users với thư mục con */}
            {/* <li>
              <div
                className="d-flex align-items-center sidebar-item"
                onClick={toggleUsers}
              >
                <i className="bi bi-people me-2"></i>
                <span>Users Management</span>
                <i
                  className={`bi ms-auto ${
                    isUsersOpen ? "bi-chevron-down" : "bi-chevron-right"
                  }`}
                ></i>
              </div>
           
              <ul
                className={`submenu list-unstyled ${isUsersOpen ? "show" : ""}`}
              >
                <li>
                  <NavLink
                    to="/admin/employee"
                    className={({ isActive }) =>
                      isActive ? "custom-active-link" : "default-link"
                    }
                  >
                    User
                  </NavLink>
                </li>
              </ul>
            </li> */}
            <li>
              <div
                className="d-flex align-items-center sidebar-item"
                onClick={toggleProjects}
              >
                <i className="bi bi-kanban me-2"></i>
                <span>Jobs Management</span>
                <i
                  className={`bi ms-auto ${
                    isProjectsOpen ? "bi-chevron-down" : "bi-chevron-right"
                  }`}
                ></i>
              </div>
              {/* Thư mục con của Projects */}
              <ul
                className={`submenu list-unstyled ${
                  isProjectsOpen ? "show" : ""
                }`}
              >
                <li>
                  <NavLink
                    to="/user/jobposting"
                    className={({ isActive }) =>
                      isActive ? "custom-active-link" : "default-link"
                    }
                  >
                    Jobs
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/admin/JobCategory"
                    className={({ isActive }) =>
                      isActive ? "custom-active-link" : "default-link"
                    }
                  >
                    Categories
                  </NavLink>
                </li> */}
              </ul>
            </li>
            <li>
              <div
                className="d-flex align-items-center sidebar-item"
                onClick={toggleApplicant}
              >
                <i className="bi bi-kanban me-2"></i>
                <span>Applications</span>
                <i
                  className={`bi ms-auto ${
                    isApplicant ? "bi-chevron-down" : "bi-chevron-right"
                  }`}
                ></i>
              </div>
              {/* Thư mục con của Projects */}
              <ul
                className={`submenu list-unstyled ${isApplicant ? "show" : ""}`}
              >
                <li>
                  <NavLink
                    to="/user/application"
                    className={({ isActive }) =>
                      isActive ? "custom-active-link" : "default-link"
                    }
                  >
                    Applications List
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div
                className="d-flex align-items-center sidebar-item"
                onClick={toggleInterview}
              >
                <i className="bi bi-kanban me-2"></i>
                <span>Inter View</span>
                <i
                  className={`bi ms-auto ${
                    isInterview ? "bi-chevron-down" : "bi-chevron-right"
                  }`}
                ></i>
              </div>
              {/* Thư mục con của Projects */}
              <ul
                className={`submenu list-unstyled ${isInterview ? "show" : ""}`}
              >
                <li>
                  <NavLink
                    to="/admin/applicationwithowinterview"
                    className={({ isActive }) =>
                      isActive ? "custom-active-link" : "default-link"
                    }
                  >
                    List Application Withow Interview
                  </NavLink>
                </li>
              </ul>
              <ul
                className={`submenu list-unstyled ${isInterview ? "show" : ""}`}
              >
                <li>
                  <NavLink
                    to="/admin/interview"
                    className={({ isActive }) =>
                      isActive ? "custom-active-link" : "default-link"
                    }
                  >
                    Inter View List
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Các mục khác */}
            <li className="sidebar-item">
              <i className="bi bi-chat-left-text me-2"></i> Comments
            </li>
            <li className="sidebar-item">
              <i className="bi bi-graph-up me-2"></i> Stats
            </li>
          </ul>
        </nav>
      </div>
    </aside>
      
    </div>
  )
}

export default UserSideBar
