import styled from 'styled-components';
import { ReactComponent as Guide } from '../../svg/ic-guide.svg';

const Insites = () => {

    return(
        <>
            <Section>
                <div className="title-wrap">
                    <div className="title">나에게 필요한 커리어 인사이트</div>
                    <button>
                        <Guide />
                    </button>
                </div>
                <div className="scroll">
                    
                </div>
            </Section>
        </>
    );
}

const Section = styled.section`
    padding: 60px 0px;
    position: relative;
    scroll-margin-top: 4px;
    border: 1px solid blue;
    text-align: center;

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
    }

    .title-wrap > button{
        border: none;
        background-color: transparent;
        margin-top: 3px;
    }
`;

export default Insites;