import styled from 'styled-components';
import axios from "axios";
import { useState, useEffect } from "react";
import { ReactComponent as Arrow } from '../../svg/ic-right-arrow.svg';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSignMoAction } from "../../store/actions/signModal";
import { addJobGroupAction } from "../../store/actions/jobGroup";
import { addUserAction } from "../../store/actions/user";
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const localEmail = localStorage.getItem("email");

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const [allCheck, setAllCheck] = useState(false);
    const [check, setCheck] = useState(false);
    const [repeatPW, setRepeatPW] = useState("");
    const [repeatValid, setRepeatValid] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState(localEmail);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [privacyCheck, setPrivacyCheck] = useState(false);
    const [useCheck, setUseCheck] = useState(false);

    console.log(name,email, phone, password, privacyCheck, useCheck);

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const closeSignMoRedux = () => {
        dispatch(closeSignMoAction());
    };

    const onSubmit = (data) => {
        // alert(JSON.stringify(data));

        axios.post("https://prod.zezeserver.shop/app/users",{
            name : `${name}`,
            phoneNumber: `${phone}`,
            email: `${email}`,
            password: `${password}`,
            IsAcceptedPrivacyTerm: `${privacyCheck}`,
            IsAcceptedMarketingTerm: `${useCheck}`,
        })
        .then(res => {
            console.log(res);
            dispatch(
                addJobGroupAction({
                    jobList : res.data.result.jobGroup,
                    userId : res.data.result.userId,
                    password : password,
                })
            );
        })
        .catch(err => console.log(err))

        closeSignMoRedux();
        dispatch(
            addUserAction({
            username: name,
            userphone: phone,
        }));
        navigate(`/first`);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onRepeatPWChange = (e) => {
        setRepeatPW(e.target.value);
        setRepeatValid(false);
    };

    const onError = (error) => {
        console.log(error);
        setRepeatValid(true);
    };

    const allBtnEvent = () => {
        if (allCheck === false) {
            setAllCheck(true);
            setPrivacyCheck(true);
            setUseCheck(true);
            setCheck(true);
        } else {
            setAllCheck(false);
            setPrivacyCheck(false);
            setUseCheck(false);
            setCheck(false);
        }
    };

    const privacyBtnEvent = () => {
        if (privacyCheck === false) {
            setPrivacyCheck(true);
        } else {
            setPrivacyCheck(false);
        }
    };

    const useBtnEvent = () => {
        if (useCheck === false) {
            setUseCheck(true);
        } else {
            setUseCheck(false);
        }
    };

    useEffect(() => {
        if (privacyCheck === true && useCheck === true) {
            setAllCheck(true);
            setCheck(true);
        } else if(privacyCheck === true) {
            setCheck(true);
        } else {
            setAllCheck(false);
            setCheck(false);
        } 
    }, [privacyCheck, useCheck])

    console.log(name, phone);

    return (
        <Outline>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="section">
                    <div className="label-wrap">
                        <label className="style-label" htmlFor="username">??????</label>
                    </div>
                        <input
                        className="style-input"
                        type="text"
                        name="username"
                        placeholder="????????? ????????? ?????????."
                        id="username"
                        value={name}
                        onChange={onNameChange}
                    />
                </div>
                <div className="section">
                    <div className="label-wrap">
                        <label className="style-label" htmlFor="userPhoneNumber">????????? ??????</label>
                    </div>
                    <div className="phone-wrap">
                        <span>???????????? +82</span>
                        <select className="style-select">
                            <option value="+82">+82 South Korea</option>
                            <option value="+81">+81 Japan</option>
                            <option value="+886">+886 Taiwan</option>
                            <option value="+852">+852 Hong Kong</option>
                            <option value="+65">+65 Singapore</option>
                            <option value="+93">+93 Afghanistan</option>
                        </select>
                        <span className="arrow-wrap">
                            <Arrow />
                        </span>
                    </div>
                    <div className="message-wrap">
                        <input
                            className="style-input" 
                            type="text"
                            name="userPhoneNumber"
                            placeholder="(??????) 01034567890"
                            id="useruserPhoneNumbername"
                            value={phone}
                            onChange={onPhoneChange}
                            />
                        <button className="btn-phone" type="button" disabled>???????????? ??????</button>
                    </div>
                    <div className="code-wrap">
                        <input 
                            className="style-input" 
                            type="text"
                            name="code"
                            placeholder="??????????????? ????????? ?????????."
                            disabled
                        />
                    </div>
                </div>
                <div className="section">
                    <div className="label-wrap">
                        <label className="style-label" htmlFor="userPassword">????????????</label>
                    </div>
                    <Input
                        type="password"
                        name="userPassword"
                        placeholder="??????????????? ????????? ?????????."
                        id="userPassword"
                        isError={errors.password}
                        {...register("password", {
                            required: "?????? ????????????, ??????, ??????????????? 3?????? ???????????? ???????????? 8??? ?????? ????????? ?????????.",
                            minLength: {
                                value: 8
                            },
                        })}
                        value={password}
                        onChange={onPasswordChange}
                    />
                    <Guidance error={errors.password}>
                        ?????? ????????????, ??????, ??????????????? 3?????? ???????????? ???????????? 8??? ?????? ????????? ?????????.
                    </Guidance>
                </div>
                <div className="section">
                    <div className="label-wrap">
                        <label className="style-label" htmlFor="userPasswordRepeat">???????????? ??????</label>
                    </div>
                    <RepeatInput
                        type="password"
                        name="userPasswordRepeat"
                        placeholder="??????????????? ?????? ?????? ????????? ?????????."
                        id="userPasswordRepeat"
                        isError={errors.repetPassword}
                        {...register("repetPassword", {
                            required: "?????? ????????????, ??????, ??????????????? 3?????? ???????????? ???????????? 8??? ?????? ????????? ?????????.",
                            minLength: {
                                value: 8,
                                message: "?????? ????????????, ??????, ??????????????? 3?????? ???????????? ???????????? 8??? ?????? ????????? ?????????.",
                            },
                            validate: (val: string) => {
                                if (watch('password') !== val) {
                                    return "?????? ????????????, ??????, ??????????????? 3?????? ???????????? ???????????? 8??? ?????? ????????? ?????????.";
                                }
                            },
                        })}
                        value={repeatPW}
                        onChange={onRepeatPWChange}
                    />
                    {errors.repetPassword && repeatValid ? <Guide>{errors.repetPassword.message}</Guide> : null}
                </div>
                <div className="agree-wrap">
                    <div className="allagree-wrap">
                        <input
                            className="input-check"
                            type="checkbox"
                            name="allAgreement" 
                            checked={allCheck}
                            onChange={allBtnEvent}/>
                        <label htmlFor="allAgreement">?????? ??????</label>
                    </div>
                    <Check>
                        <input className="input-check" type="checkbox" name="acceptPrivacy" checked={privacyCheck} onChange={privacyBtnEvent}/>
                        <label htmlFor="acceptPrivacy">
                            ???????????? ?????? ??? ?????? ??????
                            <span>(??????)</span>
                        </label>
                        <span className="more-link">?????????</span>
                    </Check>
                    <Check>
                        <input className="input-check" type="checkbox" name="acceptEventEmail" checked={useCheck} onChange={useBtnEvent}/>
                        <label htmlFor="acceptEventEmail">
                            ????????? ?????? ??? ?????? ?????? ??????
                        </label>
                        <span className="more-link">?????????</span>
                    </Check>
                </div>
                <div className="sign-btn-wrap">
                    <div className="btn-back">
                        <SignBtn check={check}>??????????????????</SignBtn>
                    </div>
                </div>
            </form>
        </Outline>
    );
}

const Outline = styled.div `
    padding: 0px 10px;

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

export default Sign;