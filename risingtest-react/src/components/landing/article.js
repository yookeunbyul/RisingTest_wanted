import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect } from "react";

const Article = () => {
    const [articleList, setArticleList] = useState("");

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    useEffect(() => {
        axios.get("https://zezeserver.shop/app/posts",{
            })
            .then(res => {
                console.log(res);
                setArticleList(res.data.articlePosts);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <Section>
            <div className="title-wrap">
                <div className="title">3분만에 읽는 Wanted+ 아티클</div>
            </div>
            <div className="a-wrap">
                <a href="https://www.wanted.co.kr/events?sort=deadline&label=article&payable=all">아티클 전체보기</a>
            </div>
            <div className="slide">
                <StyledSlide {...settings}>
                    {articleList ? (
                        articleList.map((article) => {
                            return(
                                <div key={article.postId}>
                                    <ImgWrap>
                                        <Thumbnail src={article.postThumbnailUrl} />
                                    </ImgWrap>
                                    <Title>{article.title}</Title>
                                    <Tag>{article.postTags.map(v=>v.name)}</Tag>
                                </div>
                            )
                        })
                    ) : null}
                </StyledSlide>
            </div>
        </Section>
    );
}

const Section = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding: 50px 0px;

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

    .a-wrap{
        text-align: center;
        margin: 5px 0px;
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
`;

const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        width: 1060px;
        /* border: 1px solid #222; */
        height: 290px;
    }

    .slick-slide{
        margin-right: 20px;
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
        padding: 5px 10px;
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
        padding: 5px 10px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }

    .slick-prev{
        top: -60px;
        z-index: 66;
        left: 0;
    }

    .slick-next{
        right:15px;
        top: -60px;
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
    margin-top: 17px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
`;

const Tag = styled.div`
    font-size: 12px;
    font-weight: 900;
    color: #333;
    margin-top: 13px;
`;



export default Article;