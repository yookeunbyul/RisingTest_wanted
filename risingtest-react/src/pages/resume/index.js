import LoginResume from "../../components/resume/loginResume";
import NoLoginResume from "../../components/resume/noLoginResume";

const ResumePage = () => {
    const isLogin = localStorage.getItem("jwt");

    return(
        <>
            {isLogin ? (
                <LoginResume />
            ) : (
                <NoLoginResume />
            )}
        </>
    );
}

export default ResumePage;