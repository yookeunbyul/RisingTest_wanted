import styled from 'styled-components';
import { ReactComponent as Share } from '../../svg/ic-share.svg';
import { ReactComponent as Bookmark } from '../../svg/ic-bookmark.svg';
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/common/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JobInfo = () => {
    const navigate = useNavigate();
    const { employmentId } = useParams();
    const { username } = useSelector((state) => state.UserReducer);
    const { userId } = useSelector((state) => state.JobGroupReducer);

    const [imgUrl, setImgUrl] = useState("");
    const [jobName, setJobName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [companyTag, setCompanyTag] = useState("");
    const [address, setAddress] = useState("");
    const [logo, setLogo] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [text, setText] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [random, setRandom] = useState("");
    const [isFollow, setIsFollow] = useState("");

    
    const str = text.split('\n');
    const token = localStorage.getItem("jwt");


    useEffect(() => {
        axios.get(`https://dev.zezeserver.shop/app/employments/${employmentId}`,{
            headers: {
                'x-access-token': token,
            }
            })
            .then(res => {
                console.log(res);
                setImgUrl(res.data.result.employmentDetails.ImgUrls);
                setJobName(res.data.result.employmentDetails.jobName);
                setCompanyName(res.data.result.companyData.companyName);
                setCity(res.data.result.employmentDetails.city);
                setCountry(res.data.result.employmentDetails.country);
                setCompanyTag(res.data.result.companyData.companyTag);
                setAddress(res.data.result.employmentDetails.address);
                setLogo(res.data.result.companyData.Logo);
                setCategoryName(res.data.result.companyData.categoryName);
                if(res.data.result.employmentDetails.description){
                    setText(res.data.result.employmentDetails.description);
                }
                setCompanyId(res.data.result.employmentDetails.companyId);
                setRandom(res.data.result.randomEmployments);
                setIsFollow(res.data.result.companyData.IsFollow);
            })
            .catch(err => console.log(err))
    }, [employmentId])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const onClick = () =>{
        navigate(`/companyinfo/${companyId}`);
    }

    const onFollow = () => {
        axios.post("https://dev.zezeserver.shop/app/users/follow",{
            userId: `${userId}`,
            companyId: `${companyId}`,
        },
        {
            headers: {
                'x-access-token': token,
            }
        })
        .then(res => {
            console.log("팔로우 되었씁니다.");
            console.log(res);
            axios.get(`https://dev.zezeserver.shop/app/employments/${employmentId}`,{
            headers: {
                'x-access-token': token,
            }
            })
            .then(res => {
                setIsFollow(res.data.result.companyData.IsFollow);
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    const onUnFollow = () => {
        axios.patch(`https://dev.zezeserver.shop/app/users/${userId}/companies/${companyId}/follow/status`,{
        },
        {
            headers: {
                'x-access-token': token,
            }
        })
        .then(res => {
            console.log("언팔로우 했습니다.");
            console.log(res);
            axios.get(`https://dev.zezeserver.shop/app/employments/${employmentId}`,{
                headers: {
                    'x-access-token': token,
                }
                })
                .then(res => {
                    setIsFollow(res.data.result.companyData.IsFollow);
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    console.log(isFollow);

    return(
        <>
            <Wrap>
                <div className="box">
                    <div className="section left">
                        <div style={{width: "700px", height: "490px"}}>
                        <StyledSlide {...settings}>
                            {imgUrl ? (
                                imgUrl.map((url, index) => {
                                    return(
                                        <>
                                            <div className="img-wrap" key={index}>
                                                <img src={url.ImgUrl} alt="" />
                                            </div>
                                        </>
                                    )
                                })
                            ) : null}
                        </StyledSlide>
                        </div>
                        <div className="header">
                            <div className="head">{jobName}</div>
                            <div>
                                <span className="company">{companyName}</span>
                                <span className="res">응답률 매우 높음</span>
                                <span className="country-info">{city} · {country}</span>
                            </div>
                            <div>
                                <ul className="tag-list">
                                    {companyTag ? (
                                        companyTag.map((tag) => {
                                            return(
                                                <>
                                                    <li key={tag.tagId}>#{tag.name}</li>
                                                </>
                                            )
                                        })
                                    ) : null}
                                </ul>
                            </div>
                        </div>
                        <div className="body">
                            <p>
                                <span className="intro">
                                    {str.map((v, index) => {
                                        return(
                                            <>
                                                <div key={index}>
                                                    {v}
                                                    <br />
                                                </div>
                                            </>
                                        )
                                    } )}
                                </span>
                            </p>
                            <div>
                                <div className="sub-head">기술스택 · 툴</div>
                                <div className="skill-tag">
                                    <div className="tag-option">MySQL</div>
                                    <div className="tag-option">VueJS</div>
                                    <div className="tag-option">JavaScript</div>
                                    <div className="tag-option">AWS</div>
                                    <div className="tag-option">NodeJS</div>
                                </div>
                            </div>
                        </div>
                        <hr className="hr"/>
                        <div className="workplace">
                            <div className="workplace-wrap">
                                <span className="workplace-head">마감일</span>
                                <span className="workplace-body">상시</span>
                            </div>
                            <div className="workplace-wrap">
                                <span className="workplace-head">근무지역</span>
                                <span className="workplace-body">{address}</span>
                            </div>
                            <div className="map-wrap">
                                
                            </div>
                            <div className="company-info">
                                <div className="company-box left" onClick={onClick}>
                                    <img src={logo} width="50"/>
                                    <div>
                                        <div className="company-name">{companyName}</div>
                                        <div className="company-option">{categoryName}</div>
                                    </div>
                                </div>
                                <div className="company-box right">
                                    {isFollow ? (
                                        <>
                                            <FollowBtn onClick={onUnFollow} className="followed-btn">팔로잉</FollowBtn>
                                        </>
                                    ) : (
                                        <>
                                            <FollowBtn onClick={onFollow}>팔로우</FollowBtn>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="warning">
                                <div className="warning-box">
                                    <svg class="" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"></path><path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path><path fill-rule="nonzero" d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"></path></g></svg>
                                </div>
                                <div className="warning-box">
                                    <p>
                                        본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의
                                        <br />
                                        용도로 사용할 수 없습니다.
                                    </p>
                                </div>
                                <div className="warning-box">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section right">
                        <div className="sticky">
                            <div className="follow-box">
                                <div className="title">채용보상금</div>
                                <div className="money-wrap">
                                    <div className="money">
                                        <div className="people">
                                            추천인
                                        </div>
                                        <div className="number">
                                            500,000원
                                        </div>
                                    </div>
                                    <div className="money">
                                        <div className="people">
                                            지원자
                                        </div>
                                        <div className="number">
                                            500,000원
                                        </div>
                                    </div>
                                </div>
                                <button className="share">
                                    <Share />
                                </button>
                                <button className="bookmark">북마크하기</button>
                                <button className="apply">지원하기</button>
                                <div className="reaction">
                                    <button className="like">
                                        <span>1</span>
                                    </button>
                                    <button className="profile">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png" width="26"/>
                                    </button>
                                </div>
                            </div>
                            <div className="under">
                                <div className="flex">
                                    <img src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="70"/>
                                    <span>합격예측</span>
                                </div>
                                <div className="flex right">
                                    <span>서류합격률이 궁금하면?</span>
                                    <svg width="17" height="17" class="" viewBox="0 0 17 17"><defs><filter id="bfoh3u0w3a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position">
                    <div className="position-head">{username}님, 이 포지션을 찾고 계셨나요?</div>
                    <List>
                    <div className="info">
                        <div className="position-wrap">
                            {random ? (
                                random.map((item) => {
                                    return(
                                        <>
                                            <div className="head" key={item.employmentId}>
                                                <button><Bookmark/></button>
                                                <div className="img-wrap">
                                                    <img alt="" src={item.employmentImgUrl}/>
                                                </div>
                                                <div className="txt-box">
                                                    <div className="job">{item.jobName}</div>
                                                    <div className="company">{item.companyName}</div>
                                                    <div className="response-box">
                                                        <div className="response">응답률 매우 높음</div>
                                                    </div>
                                                    <div className="country">{item.city}·{item.country}</div>
                                                    <div className="money">채용 보상금 1,000,000원</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            ) : null}
                        </div>
                    </div>
                </List>
                </div>
            </Wrap>
        </>
    )
}

const FollowBtn = styled.button`
    background-color: #fff;
    border: 1px solid #e1e2e3;
    height: 40px;
    font-size: 15px;
    color: #36f;
    border-radius: 25px;
    padding: 0 27px;
    font-weight: 600;
    cursor: pointer;
`;

const StyledSlide = styled(Slider)`
    .slick-list{
        width: 700px;
        height: 490px;
        margin: 0 auto;
        background-color: #f0f9ff;
        border-radius: 3px;
    }
    
    .slick-prev::before{
        content: "\f053";
        font-family: "Font Awesome 5 Free";
        font-size: 20px;
        font-weight: 900;
        line-height: 1;
        color: #dddddd;
    }

    .slick-prev{
        left:15px;
        z-index: 55;
    }

    .slick-next{
        right:15px;
    }

    .slick-next::before{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-size: 20px;
        font-weight: 900;
        line-height: 1;
        color: #dddddd;
    }

    .img-wrap{
        width: 700px;
        height: 490px;
        object-fit: cover;
    }

    .img-wrap > img{
        width: 100%;
        height: 100%;
    }
`;

const Wrap = styled.div`
    width: 1060px;
    /* border: 1px solid #222; */
    margin: 0 auto;

    padding-top: 20px;

    .followed-btn{
        background-color: #f2f4f7!important;
        color: #ccc!important;
        border: 0;
        font-weight: 600;
    }

    .box{
        display:flex;
    }

    .section{
        /* border:1px solid red; */
        flex-basis: 0;
    }

    .section.left{
        flex-grow:2;
        /* height: 4258px; */
    }

    .section.right{
        flex-grow:1;
        /* height: 4258px; */
        width: 340px;

        margin-left: 30px;
    }

    .header{
        margin: 40px 0 30px;
        /* border:1px solid red; */
    }

    .head{
        color: #333;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .tag-list{
        display: flex;
        margin-top: 20px;
        /* border: 1px solid #222; */
        padding-left: 0px !important;
    }

    .tag-list > li {
        list-style: none;
        margin-right: 6px;
        margin-bottom: 10px;
        padding: 9px 14px;
        font-size: 12px;
        letter-spacing: -1.2px;
        font-weight: 500;
        line-height: 1;
        color: #333;
        background-color: #f3f5f8;
        border-radius: 25px;
        cursor: pointer;
    }

    .company{
        color: #333;
        font-size: 14px;
        font-weight: 600;
        margin-right: 8px;
    }

    .res{
        border: 1px solid #00aead;
        color: #00aead;
        border-radius: 2px;
        background-color: #fff;
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        height: 19px;
        line-height: 19px;
        padding: 0 5px;
    }

    .country-info{
        padding: 0 10px;
        position: relative;
        white-space: nowrap;
        margin-left: 10px;
        color: #999;
        font-size: 14px;
    }

    .country-info::before{
        content: "";
        display: block;
        width: 1px;
        height: 12px;
        background: #e1e2e3;
        position: absolute;
        top: 5px;
        left: 0;
    }

    .body{
        /* border: 1px solid red; */
        letter-spacing: -1px;
        margin-bottom: 60px;
    }

    .intro{
        color: #333;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.75;
    }

    .sub-head{
        margin: 20px 0 0;
        font-weight: 600;
        color: #333;
        font-size: 16px;
        line-height: 1.75;
    }

    .option-list{
        font-size: 16px;
        line-height: 1.75;
    }

    .advan{
        margin-bottom: 20px;
    }

    .skill-tag{
        display: flex;
        flex-wrap: wrap;
        grid-gap: 10px 8px;
        gap: 10px 8px;
        margin-top: 5px;
        /* border: 1px solid green; */
    }

    .tag-option{
        background-color: #e4f4ec;
        border-radius: 20px;
        padding: 9px 14px;
        font-size: 12px;
        line-height: 14.4px;
        font-weight: 600;
    }

    .hr{
        border: 0;
        border-top: 1px solid #eee;
    }

    .workplace{
        /* border: 1px solid orange; */
        margin-top: 20px;
    }

    .workplace-wrap{
        margin-bottom: 20px;
    }

    .workplace-head{
        display: inline-block;
        color: #999;
        width: 80px;
        font-size: 16px;
        font-weight: 600;
        vertical-align: text-top;
    }

    .workplace-body{
        color: #333;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        vertical-align: text-top;
    }

    .map-wrap{
        width: 700px;
        height: 254px;
        background-color: #e1e2e3;
        border-radius: 3px;
    }

    .company-info{
        border-radius: 3px;
        border: 1px solid #e1e2e3;
        padding: 20px;
        margin-top: 40px;

        display:flex;
        align-items: center;
    }

    .company-box{
        flex-grow: 1;
        /* border: 1px solid blue; */

        display:flex;
        align-items: center;
        
    }
    
    .company-box > img{
        margin-right: 15px;
    }

    .company-box.right{
        display:flex;
        justify-content: end;
    }

    .company-box.left{
        cursor: pointer;
    }

    .company-box.right > button {

    }

    .company-name{
        color: #333;
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 5px;
    }

    .company-option{
        color: #999;
        font-size: 15px;
        font-weight: 600;
    }

    .warning{
        margin-top: 10px;
        border-radius: 5px;
        background-color: #f3f5f8;
        padding: 25px 30px;

        display:flex;
    }

    .warning-box{
        flex-grow:1;
        /* border: 1px solid blue; */

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .warning-box > p {
        margin-right: 40px;
        font-size: 12px;
        font-weight: 700;
        line-height: 22px;
        color: #333;
    }

    .warning-box > span::before{
        content: "\f107";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #333;
    }

    .position{
        margin: 80px 0 0;
    }

    .position-head{
        margin: 0 0 20px;
        font-size: 20px;
        font-weight: 600;
        color: #333;
        line-height: normal;
    }

    .sticky{
        position: sticky;
        top: 72px;
    }

    .follow-box{
        border: 1px solid #e1e2e3;
        background-color: #fff;
        border-radius: 3px;
        padding: 24px 20px;
        width: 300px;
    }

    .title{
        font-size: 15px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: left;
        color: #333;
    }

    .money-wrap{
        display: flex;
        margin: 24px 0px;
    }

    .money{
        flex-grow:1;
        /* border: 1px solid blue; */
    }

    .people{
        font-size: 14px;
        font-weight: 600;
        color: #999;
        margin-bottom: 8px;
        line-height: 1.2;
    }

    .number{
        font-size: 15px;
        color: #333;
        font-weight: 600;
    }

    .bookmark{
        width: 100%;
        height: 50px;
        border-radius: 25px;
        background-color: #fff;
        border: 1px solid #36f;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        color: #36f;
        text-align: center;
        margin-bottom: 10px;
    }

    .apply{
        width: 100%;
        height: 50px;
        border-radius: 25px;
        background-color: #36f;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        border: none;
        color: #fff;
        text-align: center;
    }

    .reaction{
        margin-top: 24px;
        /* border: 1px solid blue; */

        display:flex;
        align-items: center;
    }

    .like{
        height: 30px;
        border-radius: 15px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        margin-right: 12px;
        padding: 0 15px;
    }

    .like > span::before{
        content: "\f004";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        font-size: 14px;
        color: #dddddd;
        margin-right: 5px;
    }

    .profile{
        border: none;
        background-color: transparent;
    }

    .profile > img{
        margin-top: 2px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid #fff;
    }

    .share{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 20px;
        border: 1px solid #e1e2e3;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .under{
        width: 322px;
        margin-top: 4px;
        background-color: #f3f5f8;
        height: 40px;

        display: flex;
        align-items: center;
        border-radius: 4px;
        padding: 0px 10px;
    }

    .flex{
        flex-grow: 1;
        /* border: 1px solid red; */
        font-size: 12px;
    }

    .flex > span {
        margin-left: 3px;
        font-weight: 600;
    }

    .flex.right > span{
        margin-right: 3px;
    }

    .flex.right{
        color: #999999;

        display: flex;
        justify-content: right;
        align-items: center;
    }
`;

const List = styled.div`
    width: 1060px;
    margin: 0 auto;
    padding-bottom: 80px;
    /* border: 1px solid #222; */

    .bookmark{
        display: flex;
        align-items:center;
        font-size: 15px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 24px;
        letter-spacing: normal;
        color: #36f;

        cursor: pointer;
    }

    .bookmark > span{
        margin-left: 5px;
    }

    .bookmark > span::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #36f;
        margin-left: 5px;
    }

    .info{
        /* border: 1px solid #36f; */
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .position-wrap{
        /* border: 1px solid #222; */

        display: grid;
        grid-template-columns: 250px 250px 250px 250px;
        grid-template-rows: 343.43px;
        column-gap: 19px;
        row-gap: 40px;
    }

    .head{
        position: relative;
        cursor: pointer;
    }

    .head > button {
        position: absolute;
        right: 0;
        top: 8px;

        border: none;
        background-color: transparent;
    }

    .img-wrap{
        width: 250px;
        height: 187.5px;
        object-fit: cover;
    }

    .img-wrap > img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
        border: 1px solid rgb(0 0 0 / 10%);
    }

    .txt-box{
        padding: 14px 0px;
    }

    .job{
        color: #333;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
        max-height: 2.4em;
    }

    .company{
        font-size: 14px;
        margin-top: 10px;
        color: #333;
        font-weight: 600;
    }

    .country{
        font-weight: 400;
        color: #999;
        font-size: 14px;
        margin-top: 10px;
    }

    .money{
        margin-top: 10px;
        color: #333;
        font-size: 14px;
        font-weight: 600;
    }

    .response-box{
        border: 1px solid #00aead;
        color: #00aead;
        border-radius: 2px;
        background-color: #fff;
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        height: 19px;
        line-height: 19px;
        margin-top: 8px;
        padding: 0 5px;
    }

    .response{
        /* margin-top: 10px; */
    }
`;

export default JobInfo;