import styled from 'styled-components';

const ThridBoard = () => {
    return(
        <Wrap>
            <Box>
            </Box>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    min-height: 77vh;
    padding-top: 105px;
    padding-bottom: 105px;
    background-color: #f8f8fa;
`;

const Box = styled.div`
    width: 400px;
    max-width: 100vw;
`;

export default ThridBoard;