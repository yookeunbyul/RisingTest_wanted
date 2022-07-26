import styled from 'styled-components';
import Content from "../../components/profile/content";

const ProfilePage = () => {
    return(
        <Wrap>
            <Content />
        </Wrap>
    )
}

const Wrap = styled.div`
    /* width: 100vw;
    height: 100vh; */
    background-color: #f8f8f8;
    /* overflow-y : auto; */
    /* overflow-x: hidden; */
`;

export default ProfilePage;