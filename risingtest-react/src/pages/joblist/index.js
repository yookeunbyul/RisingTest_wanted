import styled from 'styled-components';
import FilterHead from "../../components/joblist/filterHead";
const JobListPage = () => {
    return(
        <Wrap>
            <FilterHead />
        </Wrap>
    );
}

const Wrap = styled.div`
    padding-top: 50px;
`;
export default JobListPage;