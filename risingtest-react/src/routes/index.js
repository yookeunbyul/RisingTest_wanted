import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ReactComponent as Logo } from '../svg/ic-wanted-logo.svg';
import Head from "../components/common/head";
import Footer from "../components/common/footer";
import LandingPage from "../pages/landing";
import JobFeedPage from "../pages/jobfeed";
import ResumePage from "../pages/resume";
import FirstBoard from "../pages/onboarding/firstboard";
import SecondBoard from "../pages/onboarding/secondboard";
import ThridBoard from "../pages/onboarding/thirdboard";
import Modal from "../components/common/modal";
import SignModal from "../components/common/signModal";
import Email from "../components/modal/email";
import Sign from "../components/modal/sign";

const RootRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Head />}>
                        <Route path="/" element={<LandingPage />}></Route>
                        <Route path="/jobfeed" element={<JobFeedPage />}></Route>
                        <Route path="/resume" element={<ResumePage />}></Route>
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
            </BrowserRouter>
        </>
    );
}

export default RootRoute;