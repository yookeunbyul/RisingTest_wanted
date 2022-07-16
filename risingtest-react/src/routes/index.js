import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "../pages/landing";

const RootRoute = () => {
    return (
        <BrowserRouter> 
            <Routes>
                {/* 랜딩 페이지 */}
                <Route path="/" element={<LandingPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;