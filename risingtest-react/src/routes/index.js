import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ReactComponent as Logo } from '../svg/ic-wanted-logo.svg';
import Head from "../components/common/head";
import ScrollToTop from "../components/common/scrollToTop";
// import Footer from "../components/common/footer";
import LandingPage from "../pages/landing";
import JobFeedPage from "../pages/jobfeed";
import ResumePage from "../pages/resume";
import WritePage from "../pages/resume/write";
import JobListPage from "../pages/joblist";
import JobInfoPage from "../pages/jobinfo";
import CompanyInfoPage from "../pages/companyinfo";
import ProfilePage from "../pages/profile";
import FirstBoard from "../pages/onboarding/firstboard";
import SecondBoard from "../pages/onboarding/secondboard";
import ThridBoard from "../pages/onboarding/thirdboard";
import Modal from "../components/common/modal";
import SignModal from "../components/common/signModal";
import ResumeModal from "../components/common/resumeModal";
import Email from "../components/modal/email";
import Sign from "../components/modal/sign";
import DeleteResume from "../components/modal/deleteResume";

const RootRoute = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route element={<Head />}>
                        <Route path="/" element={<LandingPage />}></Route>
                        <Route path="/jobfeed" element={<JobFeedPage />}></Route>
                        <Route path="/resume" element={<ResumePage />}></Route>
                        <Route path="/resume/write" element={<WritePage />}></Route>
                        <Route path="/joblist" element={<JobListPage />}></Route>
                        <Route path="/jobinfo/:employmentId" element={<JobInfoPage />}></Route>
                        <Route path="/companyinfo/:companyId" element={<CompanyInfoPage />}></Route>
                        <Route path="/profile" element={<ProfilePage />}></Route>
                    </Route>
                        
                    <Route path="/first" element={<FirstBoard />}></Route>
                    <Route path="/second" element={<SecondBoard />}></Route>
                    <Route path="/third" element={<ThridBoard />}></Route>
                </Routes>

                {/* 모달 */}
                <Modal header={<Logo width={70} height={16.67}/>}>
                    <Email />
                </Modal>

                <SignModal header="회원가입">
                    <Sign />
                </SignModal>

                <ResumeModal>
                    <DeleteResume />
                </ResumeModal>
            </BrowserRouter>
        </>
    );
}

export default RootRoute;