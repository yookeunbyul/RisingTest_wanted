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
import TagSearchPage from "../pages/tagsearch";
import FirstBoard from "../pages/onboarding/firstboard";
import SecondBoard from "../pages/onboarding/secondboard";
import ThridBoard from "../pages/onboarding/thirdboard";
import Modal from "../components/common/modal";
import SignModal from "../components/common/signModal";
import ResumeModal from "../components/common/resumeModal";
import PasswordModal from "../components/common/passwordModal";
import Email from "../components/modal/email";
import Sign from "../components/modal/sign";
import DeleteResume from "../components/modal/deleteResume";
import Password from "../components/modal/password";

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
                        <Route path="/resume/write/:resumeID" element={<WritePage />}></Route>
                        <Route path="/joblist" element={<JobListPage />}></Route>
                        <Route path="/jobinfo/:employmentId" element={<JobInfoPage />}></Route>
                        <Route path="/companyinfo/:companyId" element={<CompanyInfoPage />}></Route>
                        <Route path="/profile" element={<ProfilePage />}></Route>
                        <Route path="/tagsearch/:companyTagId" element={<TagSearchPage />}></Route>
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

                <PasswordModal header="비밀번호 입력">
                    <Password />
                </PasswordModal>

            </BrowserRouter>
        </>
    );
}

export default RootRoute;