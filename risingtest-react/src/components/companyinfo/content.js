import styled from 'styled-components';
import { ReactComponent as Bookmark } from '../../svg/ic-position-bookmark.svg';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { UpdateNameAction } from "../../store/actions/tagName";

const Content = () => {
    const { companyId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [Employments, setEmployments] = useState("");
    const [companyImgs, setCompanyImgs] = useState("");
    const [companyTags, setCompanyTags] = useState("");
    const [news, setNews] = useState("");
    const [CompanyDetails, setCompanyDetails] = useState("");
    const token = localStorage.getItem("jwt");

    useEffect(() => {
        axios.get(`https://dev.zezeserver.shop/app/companies/${companyId}`,{
            headers: {
                'x-access-token': token,
            }
            })
            .then(res => {
                console.log(res);
                setEmployments(res.data.result.Employments);
                setCompanyImgs(res.data.result.companyImgs);
                setCompanyTags(res.data.result.companyTags);
                setNews(res.data.result.news);
                setCompanyDetails(res.data.result.CompanyDetails);
            })
            .catch(err => console.log(err))
    }, [companyId])

    const onTagClick = (id, name) => {
        navigate(`/tagsearch/${id}`);
        dispatch(
            UpdateNameAction({
                tagName : name,
            })
        );
    }

    return(
        <Wrap>
            <div className="box">
                <div className="section left">
                    <div className="title">
                        채용 중인 포지션
                        <button>
                            <div className="box-wrap">
                                <span>응답률 매우 높음</span>
                            </div>
                        </button>
                    </div>
                    <div className="position">
                        {Employments ? (
                            Employments.map((item) => {
                                return(
                                    <>
                                        <div className="position-card" key={item.employmentId}>
                                            <div className="card-section left">
                                                <div className="position-title">{item.jobName}</div>
                                                <div className="position-money">채용보상금 1,000,000원</div>
                                                <div className="position-option">상시채용</div>
                                            </div>
                                            <div className="card-section right">
                                                <button>
                                                    <Bookmark />
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        ) : null}
                    </div>
                    <div className="company-intro">
                        <div className="title">
                            회사 소개
                        </div>
                        <div className="company-img">
                            {companyImgs ? (
                                companyImgs.map((item, index) => {
                                    return(
                                        <>
                                            <div className="img-btn" key={index}>
                                                <img src={item} alt=""/>
                                            </div>
                                        </>
                                    )
                                })
                            ) : null}
                        </div>
                        <div className="company-text">
                            {CompanyDetails ? (
                                CompanyDetails.map((item, index) => {
                                    return(
                                        <>
                                            <div className="desc" key={index}>
                                                {item.description}
                                            </div>
                                        </>
                                    )
                                })
                            ) : null}
                        </div>
                    </div>
                    <div className="company-news">
                        <div className="title">
                            이 회사의 뉴스
                        </div>
                        <div className="news">
                            {news ? (
                                news.map((news) => {
                                    return(
                                        <>
                                            <div className="news-card">
                                                <div className="card-text">
                                                    <div className="news-title">{news.newsName}</div>
                                                    <p>{news.newsUrl} {news.uploadDate}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="section right">
                    <div className="title">
                        태그
                    </div>
                    <div>
                        {companyTags ? (
                            companyTags.map((tag) => {
                                return(
                                    <>
                                        <div className="tag" key={tag.tagId} onClick={() => onTagClick(tag.tagId, tag.name)}>#{tag.name}</div>
                                    </>
                                )
                            })
                        ) : null}
                        <div className="plus">+ 태그 의견보내기</div>
                    </div>
                </div>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding: 40px 0;

    .desc{
        line-height: 30px;
    }

    .box{
        display: flex;
    }

    .section{
        /* border: 1px solid red; */
    }

    .section.left{
        flex-grow:2;
        width: 722px;
    }

    .section.right{
        flex-grow:1;
        width: 308px;
    }

    .title{
        font-size: 22px;
        font-weight: 600;
        line-height: 1;
        color: #333;
        margin-bottom: 20px;
        display:flex;
        align-items: center;
    }

    .title > button{
        border: none;
        background-color: transparent;
    }

    .box-wrap{
        border: 1px solid #00aead;
        color: #00aead;
        border-radius: 2px;
        background-color: #fff;
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        height: 19px;
        line-height: 19px;
        margin-top: 4px;
        padding: 0 5px;
    }

    .position{
        /* border: 1px solid #222; */
        display: grid;
        grid-template-columns: 351px 351px;
        grid-template-rows: 108px;
        column-gap: 15px;
        row-gap: 15px;

        margin-bottom: 80px;
    }

    .grid{
        border: 1px solid blue;
    }

    .position-card{
        min-height: 108px;
        border-radius: 3px;
        border: 1px solid #e1e2e3;

        display: flex;
    }

    .news{
        /* border: 1px solid #222; */
        display: grid;
        grid-template-columns: 351px 351px;
        grid-template-rows: 108px;
        column-gap: 15px;
        row-gap: 15px;
    }

    .news-card{
        min-height: 108px;
        border-radius: 3px;
        border: 1px solid #e1e2e3;
    }

    .news-title{
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        color: #333;
        height: 44px;
        overflow: hidden;
        margin-bottom: 16px;
    }

    .card-text{
        padding: 15px 20px;
    }

    .card-text > p{
        font-size: 14px;
        font-weight: 400;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }


    .position-title{
        font-size: 18px;
        line-height: 1.4;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
    }

    .position-money{
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        color: #86939e;
        margin-top: 3px;
    }

    .position-option{
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        color: #666;
        margin-top: 15px;
    }

    .card-section{
        /* border: 1px solid blue; */
        padding: 15px;
        flex-basis: 0;
    }

    .card-section.left{
        flex-grow:12;
    }
    
    .card-section.right{
        flex-grow:1;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .card-section.right > button{
        font-size: 15px;
        font-weight: 400;
        line-height: 1;
        color: #86939e;
        width: 34px;
        height: 34px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        border-radius: 17px;

        display:flex;
        align-items: center;
        justify-content: center;
    }

    .company-img{
        display:flex;
        margin-bottom: 20px;
    }

    .img-btn{
        width: 135px;
        height: 124px;
        cursor: pointer;
        margin-right: 10px;
    }

    .img-btn.second{
        margin-left: 10px;
    }

    .img-btn >img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

    .company-intro{
        margin-bottom: 80px;
    }

    .company-news{
        margin-bottom: 80px;
    }

    .company-text{
        font-size: 16px;
        line-height: 27px;
        letter-spacing: -1px;
    }

    .company-text > button {
        font-size: 16px;
        font-weight: 400;
        line-height: 1;
        color: #999;
        padding: 10px 0;
        border: 0;
        background-color: transparent;
        cursor:pointer;
    }

    .company-text > button >span::after {
        content: "\f107";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #999;
        margin-left: 5px;
    }

    .tag{
        display: inline-block;
        background-color: #f3f5f8;
        padding: 12px 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        color: #333;
        border-radius: 20px;
        margin-right: 6px;
        margin-bottom: 10px;

        cursor: pointer;
    }

    .plus{
        display: inline-block;
        color: #999;
        border: 1px dashed #ccc;
        padding: 12px 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        border-radius: 20px;
        margin-right: 6px;
        margin-bottom: 10px;
    }
`;

export default Content;