import styled from 'styled-components';
import { ReactComponent as Info } from '../../svg/ic-info.svg';
import { ReactComponent as Profile } from '../../svg/ic-profile.svg';
import { ReactComponent as Match } from '../../svg/ic-matchup.svg';
import { ReactComponent as Money } from '../../svg/ic-money.svg';

const Information = () => {
    return(
        <Wrap>
            <div className="box">
                <div className="title-wrap">
                    <div className="title">채용 정보를 찾고 계셨나요?</div>
                </div>
                <div className="menu">
                    <div className="section first">
                        <div className="icon"><Info /></div>
                        <div className="txt">채용공고</div>
                    </div>
                    <div className="section second">
                        <div className="icon"><Profile /></div>
                        <div className="txt">내 프로필</div>
                    </div>
                    <div className="section third">
                        <div className="icon"><Match /></div>
                        <div className="txt">매치업</div>
                    </div>
                    <div className="section four">
                        <div className="icon"><Money /></div>
                        <div className="txt">직군별 연봉</div>
                    </div>
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    /* border: 1px solid #222; */
    padding: 80px 0px;

    .box{
        /* border: 1px solid blue; */
    }

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
        margin-bottom: 30px;
    }

    .menu{
        width: 1060px;
        margin: 0 auto;
        border-top: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
        border-radius: 4px;
        color: #333;

        display: flex;
        flex-direction: row;
    }

    .section{
        /* border-right: 1px solid #ececec; */
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .section.first{
        border-left: 1px solid #ececec;
        border-radius: 4px;
    }

    .section.second{
        border-right: 1px solid #ececec;
        border-left: 1px solid #ececec;
    }

    .section.third{
        border-right: 1px solid #ececec;
    }

    .section.four{
        border-right: 1px solid #ececec;
        border-radius: 4px;
    }

    .txt{
        font-weight: 900;
        margin: 15px 0px;
    }

    .txt::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        margin-left: 5px;
    }

    .icon{
        padding-top: 15px;
    }
`;

export default Information;