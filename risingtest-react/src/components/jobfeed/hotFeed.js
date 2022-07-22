import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as Bookmark } from '../../svg/ic-bookmark.svg';

const HotFeed = () => {
    const [hotList, setHotList] = useState([]);

    useEffect(() => {
        axios.get("https://zezeserver.shop/app/employment/mainpage",{
            })
            .then(res => {
                console.log(res);
                setHotList(res.data.result.hotPosition);
            })
            .catch(err => console.log(err))
    }, [])

    // console.log(hotList);

    return(
        <Section>
            <div className="title-wrap">
                <div className="title">요즘 뜨는 포지션</div>
            </div>
            <div className="position-wrap" >
                {hotList ? hotList.map((item, index) => {
                    return(
                        <>
                            <div className="head" key={item.companyId}>
                                <button><Bookmark /></button>
                                <div className="img-wrap">
                                    <img alt="" src={item.employmentImgUrl} />
                                </div>
                                <div className="txt-box">
                                    <div className="job">{item.jobName}</div>
                                    <div className="company">{item.companyName}</div>
                                    {item.responseRate ? (
                                        <>
                                            <div className="response-box">
                                                <div className="response">{item.responseRate}</div>
                                            </div>
                                        </>
                                    ) : null}
                                    <div className="country">{item.city}·{item.country}</div>
                                    <div className="money">채용 보상금 1,000,000원</div>
                                </div>
                            </div>
                        </>
                    )
                }) : null}
            </div>
        </Section>
    );
}

const Section = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding: 70px 0px 80px 0px;

    .title-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title{
        font-size: 22px;
        line-height: 1.33;
        font-weight: 700;
        color: #333;

        padding-bottom: 5px;
    }

    .a-wrap{
        text-align: center;
    }

    .a-wrap > a {
        font-weight: 500;
        line-height: normal;
        vertical-align: middle;
        color: #767676!important;
        font-size: 15px;
    }

    .a-wrap > a::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #767676;
        margin-left: 5px;
    }

    .slide{
        margin: 30px 0px 0px 0px;
        /* border: 1px solid violet; */
        width: 1060px;
        display: flex;
    }

    .icon-wrap{
        display: flex;
        /* border: 1px solid #222; */
        margin: 10px 0px;
    }

    .icon-box{
        color: #ff9100;
        border-color: #ff9100;
        border: 1px solid;
        height: 20px;
        border-radius: 2px;
    }

    .icon-box > span {
        font-size: 11px;
        font-weight: 700;
        line-height: normal;
        padding: 0 6px;
    }

    .event-title{
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }

    .title{
        margin-top: 16px;
        font-size: 18px;
        font-weight: 700;
        line-height: 21.6px;
        color: #333
    }

    .intro{
        margin: 8px 0px;
        font-size: 14px;
        line-height: 16.8px;
        font-weight: 500;
        color: #939393;
    }

    .company-img{
        display: inline;
        margin-right: 8px;
        margin-top: 8px;
        border: 1px solid rgba(0,0,0,.05);
    }

    .position-wrap{
        margin-top: 25px;
        /* border: 1px solid #222; */

        display: grid;
        grid-template-columns: 250px 250px 250px 250px;
        grid-template-rows: 320.43px;
        column-gap: 19px;
    }

    .head{
        position: relative;
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

export default HotFeed;