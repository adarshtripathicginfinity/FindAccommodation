import React from "react";
import Layout from "./layout";
import Otp from "./components/accountAuth/otp";
import EmployeeSignUp from "./components/accountAuth/employeeSignUp";
import InternSignUp from "./components/accountAuth/internSignUp";
import InternVerified from "./components/accountAuth/internVerified";
import Login from "./components/accountAuth/login";
import LandingPage from "./components/landingPage/landingPage";
import Step1 from "./components/volunteerMultiStepForm/step1/step1";
import VolunteerMultiForm from "./components/volunteerMultiStepForm/volunteerMultiForm";
import ForgotPassword from "./components/accountAuth/forgotPassword";
import CreateNewPassword from "./components/accountAuth/createNewPassword";
import AvailableAccommodations from "./components/availableAccommodations/availableAccommodations";
import OpenRequirements from "./components/availableAccommodations/openRequirements";
import Nodatapage from "./components/availableAccommodations/noDataaPage";
import RequirementMultiStepForm from "./components/requirementMultiStepForm/requirementMultiStepForm";
import OpenAccommodation from "./components/availableAccommodations/openAccommodation2";
import ForgotPassOtp from "./components/accountAuth/forgotPassOtp";
import Changedpassword from "./components/accountAuth/changedPassword";
import Registrationsuccessful from "./components/accountAuth/registrationSuccessful";
import Postrequirement from "./components/requirementMultiStepForm/postSuccessful";
import MapAvailableAccommodations from "./components/availableAccommodations/mapAvailableAccommodations";
import PostSuccessful from "./components/requirementMultiStepForm/postSuccessful";
import InternOtp from "./components/accountAuth/internOpt";
import Step3 from "./components/volunteerMultiStepForm/step3/step3";
import Step2 from "./components/volunteerMultiStepForm/step2/step2";
import Step4 from "./components/volunteerMultiStepForm/step4/step4";
import Step5 from "./components/volunteerMultiStepForm/step5/step5";
import Missing from "./components/missing/Missing";
import RequireAuth from "./components/requirementAuth/requireAuth";
import AccountSettings from "./components/accountSettings/accountSettings";

import { Routes, Route, UNSAFE_RouteContext } from "react-router-dom";
import InterestSent from "./components/interestSent/interestSent";
import NotificationSent from "./components/notificationSent/notificationSent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}

        <Route path="" element={<Login />} />
        <Route path="internsignup" element={<InternSignUp />} />
        <Route path="employeesignup" element={<EmployeeSignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="forgotpassotp" element={<ForgotPassOtp />} />
        <Route path="internOtp" element={<InternOtp />} />

        {/* otp access */}

        <Route path="otp" element={<Otp />} />

        {/* after otp verification */}

        <Route path="internverified" element={<InternVerified />} />

        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="createnewpassword" element={<CreateNewPassword />} />
        <Route
          path="registrationsuccessful"
          element={<Registrationsuccessful />}
        />
        <Route path="changedpassword" element={<Changedpassword />} />

        {/* we want to protect these routes */}

        <Route element={<RequireAuth />}>
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="step1" element={<Step1 />} />
          <Route path="form" element={<VolunteerMultiForm />} />
          <Route path="accountsettings" element = {<AccountSettings />} />

          <Route path="postrequirement" element={<Postrequirement />} />
          <Route
            path="availableaccommodationsonly"
            element={<AvailableAccommodations activebtn={true} />}
          />
          <Route
            path="availableaccommodationsreq"
            element={<AvailableAccommodations activebtn={false} />}
          />

          <Route path="Nodatapage" element={<Nodatapage />} />

          <Route
            path="requirementform"
            element={<RequirementMultiStepForm />}
          />
          <Route path="openaccommodation" element={<OpenAccommodation />} />
          <Route
            path="mapaccommodation"
            element={<MapAvailableAccommodations />}
          />

          <Route path="postSuccess" element={<PostSuccessful />} />

          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="step4" element={<Step4 />} />
          <Route path="step5" element={<Step5 />} />

          <Route path="interestsent" element={<InterestSent />} />
          <Route path="notificationsent" element={<NotificationSent />} />
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
