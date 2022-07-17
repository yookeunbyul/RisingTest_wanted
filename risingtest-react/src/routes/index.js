import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ReactComponent as Logo } from '../svg/ic-wanted-logo.svg';
import LandingPage from "../pages/landing";
import Head from "../components/common/head";
import Modal from "../components/common/modal";
import Email from "../components/modal/email";

const RootRoute = () => {
    return (
        <>
            {/* 헤더 */}
            <Head />

            <BrowserRouter> 
                <Routes>
                    {/* 랜딩 페이지 */}
                    <Route path="/" element={<LandingPage />}></Route>
                </Routes>
            </BrowserRouter>

            {/* 모달 */}
            <Modal header={<Logo width={74.38} height={17.33}/>}>
                <Email />
            </Modal>
        </>
    );
}

export default RootRoute;