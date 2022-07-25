import styled from 'styled-components';
import Filter from "../../components/joblist/filter";
const JobListPage = () => {
    return(
        <Wrap>
            <Filter />
        </Wrap>
    );
}

const Wrap = styled.div`
    padding-top: 50px;
    overflow-x: hidden;
`;
export default JobListPage;