import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "../pages/landing";
import Head from "../components/common/head";
import Modal from "../components/common/modal";

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
            <Modal header="로그인 또는 회원가입">
                
            </Modal>
        </>
    );
}

export default RootRoute;