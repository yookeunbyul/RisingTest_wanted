import Head from "./head";
import Advantage from "./advantage";
import Sample from "./sample";
import Content from "./content";
import AiPosition from "./aiposition";
import Footer from "../../components/common/footer";

const NoLoginResume = () => {
    return(
        <>
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
        </>
    );
}

export default NoLoginResume;