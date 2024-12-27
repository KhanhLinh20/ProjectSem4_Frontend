import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Loading from '../../../../admin/components/Loading/Loading';
import moment from "moment/moment";
import '../listapplication/UserApplication.css'
import axiosclient from '../../../../../api/Axios';


const UserApplication = () => {
     // Trạng thái để quản lý loading
  const [isLoading, setIsLoading] = useState(false);
  const currentLocation = useLocation(); // Đổi tên thành `currentLocation`

  useEffect(() => {
    // Bật trạng thái loading khi đường dẫn thay đổi
    setIsLoading(true);

    // Tắt loading sau một khoảng thời gian ngắn
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Thời gian chờ cho loading, có thể điều chỉnh

    // Clear timeout nếu người dùng điều hướng nhanh chóng
    return () => clearTimeout(timer);
  }, [currentLocation.pathname]);
  // Khi đang loading, chỉ hiển thị Loading component, không render nội dung trang


  const[Applications,setIsApplicantions]=useState([]);
  const fetchdata=async ()=>{
    try {
        const res=await axiosclient.get(`Applications/getlistapplications`);
        setIsApplicantions(res.data.data);

        
    } catch (error) {
        console.log(error);
        
        
    }

  }
  useEffect(()=>{
    fetchdata();
  },[]);


   if (isLoading) {
    return <Loading />;
  }
 
  // Hàm xử lý trạng thái kích hoạt/tạm dừng
  const toggleStatus = (Applications) => {
    console.log(`Toggling status for ${Applications}`);
    // Cập nhật trạng thái của nhân viên dựa trên employeeID nếu cần
  };
  return (
    <div>
        <div className="admin-list">
        <h2>Applications List</h2>
        <button className="add-employee-button">
          <NavLink
            className=" text-decoration-none text-white"
            to="/admin/addApplications"
          >
            Add New Applications
          </NavLink>
        </button>
        <table className="table">
          <thead>
            <tr>

              <th>application Number</th>
              <th>last Name</th>
              <th>Email</th>
              <th>date Of Birth</th>
              <th>phone Number</th>
              <th>language Level</th>
              <th>job Source</th>
              <th>current Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Applications.map((item) => (
              <tr key={item.applicationID}>
         
                <td>{item.applicationNumber}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{moment(item.dateOfBirth).format("DD/MM/YYYY") }</td>
                <td>{item.phoneNumber}</td>
                <td>{item.languageLevel}</td>
                <td>{item.jobSource}</td>
                <td>{item.currentCompany}</td>
           
                <td>
                  <button className="action-btn edit-btn">
                    <NavLink
                      className="text-decoration-none"
                      to="/admin/editemployee"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </NavLink>
                  </button>
                  <button
                    className="action-btn status-btn"
                    onClick={() => toggleStatus(Applications)}
                  >
                    <FontAwesomeIcon
                      icon={Applications.status === "Active" ? faEye : faEyeSlash}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default UserApplication
