import {useSelector, useDispatch} from "react-redux";
import { closeDeMoAction } from "../../store/actions/resumeModal";
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

const ResumeModal = ({header, children}) => {

    //모듈 선언
    const { isDeMoOpen } = useSelector((state) => state.ResumeModalReducer);
    const { resumeId } = useSelector((state) => state.ResumeModalReducer);
    const dispatch = useDispatch();
    const token = localStorage.getItem("jwt");
    const navigate = useNavigate();

    const closeMoRedux = () => {
        dispatch(closeDeMoAction());
    };

    const onDelete = () => {
        let isCompleted = false;
        axios.patch(`https://prod.zezeserver.shop/app/resumes/${resumeId}/deleted`,{
        },{
            headers: {
                'x-access-token': token,
            }
        })
        .then(res => {
            if(!isCompleted){
                console.log(res);
                closeMoRedux();
                navigate(`/resume`);
            }
        })
        .catch(err => console.log(err))

        return() => {
            console.log("done");
            isCompleted = true;
        };
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <Wrap>
        <div
            className={isDeMoOpen
                ? 'openModal modal'
                : 'modal'}>
            {
                isDeMoOpen
                    ? (
                        <section>
                            <main>{children}</main>
                            <footer>
                                <button className="cancle" onClick={closeMoRedux}>취소</button>
                                <button className="delete" onClick={onDelete}>삭제</button>
                            </footer>
                        </section>
                    )
                    : null
            }
        </div>
        </Wrap>
    );
};

const Wrap = styled.div`
    .modal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
        }
    .modal button {
        outline: none;
        cursor: pointer;
        border: 0;
        }
    .modal > section {
        width: 500px;
        max-width: 500px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        overflow: hidden;
        }
    .modal > section > header {
        position: relative;
        padding: 20px 163px;
        font-weight: 700;
        }
    .modal > section > header button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
        }
    .modal > section > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        font-size: 24px;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: normal;
        text-align: center;
        color: #333;
        }
    .modal > section > footer {
            padding: 20px;
        }
    .modal > section > footer button {
        height: 50px;
        width: calc(50% - 5px);
        border-radius: 3px;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        }
    .modal.openModal {
        display: flex;
        align-items: center;
        }
    .cancle{
        margin-right: 10px;
        background-color: #979797;
    }
    .delete{
        background-color: #36f;
    }
`;

export default ResumeModal;