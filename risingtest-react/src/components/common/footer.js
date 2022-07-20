import styled from 'styled-components';

const Footer = () => {
    return(
        <Wrap>
            <Box>
                <Section grow="1">
                    <img alt="" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
                    <div className="intro">기업소개</div>
                    <div>이용약관</div>
                    <div>개인정보 처리방침</div>
                    <div>고객센터</div>
                </Section>
                <Section grow="1.5" align="end">
                    <img alt="" className="icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100" />
                    <img alt="" className="icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100" />
                    <img alt="" className="icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100" />
                    <img alt="" className="icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100" />
                    <img alt="" className="icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100" />
                    <img alt="" className="icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100" />
                    <img alt="" className="icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100" />
                    <img alt="" className="icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100" />
                </Section>
            </Box>
            <Second>
                <div className="wrap">
                    <p>(주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147</p>
                    <p>유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118</p>
                    <p>© Wantedlab, Inc.</p>
                </div>
                <div className="wrap">
                    <select>
                        <option value="KR">한국 (한국어)</option>
                        <option value="JP">日本 (日本語)</option>
                        <option value="WW">Worldwide (English)</option>
                        <option value="SG">Singapore (English)</option>
                    </select>
                </div>
            </Second>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    border: 1px solid #ececec;
    padding: 18px 0px 65px 0px;
`;

const Second = styled.div`
    width: 1060px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    padding-top: 25px;

    .wrap{
        /* border: 1px solid red; */
        flex-grow: 1;
    }

    .wrap > p {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.6666666667em;
        color: #767676;
    }

    .wrap > select {
        width: 100%;
        height: 40px;
        background: #f2f4f7;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        line-height: 2.1;
        color: #717171;
        padding: 0 45px;
    }
`;

const Box= styled.div`
    width: 1060px;
    border-bottom: 1px solid #ececec;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
`;

const Section = styled.div`
    /* border:1px solid blue; */
    flex-grow: ${props=>props.grow};
    justify-content: ${props=>props.align};

    display: flex;
    align-items: center;
    padding: 15px 0px;

    div{
        margin-right: 30px;
    }

    .intro{
        margin-left: 45px;
    }

    .icon{
        margin-left: 15px;
    }
`;

export default Footer;