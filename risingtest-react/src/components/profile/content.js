import styled from 'styled-components';
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Content = () => {
    const { userId } = useSelector((state) => state.JobGroupReducer);
    const token = localStorage.getItem("jwt");

    const [userData, setUserData] = useState([]);
    const [selfIntro, setSelfIntro] = useState("");

    useEffect(() => {
        axios.get(`https://dev.zezeserver.shop/app/users/${userId}`,{
            headers: {
                'x-access-token': token,
            }
            })
            .then(res => {
                console.log(res);
                setUserData(res.data);
            })
            .catch(err => console.log(err))
        
        axios.get(`https://dev.zezeserver.shop/app/users/${userId}/profile`,{
            headers: {
                'x-access-token': token,
            }
            })
            .then(res => {
                console.log(res);
                setSelfIntro(res.data.self_introduction);
            })
            .catch(err => console.log(err))
    }, [])

    console.log(selfIntro);

    return(
        <>
            <Wrap>
                <div className="box">
                    <div className="title">프로필</div>
                    <div className="content">
                        <div className="section">
                            <div className="profile-box">
                                <div className="avatar">
                                    <div className="photo">
                                        <div className="icon-camera">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="me">
                                    {userData ? (
                                        userData.map((data) => {
                                            return(
                                                <>
                                                    <div className="name">{data.name}</div>
                                                    <div className="email">{data.email}</div>
                                                    <div className="tel">{data.phoneNumber}</div>
                                                </>
                                            )
                                        })
                                    ) : null}
                                </div>
                                <div className="patch">
                                    <button>기본정보 수정</button>
                                </div>
                                <div className="matchup">
                                    <div className="flex">
                                        <div className="sec">
                                            관심 있음
                                        </div>
                                        <div className="sec num">
                                            0
                                        </div>
                                    </div>
                                    <div className="flex second">
                                        <div className="sec">
                                            열람
                                        </div>
                                        <div className="sec num">
                                            0
                                        </div>
                                    </div>
                                    <div className="flex third">
                                        <div className="sec">
                                            받은 제안
                                        </div>
                                        <div className="sec num">
                                            0
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="banner">
                                <div className="ban-inner first">
                                    <div className="ban-title">입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!</div>
                                    <div>
                                        <button className="ban-btn">
                                            지금 확인하기
                                        </button>
                                    </div>
                                </div>
                                <div className="ban-inner second">
                                    <img src="https://static.wanted.co.kr/career_connect/banner.png" width="164"/>
                                </div>
                            </div>
                            <div className="matchup-form">
                                <div className="form-head">
                                    <div className="head-section">
                                        <span className="update-head">학교·직장등록</span>
                                    </div>
                                    <div className="head-section right">
                                        <span>매치업 서비스 소개</span>
                                    </div>
                                </div>
                                <div className="form-content">
                                    <div className="form-btn">
                                        <div className="form-btn-wrap first">
                                            <span className="wrap-head">학교</span>
                                        </div>
                                        <div className="form-btn-wrap">
                                            <button>
                                                <span>학교명 검색</span>
                                                <span className="btn-wrap-icon"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-btn">
                                        <div className="form-btn-wrap first">
                                            <span className="wrap-head">직장</span>
                                        </div>
                                        <div className="form-btn-wrap">
                                            <button>
                                                <span>직장명 검색</span>
                                                <span className="btn-wrap-icon"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="career-period">
                                        <div className="career-select">
                                            <select name="startYear">
                                                <option disabled hidden selected value="0">YYYY</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                                <option value="2009">2009</option>
                                                <option value="2008">2008</option>
                                                <option value="2007">2007</option>
                                                <option value="2006">2006</option>
                                                <option value="2005">2005</option>
                                                <option value="2004">2004</option>
                                                <option value="2003">2003</option>
                                                <option value="2002">2002</option>
                                                <option value="2001">2001</option>
                                                <option value="2000">2000</option>
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                                <option value="1996">1996</option>
                                                <option value="1995">1995</option>
                                                <option value="1994">1994</option>
                                                <option value="1993">1993</option>
                                                <option value="1992">1992</option>
                                                <option value="1991">1991</option>
                                                <option value="1990">1990</option>
                                                <option value="1989">1989</option>
                                                <option value="1988">1988</option>
                                                <option value="1987">1987</option>
                                                <option value="1986">1986</option>
                                                <option value="1985">1985</option>
                                                <option value="1984">1984</option>
                                                <option value="1983">1983</option>
                                            </select>
                                            <span>.</span>
                                            <select name="startMonth">
                                                <option disabled hidden selected value="0">MM</option>
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">04</option>
                                                <option value="5">05</option>
                                                <option value="6">06</option>
                                                <option value="7">07</option>
                                                <option value="8">08</option>
                                                <option value="9">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            <span> - </span>
                                            <select name="endYear">
                                                <option disabled hidden selected value="0">YYYY</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                                <option value="2009">2009</option>
                                                <option value="2008">2008</option>
                                                <option value="2007">2007</option>
                                                <option value="2006">2006</option>
                                                <option value="2005">2005</option>
                                                <option value="2004">2004</option>
                                                <option value="2003">2003</option>
                                                <option value="2002">2002</option>
                                                <option value="2001">2001</option>
                                                <option value="2000">2000</option>
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                                <option value="1996">1996</option>
                                                <option value="1995">1995</option>
                                                <option value="1994">1994</option>
                                                <option value="1993">1993</option>
                                                <option value="1992">1992</option>
                                                <option value="1991">1991</option>
                                                <option value="1990">1990</option>
                                                <option value="1989">1989</option>
                                                <option value="1988">1988</option>
                                                <option value="1987">1987</option>
                                                <option value="1986">1986</option>
                                                <option value="1985">1985</option>
                                                <option value="1984">1984</option>
                                                <option value="1983">1983</option>
                                            </select>
                                            <span>.</span>
                                            <select name="endMonth">
                                                <option disabled hidden selected value="0">MM</option>
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">04</option>
                                                <option value="5">05</option>
                                                <option value="6">06</option>
                                                <option value="7">07</option>
                                                <option value="8">08</option>
                                                <option value="9">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </div>
                                        <div className="job-check">
                                            <input type="checkbox" />
                                            <span>현재 재직중</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-form">
                                    <div className="intro-form-head">간단 소개글</div>
                                    <div className="intro-form-sub">직무 내용, 경험, 목표 등을 추가해서 더욱 멋진 소개글을 작성해보세요.</div>
                                    <textarea value={selfIntro}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrap>

            <Footer>
                <div className="footer-inner">
                    <button className="option-btn">
                        <span>전문분야 설정</span>
                    </button>
                    <button className="done-btn">
                        작성 완료
                    </button>
                </div>
            </Footer>
        </>
    )
}

