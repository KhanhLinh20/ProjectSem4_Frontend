import React, { useEffect, useState } from "react";
import "../addjobposting/UserAddJobPosting.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axiosclient from "../../../../../api/Axios";

const UserAddJobPosting = () => {
  const [jobtitle, setJobTitle] = useState("");
  const [requiredments, setRequirements] = useState("");
  const [location, setLocation] = useState("");
  const [salarymin, setSalaryMin] = useState("");
  const [salarymax, setSalaryMax] = useState("");
  const [employmenttype, setEmploymentType] = useState("");
  const [experiencedlevel, setExperiencedLevel] = useState("");
  const [closingdate, setClosingDate] = useState("");
  const [jobdescription, setJobDescription] = useState("");
  const [status, setStatus] = useState("");
  const [categoryid, setCategoryId] = useState("");
  const [category, setCategory] = useState([]);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);
  console.log(decode);

  const onsubmit = async (eve) => {
    eve.preventDefault();
    try {
      let isOk = true;

      if (!categoryid) {
        setErrors((prev) => {
          return { ...prev, category: "* Category must be selected" };
        });
        isOk = false;
      } else {
        setErrors((prev) => {
          return { ...prev, category: null };
        });
      }

      if (!status) {
        setErrors((prev) => {
          return { ...prev, status: "* Status must be selected" };
        });
        isOk = false;
      } else {
        setErrors((prev) => {
          return { ...prev, status: null };
        });
      }

      if (isOk) {
        const formdata = new FormData();
        formdata.append("JobTitle", jobtitle);
        formdata.append("Requirements", requiredments);
        formdata.append("Location", location);
        formdata.append("SalaryMin", salarymin);
        formdata.append("SalaryMax", salarymax);
        formdata.append("EmploymentType", employmenttype);
        formdata.append("ExperiencedLevel", experiencedlevel);
        formdata.append("ClosingDate", closingdate);
        formdata.append("JobDescription", jobdescription);
        formdata.append("Status", status);
        formdata.append("employerID", decode.id);
        formdata.append("CategoryID", categoryid);
        const res = await axiosclient.post("/job/createjobPosting", formdata);
        console.log(res.data);

        navigate("/admin/JobList");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchdatacategory = async () => {
    try {
      const res = await axiosclient.get(`/job/getcategoryjob`);
      setCategory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdatacategory();
    console.log(decode.id);
    console.log(categoryid);
  }, []);
  return (
    <div>
      <div className="add-employee-container">
        <h2>Add New Job</h2>
        <form className="add-employee-form" onSubmit={onsubmit}>
          {/* <div className="form-group">
            <label>Job Number</label>
            <input
              type="text"
              name="JobNumber"
              value={jobnumber}
              onChange={(e) => setJobNumber(e.target.value)}
              placeholder="JP-xxxx"
              required
            />
            {jobnumbererror && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {jobnumbererror}
              </span>
            )}
          </div> */}

          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="JobTitle"
              value={jobtitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Requirements</label>
            <input
              type="text"
              name="Requirements"
              value={requiredments}
              onChange={(e) => setRequirements(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Salary Min</label>
            <input
              type="number"
              name="SalaryMin"
              value={salarymin}
              onChange={(e) => setSalaryMin(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Salary Max</label>
            <input
              type="number"
              name="SalaryMax"
              value={salarymax}
              required
              onChange={(e) => setSalaryMax(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>EmploymentType</label>
            <input
              type="text"
              name="EmploymentType"
              value={employmenttype}
              required
              onChange={(e) => setEmploymentType(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>ExperiencedLevel</label>
            <input
              type="text"
              name="ExperiencedLevel"
              value={experiencedlevel}
              required
              onChange={(e) => setExperiencedLevel(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>ClosingDate</label>
            <input
              type="date"
              name="ClosingDate"
              value={closingdate}
              required
              onChange={(e) => setClosingDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              type="text"
              name="JobDescription"
              cols={56}
              required
              value={jobdescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {errors.status && <p style={{ color: "red" }}>{errors.status}</p>}

          <div className="form-group">
            <label>Category Name</label>
            <select
              name="CategoryID"
              value={categoryid}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option>Select Category JobPosting</option>
              {category?.map((cate, index) => (
                <option key={index} value={cate.categoryID}>
                  {cate.categoryName}
                </option>
              ))}
            </select>
          </div>
          {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}

          <div className="button-group">
            <button type="button" className="back-button">
              Back
            </button>
            <button type="submit" className="submit-button">
              Add New Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAddJobPosting;
