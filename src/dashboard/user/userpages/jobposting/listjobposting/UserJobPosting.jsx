import React, { useEffect, useState } from 'react'
import '../listjobposting/UserJobPosting.css'
import axiosclient from '../../../../../api/Axios';
import Loading from '../../../../admin/components/Loading/Loading';
import { NavLink, useLocation } from 'react-router-dom';
import moment from "moment/moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const UserJobPosting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const currentLocation = useLocation(); // Đổi tên thành `currentLocation`
 // Danh sách công việc
  const [applications, setApplications] = useState([]); // Danh sách ứng viên
  const fetchDataApplication=async ()=>{
    try {
        const res=await axiosclient.get(`Applications/getlistapplications`);
        setApplications(res.data.data);
        console.log(res.data);
        
    } catch (error) {
        console.log(error);   
    }
  }
  useEffect(()=>{
    fetchdata();
    fetchDataApplication();
  },[]);

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

  const [jobListdata, setjoblist] = useState([]);

  // const countApplications = (jobID) => {
  //   return jobList.filter((app) => app.jobID === jobID).length;
  // };

  const fetchdata = async () => {
    try {
      const res = await axiosclient.get(`job/getlistjob`);
      console.log(res.data.data);
      setjoblist(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };



  if (isLoading) {
    return <Loading />;
  }

  // Mẫu dữ liệu danh sách nhân viên

  // Hàm xử lý trạng thái kích hoạt/tạm dừng
  const toggleStatus = (jobID) => {
    console.log(`Toggling status for ${jobID}`);
    // Cập nhật trạng thái của nhân viên dựa trên employeeID nếu cần
  };
  return (
    <div>
        <div className="admin-list">
        <h2>Job List</h2>
        <button className="add-employee-button">
          <NavLink
            className=" text-decoration-none text-white"
            to="/user/useraddjobposting"
          >
            Add New Job
          </NavLink>
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>jobID</th>
              <th>Job Number</th>
              <th>Job Title</th>
              <th>Quantity</th>
              <th>Job Description</th>
              <th>Account Status</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>employer Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobListdata.map((jobList) => (
              <tr key={jobList.jobID}>
                <td>{jobList.jobID}</td>
                <td>{jobList.jobNumber}</td>
                <td>{jobList.jobTitle} </td>
                <td><NavLink to="">{applications.filter((app) => app.jobPostings.jobID === jobList.jobID).length}</NavLink></td>
                <td>{jobList.jobDescription}</td>
                <td>{jobList.status}</td>
                <td>{moment(jobList.createdAt).format('DD/MM/YYYY')}</td>
                <td>{moment(jobList.updatedAt).format('DD/MM/YYYY')}</td>
                <td>{jobList.employers?.employerNumber}</td>
                <td>
                  <button className="action-btn edit-btn">
                    <NavLink
                      className="text-decoration-none"
                      to="/admin/editjobpsting"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </NavLink>
                  </button>
                  <button
                    className="action-btn status-btn"
                    onClick={() => toggleStatus(jobList.jobID)}
                  >
                    <FontAwesomeIcon
                      icon={jobList.status === "open" ? faEye : faEyeSlash}
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

export default UserJobPosting
