import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const CateName =styled.div`
    border: ${props=>props.click ? "1px solid #36f" : "1px solid f2f4f7"};
    background-color: ${props=>props.click? "#fff" : "#f2f4f7"};
    color: ${props=>props.click? "#36f" : "#333"};
    font-weight: ${props=>props.click ? "900" : "400"};
`;

export const Wrap = styled.div`
    /* border: 1px solid #222; */
    overflow: visible;
    width: 1060px;
    margin: 0 auto;

    .box{
        background: #fff;
        padding-top: 40px;

        display: flex;
        align-items: center;
    }

    .jobcate-drop{
        position: absolute;
        background-color: #fff;
        top: 40px;
        left: -1px;
        width: 190px;
        height: 641.2px;
        background-color: #fff;
        border: 1px solid #e1e2e3;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
        border-radius: 5px;
        z-index: 88;
        padding: 15px 0;

        overflow-y: auto;
    }

    .jobcate-drop::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    
    .jobgroup-drop{
        position: absolute;
        background-color: #fff;
        top: 130px;
        left: 315px;
        width: 850px;
        /* height: 440.4px; */
        background-color: #fff;
        border: 1px solid #e1e2e3;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
        border-radius: 5px;
        z-index: 88;
        padding-top: 25px;
    }

    .jobgroup-drop > p {
        color: #666;
        font-weight: 400;
        font-size: 12px;
        line-height: 14.4px;
        margin-bottom: 10px;
        padding-left: 25px;
    }

    .jobgroup-drop > hr {
        border: 0;
        border-top: 1px solid #e1e2e3;
    }

    .jobcate-list{
        padding: 11px 25px 9px;
        background-color: #fff;
        font-size: 16px;
        text-align: left;
        letter-spacing: -1.5px;

        &:hover{
            background-color: #f8f8f8;
        }
    }

    .cate > button{
        background-color: transparent;
        border: none;
        cursor: pointer;

        display:flex;
        align-items: center;
    }

    .title{
        padding-top: 3px;
        margin-right: 15.5px;
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
        color: #333;
    }

    .select-box{
        position: relative;
    }

    .select-box > .under-btn{
        position: relative;
        border: 1px solid #e1e2e3;
        border-radius: 100px;
        background-color: #fff;
        width: 26px;
        height: 26px;
        transition: all ease 0.3s;
        flex-shrink: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover{
            border: 1px solid #767676;
        }
    }

    .select-box.open > .under-btn{
        transform: rotate(180deg);
        transition: all ease 0.3s;
        border: 1px solid #767676;
    }

    .jobgroup-select{
        position: relative;
        border: 0;
        background-color: transparent;
        margin-left: 5px;
    }

    .jobgroup-select > .under-group-btn{
        position: relative;
        border: 1px solid #e1e2e3;
        border-radius: 100px;
        background-color: #fff;
        width: 26px;
        height: 26px;
        transition: all ease 0.3s;
        flex-shrink: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover{
            border: 1px solid #767676;
        }
    }

    .jobgroup-select.open > .under-group-btn{
        transform: rotate(180deg);
        transition: all ease 0.3s;
        border: 1px solid #767676;
    }

    .jobgroup-done-btn{
        width: 825px;
        padding-bottom: 16px;
        padding-top: 10px;

        text-align: right;
    }

    .jobgroup-done-btn > button{
        width: 160px;
        padding: 0 27px;
        border-radius: 25px;
        font-weight: 700;
        line-height: normal;
        color: #fff;
        background-color: #36f;
        border: none;
        height: 40px;
        font-size: 15px;
        cursor: pointer;
}

    .job-option{
        font-size: 24px;
        line-height: 29px;
        font-weight: 400;
        color: #aaa;
    }

    .job-option.selected{
        color: #333;
    }

    .job-option::before{
        content: "|";
        font-size: 28px;
        line-height: 29px;
        padding: 3px 24px 0;
        color: #ececec;
    }

    .select{
        padding-top: 20px;
        /* border: 1px solid #222; */

        display:flex;
    }

    .section{
        /* border: 1px solid red; */
        flex-grow: 1;
    }

    .section.right{
        display: flex;
        justify-content: end;
    }

    .btn{
        height: 40px;
        padding: 0 15px!important;
        margin-bottom: 0;
        border-radius: 5px;
        border: 1px solid #ececec;
        position: relative;
        background: #fff;
        color: #333;
        font-size: 13px;
        font-weight: 400;
        margin-right: 10px;
        cursor: pointer;
        position: relative;

        &:hover{
            background-color: #f8f8f8;
        }
    }

    .annual-drop{
        position: absolute;
        width: 468px;
        height: 174px;
        background-color: #fff;
        z-index: 55;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
        border-radius: 5px;
        border: 1px solid #e1e2e3;

        left: 434px;
        top: 190px;
    }

    .skill-drop{
        width: 570px;
        border: 1px solid #e1e2e3;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%);

        position: absolute;
        z-index: 55;
        
        top: 190px;
        left: 550px;
    }

    .skill-drop-top{
        padding: 26px 20px 10px 20px;
    }

    .skill-drop-top > hr{
        border:0;
        border-top: 1px solid #e1e2e3;
    }

    .footer{
        /* border: 1px solid #222; */
        text-align: right;
    }

    .footer > button{
        height: 30px;
        font-size: 14px;
        background-color: transparent;
        border: 0;
        font-weight: 600;
        color: #767676;
        padding: 0px 5px;
        cursor: pointer;
    }

    .done-btn{
        color: #36f !important;
    }

    .skill-drop-input > input{
        width: 480px;
        padding: 14px 20px;
        border: 1px solid #ccc;
        border-radius: 25px;
        background: #fff;
        color: #ccc;
        font-size: 13px;
        font-weight: 600;
        line-height: 16px;

        &:focus{
            outline: 1px solid #36f;
        }
    }
    
    .skill-drop-input{
        position: relative;
    }

    .skill-drop-icon{
        position: absolute;
        top: 12px;
        right: 30px;
        display: inline-grid;
        background-color: #fff;
        z-index: 20;
        align-items: center;
        height: 24px;
        padding-left: 15px;
        border-left: 1px solid #ececec;
    }

    .popular-skill{
        margin: 30px 0 14px;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
    }

    .skill-name{
        height: 32px;
        padding: 0 14px;
        border: 1px solid #f2f4f7;
        border-radius: 16px;
        margin: 0;
        background: #f2f4f7;
        color: #333;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        margin: 0px 10px 10px 0px;
    }

    .jobgroup-name{
        height: 32px;
        padding: 0 14px;
        /* border: 1px solid #f2f4f7; */
        border-radius: 16px;
        margin: 0;
        /* background: #f2f4f7; */
        /* color: #333; */
        font-size: 13px;
        /* font-weight: 400; */
        line-height: 16px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        margin: 0px 10px 10px 0px;
    }

    .jobgroup-name-wrap{
        padding: 0px 25px;
    }

    .skill-name > span{
        margin-left: 4px;
    }

    .selected-skill{
        width: 495px;
        min-height: 102px;
        padding: 14px;
        border-radius: 5px;
        background-color: #f8f8f8;
    }

    .skill-guide{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: #939393;
    }

    .btn > svg {
        transition: all ease 0.3s;
    }

    .btn.open > svg {
        transform: rotate(180deg);
        transition: all ease 0.3s;
    }

    .res{
        height: 40px;
        padding: 0 15px!important;
        margin-bottom: 0;
        border-radius: 5px;
        border: 1px solid #ececec;
        position: relative;
        background: #fff;
        color: #333;
        font-size: 13px;
        position: relative;

        cursor: pointer;
    }

    .res.open{
        border-radius: 5px 5px 0 0;
    }

    .res > svg {
        transition: all ease 0.3s;
    }

    .res.open > svg {
        transform: rotate(180deg);
        transition: all ease 0.3s;
    }

    .res-drop{
        position: absolute;
        top: 38px;
        left: -1px;
        z-index: 55;
        width: 109px;
        background-color: #fff;
        border: 1px solid #ececec;
        border-radius: 0 0 4px 4px;
    }

    .res-drop-option{
        padding: 0 0 0 16px;
        height: 41px;
        display: flex;
        align-items: center;
    }

    .res-drop-option.first{
        border-bottom: 1px solid #ececec;
    }

    .res-drop-option.second{
        border-bottom: 1px solid #ececec;
    }

    .category{
        font-size: 14px;
        font-weight: 400;
        letter-spacing: normal;
        color: #333;
        margin-right: 15px;
    }

    .option{
        color: #36f!important;
        font-weight: 600;
        margin-right: 0;
        overflow: hidden;
    }

    .option.all{
        margin-right: 5px;
    }

    .scroll{
        display: flex;
        overflow-x: hidden;
    }
`;

