import styled from 'styled-components';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as EmailIcon } from '../../svg/ic-email.svg';
import { ReactComponent as Kakao } from '../../svg/ic-kakao.svg';
import { ReactComponent as Facebook } from '../../svg/ic-facebook.svg';
import { ReactComponent as Google } from '../../svg/ic-google.svg';
import { ReactComponent as Apple } from '../../svg/ic-apple.svg';

const Email = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const [email, setEmail] = useState("");

    const onChange = (e) => {
        setEmail(e.target.value);
    }
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }
    return(
        <>
            <Outline>
                <Head>
                    직장인을 위한
                    <br />
                    커리어 플랫폼, 원티드
                </Head>
                <Sub>
                    커리어 성장과 행복을 위한 여정
                    <br />
                    지금 원티드에서 시작하세요.
                </Sub>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="label-wrap">
                        <label className="style-label" htmlFor="email">이메일</label>
                    </div>
                    <div className="input-wrap">
                        <Input
                            type="email" 
                            id="email"
                            isError={errors.email}
                            placeholder="이메일을 입력해 주세요."
                            {...register("email", {
                                required: "올바른 이메일 형식을 입력해주세요.",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "올바른 이메일 형식을 입력해주세요.",
                                },
                            })} 
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    {errors.email && <Error>{errors.email.message}</Error>}
                    <button className="input-btn" type="submit">
                        <EmailIcon />
                        이메일로 계속하기
                    </button>
                </Form>
                <div className="under-wrap">
                    or
                </div>
                <div className="under-wrap">
                    다음 계정으로 계속하기
                </div>
                <div className="social-wrap">
                    <div className="btn-wrap">
                        <button className="social-login-button kakao-login">
                            <Kakao />
                        </button>
                        <div className="btn-text">Kakao</div>
                    </div>
                    <div className="btn-wrap">
                        <button className="social-login-button facebook-login">
                            <Facebook />
                        </button>
                        <div className="btn-text">Facebook</div>
                    </div>
                    <div className="btn-wrap">
                        <button className="social-login-button google-login">
                            <Google />
                        </button>
                        <div className="btn-text">Google</div>
                    </div>
                    <div className="btn-wrap">
                        <button className="social-login-button apple-login">
                            <Apple />
                        </button>
                        <div className="btn-text">Apple</div>
                    </div>
                </div>
                <p class="foot-wrap">
                    걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.<br />
                    회원가입 시
                    <a class="a-style" href="https://help.wanted.co.kr/hc/ko/articles/360035484292" target="_blank">개인정보 처리방침</a>
                    과
                    <a class="a-style" href="https://help.wanted.co.kr/hc/ko/articles/360035844551" target="_blank">이용약관</a>
                    을 확인하였으며, 동의합니다.</p>
            </Outline>
        </>
    );
}

const Outline = styled.div`
    padding: 10px;

    .under-wrap{
        text-align: center;
        color: #767676;
        font-size: 14px;
        padding-bottom: 15px;
    }

    .social-wrap{
        display: flex;
        flex-direction: row;
        margin: 10px 0px;
    }

    .btn-wrap{
        flex-grow: 1;
        flex-basis: 0;

        text-align: center;
    }

    .social-login-button{
        width: 56px;
        height: 56px;
        margin: 0 auto 8px;
        border-radius: 28px;
    }

    .social-login-button.kakao-login{
        background-color: #fee500;
    }

    .social-login-button.facebook-login{
        background-color: #1877f2;
    }

    .social-login-button.google-login{
        border: 1px solid #e1e2e3;
        background-color: #fff;
    }

    .social-login-button.apple-login{
        background-color: #000;
    }

    .btn-text{
        font-size: 13px;
        color: #767676;
    }

    .foot-wrap{
        margin-top: 30px;
        text-align: center;
        font-size: 10.8px;
        line-height: 18px;
        color: #999;
    }

    .a-style{
        color: #3336ff;
        text-decoration: underline;
    }

`;

const Head = styled.div`
    line-height: 1.54;
    font-size: 26px;
    font-weight: 600;
    color: #333;
    text-align: center;
`;

const Sub = styled.div`
    margin-top: 16px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
    color: #666;
    text-align: center;
`;

const Form = styled.form`
    margin-top: 40px;

    .label-wrap{
        padding-bottom: 14px;
    }

    .style-label{
        font-size: 14px;
        font-weight: 400;
        color: #767676;
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
        margin: 10px 0px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Error = styled.div`
    color: #fe415c;
    font-size: 12px;
    padding: 10px 0px;
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

export default Email;