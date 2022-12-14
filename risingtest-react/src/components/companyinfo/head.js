import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Head = () => {
    const { companyId } = useParams();
    const [CompanyDetails, setCompanyDetails] = useState("");

    useEffect(() => {
        axios.get(`https://prod.zezeserver.shop/app/companies/${companyId}`,{
            })
            .then(res => {
                console.log(res);
                setCompanyDetails(res.data.result.CompanyDetails);
            })
            .catch(err => console.log(err))
    }, [companyId])

    return(
        <Wrap>
            <div className="box">
                {CompanyDetails ? (
                    CompanyDetails.map((item) => {
                        return(
                            <>
                                <div className="section">
                                    <img src={item.Logo} width="50" alt=""/>
                                    <div className="company-name">{item.companyName}</div>
                                </div>
                                <div className="section right">
                                    <button>팔로우</button>
                                </div>
                            </>
                        )
                    })
                ) : null}
            </div>  
        </Wrap>
    )
}

const Wrap = styled.div`
    border-bottom: 1px solid #e1e2e3;
    height: 90px;

    .box{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid #222; */
        height: 90px;

        display:flex;
        align-items: center;
    }

    .section{
        flex-grow: 1;
        /* border: 1px solid red; */

        display: flex;
        align-items: center;
    }

    .section > img{
        border: 1px solid #f1f1f2;
    }

    .company-name{
        font-size: 26px;
        font-weight: 600;
        margin-left: 10px;
    }

    .section.right{
        display:flex;
        justify-content: end;
    }

    .section.right > button{
        height: 40px;
        font-size: 15px;
        color: #36f;
        background-color: #fff;
        border-radius: 25px;
        padding: 0 27px;
        border: 0;
        border: 1px solid #e1e2e3;
    }
`;

export default Head;