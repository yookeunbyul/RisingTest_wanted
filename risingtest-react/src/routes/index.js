import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ReactComponent as Logo } from '../svg/ic-wanted-logo.svg';
import LandingPage from "../pages/landing";
import FirstBoard from "../pages/onboarding/firstboard";
import Head from "../components/common/head";
import Modal from "../components/common/modal";
import SignModal from "../components/common/signModal";
import Email from "../components/modal/email";
import Sign from "../components/modal/sign";

const RootRoute = () => {
    return (
        <>
            <BrowserRouter>
                {/* 헤더 */}
                <Head />

                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/first" element={<FirstBoard />}></Route>
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