export const Hr = styled.div`
    width: 1060px;
    margin: 25px auto;

    .line{
        background-color: #ececec;
        height:1px;
        border:0;
    }
`;

export const OutHr = styled.div`
    width: 100vw;
    margin-top: 25px;
    margin-bottom: 30px;

    .line{
        background-color: #ececec;
        height:2px;
        border:0;
    }
`;

export const List = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    overflow-y: visible;

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
        grid-template-rows: 343.43px 343.43px;
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

export const StyledSlide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
        /* border: 1px solid #222; */
        width: 1300px;
        height: 34px;
    }

    .slick-list::after{
        background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%);
    }

    .slick-slide{
        /* border: 1px solid red; */
        margin-right: 10px;
        width: 230px !important;
        height: 32px;
        position: relative;
    }

    .slick-slide img{
        display: inline-block !important;
    }

    .tag{
        height: 32px;
        position: absolute;
        letter-spacing: -1px;
        width: 100%;
        /* border: 1px solid #222; */
        border-radius: 20px;
        border: none;
        padding: 0px 14px;
        cursor: pointer;

        display:flex !important;
        align-items: center;
        justify-content: center;

        &:hover{
            border: 1px solid #36f;
        }
    }

    .tag.green{
        background: rgb(242, 251, 245);
    }

    .tag.blue{
        background: rgb(243, 249, 254);
    }

    .tag.violet{
        background: rgb(243, 242, 251);
    }

    .tag.yellow{
        background: rgb(246, 248, 238);
    }

    .tag.pink{
        background: rgb(247, 242, 249);
    }

    .tag.mint{
        background: rgb(238, 250, 249);
    }

    .slick-track{
        display: flex;
    }
    
    .slick-prev::before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
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

    .slick-next::before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
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
        top: 15px;
        left: 0;
        z-index: 55;
    }

    .slick-next{
        right:255px;
        top: 15px;
    }

    .slick-prev.slick-disabled::before{
        opacity: 0;
    }

    .slick-next.slick-disabled::before{
        opacity: 0;
    }
`;