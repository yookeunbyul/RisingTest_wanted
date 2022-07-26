import styled from 'styled-components';
import Head from "../../components/companyinfo/head";
import Content from "../../components/companyinfo/content";
import Footer from "../../components/common/footer";

const CompanyInfoPage = () => {
    return(
        <Wrap>
            <Head />

            <Content />

            <Footer />
        </Wrap>
    )
}

const Wrap = styled.div`
    padding-top: 50px;
`;

export default CompanyInfoPage;