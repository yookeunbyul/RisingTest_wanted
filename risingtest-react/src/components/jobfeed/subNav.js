import styled from 'styled-components';
import { ReactComponent as Profile } from '../../svg/ic-profile.svg';
import { ReactComponent as Match } from '../../svg/ic-matchup.svg';

const SubNav = () => {
    return(
        <Wrap>
            <div className="box">
                <div className="section">
                    <div className="left-menu">
                        <button>
                            <Profile />
                            <span>내 프로필</span>
                        </button>
                    </div>
                </div>
                <div className="section">
                    <div className="right-menu">
                        <button>
                            <Match />
                            <span>매치업</span>
                        </button>
                    </div>
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    /* border: 1px solid #222; */
    padding: 60px 0px 85px 0px;

    .box{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid blue; */

        display: flex;
        flex-direction: row;
    }

    .section{
        /* border:1px solid red; */
        flex-grow:1;
        flex-basis: 0;

        width: 529.5px;
        height: 80px;
    }

    .left-menu{
        width: 100%;
        height: 100%;
        background-color: #f2f5ff;
        border-top-left-radius: 38.5px;
        border-bottom-left-radius: 38.5px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .right-menu{
        width: 100%;
        height: 100%;
        border-top-right-radius: 38.5px;
        border-bottom-right-radius: 38.5px;
        background-color: #f2fbf5;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .left-menu > button{
        font-size: 18px;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .left-menu > button > span{
        margin-left: 10px;
    }

    .right-menu > button{
        font-size: 18px;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .right-menu > button > span{
        margin-left: 10px;
    }
`;

export default SubNav;