const Footer = styled.div`
    height: 81px;
    background-color: #fff;
    position: fixed;
    border-top: 1px solid #e1e2e3;
    bottom:0;
    left:0;
    right:0;

    .footer-inner{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid #222; */
        height: 81px;

        display: flex;
        align-items: center;
        justify-content: end;
    }

    .option-btn{
        background: #fff;
        border: 1px solid #e1e2e3;
        color: #333;
        width: 190px;
        height: 50px;
        border-radius: 3px;
        font-size: 18px;
        font-weight: 600;
        margin-left: 20px;
    }

    .option-btn > span::before{
        content: "\f053";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #333;
        margin-right: 10px;
    }

    .done-btn{
        background-color: #ccc;
        border: 0;
        width: 190px;
        height: 50px;
        border-radius: 3px;color: #fff;
        font-size: 18px;
        font-weight: 600;
        margin-left: 20px;
    }
`;

const Wrap = styled.div`
    padding-top: 100px;
    padding-bottom: 150px;
    
    .box{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid #222; */
    }

    .title{
        font-size: 20px;
        font-weight: 700;
        color: #333;
        margin-bottom: 20px;
    }

    .content{
        /* border: 1px solid red; */
        display: grid;
        grid-template-columns: 250px 790px;
        grid-template-rows: 772.62px;
        column-gap: 20px;
    }

    .section{
        /* border: 1px solid blue; */
    }

    .profile-box{
        padding: 42px 20px 41px;
        border: 1px solid #e1e2e3;
        border-radius: 3px;
        background-color: #fff;
        margin-bottom: 0;

        display:flex;
        flex-direction: column;
    }

    .avatar{
        display:flex;
        justify-content: center;
    }

    .photo{
        background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png), url(https://static.wanted.co.kr/images/profile_default.png);
        display: inline-block;
        position: relative;
        width: 77px;
        height: 77px;
        border-radius: 50%;
        background-size: cover;
        background-position: 50%;
        position: relative;
    }

    .icon-camera{
        position: absolute;
        right: -4px;
        bottom: 0;
        padding: 8px 8px;
        font-size: 16px;
        color: #999;
        line-height: 1;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
    }

    .icon-camera > span::before{
        content: "\f030";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #767676;
    }

    .me{
        text-align: center;
        margin-top: 31px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.07;
        color: #999;
    }

    .name{
        font-size: 18px;
        font-weight: 600;
        color: #333;
        line-height: 1.3;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .email{
        margin-top: 20px;
        line-height: 1.3;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .tel{
        margin-top: 10px;
    }

    .patch{
        display:flex;
        justify-content: center;
        margin: 10px 0px;
    }

    .patch > button{
        width: 160px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #e1e2e3;
        margin: 30px auto 0;
        font-size: 16px;
        line-height: .94;
        color: #333;
        background-color: #fff;
        cursor: pointer;
    }

    .matchup{
        /* border: 1px solid #222; */
        margin-top: 42px;
    }

    .flex{
        display:flex;
    }

    .flex.second{
        margin-top: 23px;
    }

    .flex.third{
        margin-top: 23px;
    }

    .sec{
        flex-grow:1;
        /* border: 1px solid blue; */
    }

    .sec.num{
        display:flex;
        justify-content:end;
        font-size: 18px;
        font-weight: 600;
    }

    .banner{
        background: linear-gradient(90deg,#ddebff -.28%,#b7d8ff);
        width: 100%;
        height: 105px;
        border-radius: 3px;
        margin-bottom: 20px;
        display:flex;
    }

    .ban-inner{
        flex-grow:1;
        /* border: 1px solid blue; */
    }

    .ban-inner.first{
        padding: 24px;
    }

    .ban-title{
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: #5071dc;
    }

    .ban-btn{
        width: 119px;
        height: 32px;
        margin-top: 10px;
        border-radius: 25px;
        background-color: #5071dc;
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        border: 0;
    }

    .ban-inner.second{
        position: relative;
    }

    .ban-inner.second > img{
        position: absolute;
        top: -20px;
        left: -20px;
        width: 164px;
        height: 108px;
    }

    .matchup-form{
        padding: 41px 30px;
        border: 1px solid #e1e2e3;
        border-radius: 3px;
        background-color: #fff;
    }

    .form-head{
        display:flex;
    }

    .head-section{
        flex-grow:1;
        /* border: 1px solid blue; */
    }

    .head-section.right{
        text-align:right;
    }

    .head-section.right > span{
        font-size: 16px;
        font-weight: 400;
        color: #999;
    }

    .head-section.right > span::after{
        content: "\f05a";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #999;
        margin-left: 5px;
    }
    
    .update-head{
        color: #333;
        font-size: 20px;
        font-weight: 600;
        line-height: 1;
    }

    .form-content{
        margin-top: 43px;
        /* border: 1px solid red; */
    }

    .form-btn{
        padding: 15px 0px;
        display:flex;
    }

    .form-btn-wrap{
        flex-grow:1;
        /* border: 1px solid red; */
        
        display:flex;
        align-items: center;
    }

    .form-btn-wrap.first{
        width: 150px;
    }

    .form-btn-wrap > button{
        border: 0;
        border-bottom: 1px solid #e1e2e3;
        padding: 12px 0;
        background-color: #fff;
        width: 578px;
        text-align: left;
        color: #ccc;
        font-size: 16px;
        display:flex;
        align-items: center;
    }

    .form-btn-wrap > button > span{
        flex-grow:1;
        /* border: 1px solid red; */
    }

    .wrap-head{
        padding-right: 10px;
        color: #999;
        font-size: 16px;
    }

    .btn-wrap-icon{
        text-align: right;
    }

    .btn-wrap-icon::before{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #767676;
        margin-right: 5px;
    }

    .career-period{
        margin-top: 5px;
        margin-bottom: 25px;
        padding-left: 150px;
    }

    .career-select > select{
        appearance: none;
        border: none;
        font-size: 14px;
        font-weight: 400;
        background-color: transparent;
        color: #ccc;
    }

    .career-select > select > option{
        color: #333;
    }

    .career-select > span{
        margin: 0 4px;
        color: #ccc;
    }

    .job-check{
        margin-top: 14px;
    }

    .job-check > span{
        font-size: 14px;
        font-weight: 400;
        color: #999;
    }

    .intro-form{
        margin-top: 15px;
    }

    .intro-form-head{
        font-size: 16px;
        font-weight: 400;
        color: #999;
        margin-bottom: 11px;
    }

    .intro-form-sub{
        font-size: 14px;
        font-weight: 400;
        line-height: 1.57;
        color: #ccc;
        margin-bottom: 17px;
    }

    .intro-form > textarea{
        font-family: Pretendard,Pretendard JP,Pretendard Std,-apple-system,system-ui,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,Apple SD Gothic Neo,Nanum Gothic,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
        width: 685px;
        height: 192px;
        border-radius: 3px;
        border: 1px solid #e1e2e3;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.63;
        vertical-align: top;
        color: #333;
        outline: none;
    }
`;

export default Content;