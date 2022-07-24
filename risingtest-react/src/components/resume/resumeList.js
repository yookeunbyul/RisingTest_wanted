import styled from 'styled-components';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const ResumeList = () => {
    const dropRef = useRef();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    //Life Cycle 선언
    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);

        return() => {
            document.removeEventListener('mousedown', clickOutside);
        };
    });

    //함수 선언
    const clickOutside = event => {
        if (open && !dropRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    const onWriteClick = () => {
        navigate(`/resume/write`);
    }

    const onClick = () => {
        setOpen(!open);
    }
    return(
        <Wrap>
            <div className="box">
                <div className="head">
                    <div className="section left">
                        최근 문서
                    </div>
                    <div className="section right">
                        <span>원티드 이력서 소개</span>
                    </div>
                </div>
                <div className="list">
                    <div className="resume upload" onClick={onWriteClick}>
                        <div className="btn">
                            <span></span>
                        </div>
                        <p>새 이력서 작성</p>
                    </div>
                    <div className="resume upload">
                        <div className="file-btn">
                            <span></span>
                        </div>
                        <p>파일 업로드</p>
                    </div>
                    <div className="resume item">
                        <div className="name">실비아 1</div>
                        <div className="day">2022.07.23</div>
                        <div className="under">
                            <div className="menu">
                                <div className="lang">한</div>
                                <div className="write">작성 중</div>
                            </div>
                            <div className="menu icon">
                                <span onClick={onClick} ref={dropRef}>
                                    {open && 
                                        <>
                                            <div className="drop">
                                                <button>이름 변경</button>
                                                <button>다운로드</button>
                                                <button>삭제</button>
                                            </div>
                                        </>
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    background-color: #f8f8f8;
    height: 94.5vh;
    padding-top: 50px;

    .box{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid #2222 */
    }

    .head{
        display: flex;
        flex-direction: row;
        padding-top: 30px;
        margin-bottom: 20px;
    }

    .section{
        flex-grow: 1;
    }

    .section.left{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4;
    }

    .section.right{
        text-align: right;
        color: #36f!important;
        font-size: 16px;
        font-weight: 600;
    }

    .section.right > span::after{
        content: "\f05a";
        font-family: "Font Awesome 5 Free";
        font-weight: 600;
        line-height: 1;
        color: #36f;
        margin-left: 5px;
    }

    .list{
        /* border: 1px solid #222; */

        display: grid;
        grid-template-columns: 248px 248px 248px 248px;
        grid-template-rows: 188px;
        column-gap: 22px;
        row-gap: 22px;
    }

    .resume{
        border: 1px solid #dbdbdb;
        background-color: #fff;
        cursor: pointer;
    }

    .resume.upload{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .btn{
        width: 74px;
        height: 74px;
        background-color: #36f;
        color: #fff;
        border-radius: 50%;

        display:flex;
        align-items: center;
        justify-content: center;
    }

    .file-btn{
        width: 74px;
        height: 74px;
        background-color: #e1e2e3;
        color: #666;
        border-radius: 50%;

        display:flex;
        align-items: center;
        justify-content: center;
    }

    .resume.upload > p {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: center;
        color: #333;
        margin: 20px 0 0;
    }

    .btn > span::after{
        content: "\f24d";
        font-family: "Font Awesome 5 Free";
        font-weight: 300;
        line-height: 1;
        font-size: 24px;
        color: #fff;
    }

    .file-btn > span::after{
        content: "\f35d";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        font-size: 24px;
        color: #fff;
    }

    .under{
        margin-top: 80px;
        width: 247px;
        height: 41px;
        border-top: 1px solid #dbdbdb;

        display:flex;
        flex-direction: row;
    }

    .menu{
        flex-grow: 1;
        /* border: 1px solid #222; */

        display: flex;
        align-items: center;
    }

    .menu.icon{
        display: flex;
        justify-content: end;
    }

    .resume.item{
        padding-top: 20px;
    }

    .menu > span::before{
        content: "\f142";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #999999;
        margin-right: 20px;
        cursor: pointer;
    }

    .menu> span {
        position: relative;
    }

    .name{
        padding-left: 20px;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #999999;
    }

    .day{
        padding-left: 20px;
        color: #999999;
    }

    .lang{
        border: 1px solid #999;
        color: #999;
        width: 20px;
        height: 20px;
        border-radius: 2px;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        margin-right: 10px;
        margin-left: 20px;
    }

    .write{
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: normal;
        text-align: left;
        color: #999999;
    }

    .drop{
        width: 160px;
        background-color: #fff;
        top: 15px;
        border: 1px solid #d2d2d2;
        right: 12px;
        position: absolute;
        box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
        padding: 5px 0px;

        display: flex;
        flex-direction: column;
    }

    .drop > button{
        text-align: left;
        border:none;
        background-color: transparent;
        padding: 3px 20px;
        cursor: pointer;
    }
`;
export default ResumeList;