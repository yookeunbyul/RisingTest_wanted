import Head from "./head";
import Advantage from "./advantage";
import Sample from "./sample";
import Content from "./content";
import AiPosition from "./aiposition";
import Footer from "../../components/common/footer";
import styled from 'styled-components';

const NoLoginResume = () => {
    return(
        <Wrap>
            {/* 로그인안했어요 */}
            <Head />

            {/* 장점 */}
            <Advantage />

            {/* 샘플 */}
            <Sample />

            {/* 콘텐츠 */}
            <Content />

            {/* ai 포지션 추천 */}
            <AiPosition />

            <Footer />
        </Wrap>
    );
}

const Wrap = styled.div`
    overflow-x: hidden;
`;

export default NoLoginResume;