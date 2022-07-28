import styled from 'styled-components';
import Head from "../../components/tagsearch/head";
import Content from "../../components/tagsearch/content";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TagSearchPage = () => {
    const { companyTagId } = useParams();
    const token = localStorage.getItem("jwt");

    const [tagList, setTagList] = useState([]);
    const [companyList, setCompanyList] = useState([]);

    useEffect(() => {
        axios.get(`https://prod.zezeserver.shop/app/companyTag/${companyTagId}/companies`,{
            headers: {
                'x-access-token': token,
            }
            })
            .then(res => {
                console.log("회사 태그 아이디");
                console.log(res);
                setTagList(res.data.result.tagList);
                setCompanyList(res.data.result.companyRows);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <Wrap>
            <Head tagList={tagList}/>
            <Content companyList={companyList}/>
        </Wrap>
    )
}

const Wrap = styled.div`
    padding-top: 50px;
    height: 100vh;
`;

export default TagSearchPage;