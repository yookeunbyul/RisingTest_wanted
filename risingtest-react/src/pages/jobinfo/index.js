import styled from 'styled-components';
import JobInfo from "../../components/jobinfo/jobInfo";


const JobInfoPage = () => {
    return(
        <Wrap>
            <JobInfo />
        </Wrap>
    )
}

const Wrap = styled.div`
    padding-top: 50px;
`;

export default JobInfoPage;