import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { closePWMoAction } from "../../store/actions/passwordModal";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

const Password = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const localEmail = localStorage.getItem("email");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(localEmail);

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = (data) => {
        axios.post("https://prod.zezeserver.shop/app/login",{
            email: `${email}`,
            password: `${password}`,
        })
        .then(res => {
            console.log(res.data.result.jwt);
            window.localStorage.setItem("jwt", res.data.result.jwt);
            navigate(`/`);
        })
        .catch(err => console.log(err))

        closeMoRedux();
    };

    const closeMoRedux = () => {
        dispatch(closePWMoAction());
    };

    return(
        <Outline>
            <div className="section">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="label-wrap">
                            <label className="style-label" htmlFor="userPassword">비밀번호</label>
                        </div>
                        <Input
                            type="password"
                            name="userPassword"
                            placeholder="비밀번호를 입력해 주세요."
                            id="userPassword"
                            isError={errors.password}
                            {...register("password", {
                                required: "영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.",
                                minLength: {
                                    value: 8
                                },
                            })}
                            value={password}
                            onChange={onPasswordChange}
                        />
                        <button className="input-btn" type="submit">
                            로그인
                        </button>
                        <div className="password-option">비밀번호 초기화/변경</div>
                </form>
            </div>
        </Outline>
    )
}

const Outline = styled.div `
    padding: 0px 10px;

    .password-option{
        /* border: 1px solid #222; */
        text-align: center;
        font-size: 14px;
        color: #36f;
        font-weight: 600;
    }

    .input-btn{
        align-items: center;
        width: 100%;
        height: 54px;
        border: 0;
        border-radius: 27px;
        background-color: #36f;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        margin: 20px 0px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .label-wrap{
        padding-bottom: 14px;
    }

    .section{
        margin-bottom: 25px;
    }

    .style-label{
        font-size: 14px;
        font-weight: 400;
        color: #767676;
    }

    .style-input{
        width: 318px;
        height: 50px;
        padding-right: 15px;
        padding-left: 15px;
        border-radius: 5px;
        border: ${props=>props.isError ? "1px solid #fe415c" : "1px solid #e1e2e3"};
        background-color: #fff;
        font-size: 15px;
        color: #333;

        &:focus{
        border: 1px solid #36f;
        outline: none;
        }  
    }

    .phone-wrap{
        margin-bottom: 10px;
        position: relative;
        flex: 1 1;
        line-height: 50px;
        padding: 0 15px;
        height: 50px;
        font-size: 15px;
        border-radius: 5px;
        border: 1px solid #e1e2e3;
        color: #333;
    }

    .style-select{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 15px;
        height: 50px;
        font-size: 15px;
        border-radius: 5px;
        border: 1px solid #e1e2e3;
        color: #333;
        opacity: 0;
    }

    .arrow-wrap{
        position: absolute;
        right: 15px;
    }

    .message-wrap{
        display: flex;
        flex-direction: row;
    }

    .btn-phone{
        position: relative;
        margin-left: 10px;
        min-width: 117px;
        padding: 16px 15px 14px;
        border-radius: 5px;
        background-color: #f2f4f7;
        font-weight: 700;
        color: #ccc;
    }

    .code-wrap{
        padding: 10px 0px;
    }

    .style-guidance{
        bottom: 0;
        margin-top: 6px;
        font-size: 12px;
        color: #767676;
        line-height: 16px;
    }

    .agree-wrap{
        margin-top: 20px;
    }

    .allagree-wrap{
        border-bottom: 1px solid #dddddd;
        width:100%;
        padding: 15px 0px;
        margin-bottom: 10px;
        font-size: 15px;
    }

    .sign-btn-wrap{
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 3;
    }

    .btn-back{
        background: #fff;
    }

    .input-check{
        margin-right: 10px;
    }
`;

const Check = styled.div`
    padding: 5px 0px;
    font-size: 15px;
    color: #939393;

    .more-link{
        float: right;
        font-size:13px;
        padding-top: 3.5px;
    }

    .input-check{
        margin-right: 10px;
    }
`;

const SignBtn = styled.button`
    background-color: ${props=>props.check ? "#36f" : "#f2f4f7"};
    border-color: transparent;
    color: ${props=>props.check ? "#fff" : "#cacaca"};
    pointer-events : ${props=>props.check ? "auto" : "none"};
    cursor: ${props=>props.check ? "pointer" : null};

    align-items: center;
    width: 100%;
    height: 54px;
    border: 0;
    border-radius: 27px;
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0px;
`;

const Guidance = styled.div`
    bottom: 0;
    margin-top: 6px;
    font-size: 12px;
    color: ${props=>props.error ? "#fe415c" : "#767676"};
    line-height: 16px;
`;

const Guide = styled.div`
    bottom: 0;
    margin-top: 6px;
    font-size: 12px;
    color: #fe415c;
    line-height: 16px;
`;

const Input = styled.input`
    width: 318px;
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 5px;
    border: ${props=>props.isError ? "1px solid #fe415c" : "1px solid #e1e2e3"};
    background-color: #fff;
    font-size: 15px;

    &:focus{
        border: 1px solid #36f;
        outline: none;
    }   
`;

const RepeatInput = styled.input`
    width: 318px;
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 5px;
    border: ${props=>props.isError ? "1px solid #fe415c" : "1px solid #e1e2e3"};
    background-color: #fff;
    font-size: 15px;

    &:focus{
        border: 1px solid #36f;
        outline: none;
    }   
`;

export default Password;