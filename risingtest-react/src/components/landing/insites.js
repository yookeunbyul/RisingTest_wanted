import styled from 'styled-components';
import { ReactComponent as Guide } from '../../svg/ic-guide.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReactComponent as More } from '../../svg/ic-menu.svg';
import axios from "axios";
import { useState, useEffect } from "react";

const Insites = ({children, InsitesList, tagId}) => {
    const [postList, setPostList] = useState("");
    const token = localStorage.getItem("jwt");

    console.log(InsitesList);
    console.log(tagId);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3
    };

    useEffect(() => {
        if(token){
            axios.get("https://prod.zezeserver.shop/app/posts",{
            headers: {
                'x-access-token': token,
            }
            })
            .then(res => {
                console.log(res);
                setPostList(res.data.insitePosts);
            })
            .catch(err => console.log(err))
        } else {
            axios.get("https://prod.zezeserver.shop/app/posts",{
            })
            .then(res => {
                console.log(res);
                setPostList(res.data.insitePosts);
            })
            .catch(err => console.log(err))
        }
        
    }, [])

    return(
        <>
            <Section>
                <div className="title-wrap">
                    <div className="title">나에게 필요한 커리어 인사이트</div>
                    <button>
                        <Guide />
                    </button>
                </div>
                <div className="scroll">
                    <StyledSlide {...settings}>
                        {children}
                    </StyledSlide>
                    <button className="more-btn">
                        <More />
                    </button>
                </div>
                <div className="post">
                    {tagId ? (
                        <>
                            {InsitesList ? (
                                InsitesList.map((post) => {
                                    return(
                                        <div key={post.postName}>
                                            <ImgWrap>
                                                <Thumbnail src={post.postThumbnailUrl} />
                                            </ImgWrap>
                                            <Title>{post.postName}</Title>
                                            <Sub>{post.postContent}</Sub>
                                            <Writer>
                                                <span>
                                                    <Logo src={post.platformImgUrl} />
                                                </span>
                                                <Name>{post.writer}</Name>
                                            </Writer>
                                        </div>
                                    )
                                })
                            ) : null}
                            {InsitesList ? (
                                InsitesList.map((post) => {
                                    return(
                                        <div key={post.postName}>
                                            <ImgWrap>
                                                <Thumbnail src={post.postThumbnailUrl} />
                                            </ImgWrap>
                                            <Title>{post.postName}</Title>
                                            <Sub>{post.postContent}</Sub>
                                            <Writer>
                                                <span>
                                                    <Logo src={post.platformImgUrl} />
                                                </span>
                                                <Name>{post.writer}</Name>
                                            </Writer>
                                        </div>
                                    )
                                })
                            ) : null}
                        </>
                    ) : (
                        <>
                            {postList ? (
                                postList.map((post) => {
                                    return(
                                        <div key={post.postName}>
                                            <ImgWrap>
                                                <Thumbnail src={post.postThumbnailUrl} />
                                            </ImgWrap>
                                            <Title>{post.postName}</Title>
                                            <Sub>{post.postContent}</Sub>
                                            <Writer>
                                                <span>
                                                    <Logo src={post.platformImgUrl} />
                                                </span>
                                                <Name>{post.writer}</Name>
                                            </Writer>
                                        </div>
                                    )
                                })
                            ) : null}
                            {postList ? (
                                postList.map((post) => {
                                    return(
                                        <div key={post.postName}>
                                            <ImgWrap>
                                                <Thumbnail src={post.postThumbnailUrl} />
                                            </ImgWrap>
                                            <Title>{post.postName}</Title>
                                            <Sub>{post.postContent}</Sub>
                                            <Writer>
                                                <span>
                                                    <Logo src={post.platformImgUrl} />
                                                </span>
                                                <Name>{post.writer}</Name>
                                            </Writer>
                                        </div>
                                    )
                                })
                            ) : null}
                        </>
                    )}
                </div>
                <div className="more-box">
                    <MoreContent>
                        <span className="btn-text">더 많은 콘텐츠 보기</span>
                    </MoreContent>
                </div>
            </Section>
        </>
    );
}

const Section = styled.section`
    padding: 60px 0px 0px 0px;
    position: relative;
    scroll-margin-top: 4px;
    /* border: 1px solid blue; */
    text-align: center;

    width: 1060px;
    margin: 0 auto;

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
    }

    .title-wrap > button{
        border: none;
        background-color: transparent;
        margin-top: 3px;
    }

    .scroll {
        margin: 30px 0;
        /* border: 1px solid violet; */
        width: 1060px;
        /* overflow: hidden; */
        display: flex;
    }

    .more-btn{
        width: 50px;
        height: 50px;
        border: 1px solid #e1e2e3;
        border-radius: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
        color: #939393;
        background-color: #fff;
        margin-left: 20px;
    }

    .post{
        /* border: 1px solid violet; */
        display: grid;
        grid-template-columns: 250px 250px 250px 250px;
        grid-template-rows: 355px;
        column-gap: 19px;
        row-gap: 30px;
    }

    .more-box{
        margin: 50px 0px;
    }
`;

const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        width: 990px;
        /* border: 1px solid #222; */
        height: 50px;
    }

    .slick-slide{
        margin-right: 10px;
    }

    .slick-track{
        display: flex;
    }
    
    .slick-prev:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        content: "\f104";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        -webkit-font-smoothing: antialiased;
        padding: 10px 15px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }

    .slick-next:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        content: "\f105";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        -webkit-font-smoothing: antialiased;
        padding: 10px 15px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }

    .slick-prev{
        top: 23px;
        z-index: 99;
    }

    .slick-next{
        right:15px;
        top: 23px;
        
    }

    .slick-prev.slick-disabled::before{
        opacity: 0;
    }

    .slick-next.slick-disabled::before{
        opacity: 0;
    }
`;

const ImgWrap = styled.div`
    width: 250px;
    height: 175px;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    outline: 1px solid rgba(0,0,0,.05);
`;

const Title = styled.div`
    text-align: left;
    margin: 17px 0px 8px 0px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #333;
`;

const Sub = styled.div`
    text-align: left;
    font-weight: 600;
    font-size: 13px;
    line-height: 21px;
    color: #aaa;
`;

const Writer = styled.div`
    text-align: left;
    display: flex;
    align-items: center;

    margin-top: 12px;
`;

const Logo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ececec;
`;

const Name = styled.span`
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #aaa;
    margin-left: 10px;
`;

const MoreContent = styled.button`
    width: 345px;
    height: 50px;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #e1e2e3;
    border-radius: 30px;
    font-weight: 900;

    .btn-text::after{
        content: "\f078";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        margin-left: 5px;
    }
`;

export default Insites;