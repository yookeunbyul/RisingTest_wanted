import ResumeList from "./resumeList";
import styled from 'styled-components';

const LoginResume = () => {
    return(
        <Wrap>
            <ResumeList />
        </Wrap>
    );
}

const Wrap = styled.div`
    height: 100vh;
    /* width: 100vw; */
    background-color: #f8f8f8;
    overflow-y: auto;
    /* padding-bottom: 100px; */
`;

export default LoginResume;