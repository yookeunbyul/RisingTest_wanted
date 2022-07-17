import {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {closeMoAction} from "../../store/actions/modal";
import styled from 'styled-components';

const Modal = ({header, children}) => {

    //모듈 선언
    const modalRef = useRef();
    const {isMoOpen} = useSelector((state) => state.ModalReducer);
    const dispatch = useDispatch();

    //Life Cycle 선언
    useEffect(() => {
        document.addEventListener('mousedown', clickModalOutside);

        return() => {
            document.removeEventListener('mousedown', clickModalOutside);
        };
    });

    //함수 선언
    const clickModalOutside = event => {
        if (isMoOpen && !modalRef.current.contains(event.target)) {
            closeMoRedux();
        }
    };

    const closeMoRedux = () => {
        dispatch(closeMoAction());
    };

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <Wrap>
        <div
            className={isMoOpen
                ? 'openModal modal'
                : 'modal'}>
            {
                isMoOpen
                    ? (
                        <section ref={modalRef}>
                            <header>
                                {header}
                                <button className="close" onClick={closeMoRedux}>
                                    &times;
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
        max-width: 450px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        overflow: hidden;
        }
    .modal > section > header {
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #f1f1f1;
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
        border-top: 1px solid #dee2e6;
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
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.3s;
        }
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
        }
`;

export default Modal;