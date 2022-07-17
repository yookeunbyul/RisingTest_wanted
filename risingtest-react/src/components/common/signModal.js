import {useSelector, useDispatch} from "react-redux";
import { closeSignMoAction } from "../../store/actions/signModal";
import { ReactComponent as Close } from '../../svg/ic-close.svg';
import styled from 'styled-components';

const SignModal = ({header, children}) => {

    //모듈 선언
    const {isSignMoOpen} = useSelector((state) => state.SignModalReducer);
    const dispatch = useDispatch();

    const closeMoRedux = () => {
        dispatch(closeSignMoAction());
    };

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <Wrap>
        <div
            className={isSignMoOpen
                ? 'openModal modal'
                : 'modal'}>
            {
                isSignMoOpen
                    ? (
                        <section>
                            <header>
                                {header}
                                <button className="close" onClick={closeMoRedux}>
                                    <Close />
                                </button>
                            </header>
                            <main>{children}</main>
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
        width: 90%;
        max-width: 400px;
        height: 766px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        overflow-y: auto;
        }
    .modal > section::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
        }
    .modal > section > header {
        position: relative;
        padding: 20px 163px;
        font-weight: 600;
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
        }
    .modal > section > footer {
        padding: 12px 16px;
        text-align: right;
        }
    .modal > section > footer button {
        padding: 6px 12px;
        color: #fff;
        background-color: #6c757d;
        border-radius: 5px;
        font-size: 13px;
        }
    .modal.openModal {
        display: flex;
        align-items: center;
        }
`;

export default SignModal;