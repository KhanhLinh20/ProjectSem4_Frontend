import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeTemplates from './template/HomeTemplates';
import AdminTemplates from './template/AdminTemplates'
import AdminVacancy from './dashboard/admin/adminpages/AdminVacancy';

import AdminInterview from './dashboard/admin/adminpages/AdminInterview';
import AdminDepartment from './dashboard/admin/adminpages/AdminDepartment';
import AdminEmployee from './dashboard/admin/adminpages/AdminEmployee';
import AdminBlog from './dashboard/admin/adminpages/AdminBlog';
import AdminEmployeeLogin from './dashboard/admin/adminpages/AdminEmployeeLogin';
import AdminApplyAction from './dashboard/admin/adminpages/AdminApplyAction';
import AdminEmployeeInterview from './dashboard/admin/adminpages/AdminEmployeeInterview';
import AdminApplicantInterview from './dashboard/admin/adminpages/AdminApplicantInterview';
import About from './pages/About';
import WhyShopee from './pages/WhyShopee';
import LifeShopee from './pages/LifeShopee';
import Opportunity from './pages/Opportunity';
import Track from './pages/Track';
import CreateBlog from './dashboard/admin/components/blogadmin/CreateBlog';
import UpdateBlog from './dashboard/admin/components/blogadmin/UpdateBlog';
import AdminJobPostings from './dashboard/admin/adminpages/AdminJobPostings';
import AdminNotfications from './dashboard/admin/adminpages/AdminNotfications';
import AdminBlogCatelogy from './dashboard/admin/adminpages/AdminBlogCatelogy';
import AdminMessages from './dashboard/admin/adminpages/AdminMessages';
import AdminBlogPosts from './dashboard/admin/adminpages/AdminBlogPosts';
import AdminBlogImages from './dashboard/admin/adminpages/AdminBlogImages';
import HomeAdmin from './dashboard/admin/adminpages/HomeAdmin';
import Login from './pages/Login';
import UserTemplates from './template/UserTemplates';
import AddEmployee from './dashboard/admin/components/employee/addemployer/AddEmployee';
import AdminJobCategory from './dashboard/admin/adminpages/AdminJobCategory';
import EditEmployee from './dashboard/admin/components/employee/editemployee/EditEmployee';
import EditJobPosting from './dashboard/admin/components/jobList/editjobposting/EditJobPosting';
import AddJobPosting from './dashboard/admin/components/jobList/addjobposting/AddJobPosting';
import AdminApplications from './dashboard/admin/adminpages/AdminApplications';
import AddApplications from './dashboard/admin/components/Applications/addapplications/AddApplications';
import AddCategoryJob from './dashboard/admin/components/categoryjob/addcategoryjpb/AddCategoryJob';
import EditCategoryJob from './dashboard/admin/components/categoryjob/editcategoryjob/EditCategoryJob';
import AddInterView from './dashboard/admin/components/interview/addinterview/AddInterView';
import AdminApplicationWithowInterview from './dashboard/admin/adminpages/AdminApplicationWithowInterview';
import PageNotFound from './components/error/PageNotFound';
import AdminChangePassWord from './dashboard/admin/adminpages/AdminChangePassWord';
import ProfileEmployee from './dashboard/admin/components/employee/profileemployee/ProfileEmployee';
import UserApplication from './dashboard/user/userpages/aplication/listapplication/UserApplication';
import UserJobPosting from './dashboard/user/userpages/jobposting/listjobposting/UserJobPosting';
import UserAddJobPosting from './dashboard/user/userpages/jobposting/addjobposting/UserAddJobPosting';
import JobPostingDetails from './dashboard/admin/components/jobList/details/JobPostingDetails';
import AdminJobPostDraft from './dashboard/admin/adminpages/AdminJobPostDraft';
import AdminJobPubLish from './dashboard/admin/adminpages/AdminJobPubLish';
import ApplicationApplyJob from './components/application/ApplicationApplyJob';
import DetailsJobPosing from './pages/DetailsJobPosing';
import DetailApplications from './dashboard/admin/components/Applications/detailapplication/DetailApplications';
import DetailInterview from './dashboard/admin/components/interview/detailinterview/DetailInterview';
import EditInterview from './dashboard/admin/components/interview/editinterview/EditInterview';
import { UserProvider } from './context/UserContext';
import JobListClose from './dashboard/admin/components/jobList/joblistclose/JobListClose';
import ApplicationAccept from './dashboard/admin/components/applicationaccept/ApplicationAccept';
import DetailInterviewApplicationAccept from './dashboard/admin/components/applicationaccept/detailinterviewapplication/DetailInterviewApplicationAccept';
import ApplicationReject from './dashboard/admin/components/applicationreject/ApplicationReject';
import DetailInterviewApplicationReject from './dashboard/admin/components/applicationreject/detailinterviewapplicationreject/DetailInterviewApplicationReject';
import EditJobPostingDraft from './dashboard/admin/components/jobList/joblistdraft/editjobdraft/EditJobPostingDraft';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <UserProvider>
  <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
      <Route path='track' element={<Track />}></Route>
      <Route path='' element={<HomeTemplates />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='whyshopee' element={<WhyShopee />}></Route>
        <Route path='lifeshopee' element={<LifeShopee />}></Route>
        <Route path='opportunity' element={<Opportunity />}></Route>
        
        
        
        <Route path='application-apply-job/:id' element={<ApplicationApplyJob/>}></Route>
        <Route path='detail-jobposting-application/:id' element={<DetailsJobPosing/>}></Route>


      </Route>
      <Route path='admin' element={<AdminTemplates />}>
        <Route index element={<HomeAdmin />}></Route>
        <Route path='detail-applications/:id' element={<DetailApplications />}></Route>
        <Route path='detail-interview/:id' element={<DetailInterview/>}></Route>
        <Route path='edit-interview/:id' element={<EditInterview/>}></Route>
        <Route path='list-application-accept' element={<ApplicationAccept/>}></Route>
        <Route path='list-application-reject' element={<ApplicationReject/>}></Route>
        <Route path='detail-application-accept/:id' element={<DetailInterviewApplicationAccept/>}></Route>
        <Route path='detail-application-reject/:id' element={<DetailInterviewApplicationReject/>}></Route>
        <Route path='vacancy' element={<AdminVacancy />}></Route>
        <Route path='job-category' element={<AdminJobCategory />}></Route>  
        <Route path='applications' element={<AdminApplications />}></Route>
        <Route path='applicationwithowinterview' element={<AdminApplicationWithowInterview />}></Route>
        <Route path='interview' element={<AdminInterview />}></Route>
        <Route path='addinterview/:id' element={<AddInterView />}></Route>
        <Route path='applicantinterview' element={<AdminApplicantInterview />}></Route>
        <Route path='department' element={<AdminDepartment />}></Route>
        <Route path='list-employer' element={<AdminEmployee />}></Route>
        <Route path='blog' element={<AdminBlog />}></Route>
        <Route path='employeelogin' element={<AdminEmployeeLogin />}></Route>
        <Route path='applyaction' element={<AdminApplyAction />}></Route>
        <Route path='employeeinterview' element={<AdminEmployeeInterview />}></Route>
        <Route path='createblog' element={<CreateBlog />}></Route>
        <Route path='updateblog' element={<UpdateBlog />}></Route>
        <Route path='list-job/:id' element={<AdminJobPostings />}></Route>
        <Route path='joblistdraft' element={<AdminJobPostDraft />}></Route>
        <Route path='joblistpublish' element={<AdminJobPubLish />}></Route>
        <Route path='job-list-close' element={<JobListClose />}></Route>
        <Route path='Notifications' element={<AdminNotfications />}></Route>
        <Route path='BlogCategories' element={<AdminBlogCatelogy />}></Route>
        <Route path='Messages' element={<AdminMessages />}></Route>
        <Route path='BlogPosts' element={<AdminBlogPosts />}></Route>
        <Route path='BlogImages' element={<AdminBlogImages />}></Route>
        <Route path='add-employer' element={<AddEmployee />}></Route>
        <Route path='edit-employer/:id' element={<EditEmployee />}></Route>
        <Route path='update-job-posting/:jobID' element={<EditJobPosting />}></Route>
        <Route path='edit-jobposting-draft/:id' element={<EditJobPostingDraft />}></Route>
        <Route path='addjobposting/:id' element={<AddJobPosting />}></Route>
        <Route path='jobpostingdetail/:id' element={<JobPostingDetails />}></Route>
        
        
        <Route path='addApplications' element={<AddApplications />}></Route>
        <Route path='add-category-job' element={<AddCategoryJob />}></Route>
        <Route path='update-category-job/:id' element={<EditCategoryJob />}></Route>
        <Route path='change-password' element={<AdminChangePassWord />}></Route>
        <Route path='profileemployee/:id' element={<ProfileEmployee />}></Route>

      </Route>
      <Route path='user' element={<UserTemplates />}>
       <Route index element={<HomeAdmin/>}></Route>
       <Route path='application' element={<UserApplication/>}></Route>
       <Route path='jobposting' element={<UserJobPosting/>}></Route>
       <Route path='useraddjobposting' element={<UserAddJobPosting/>}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
  </UserProvider>
</React.StrictMode>
  


);

