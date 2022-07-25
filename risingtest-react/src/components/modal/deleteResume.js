import { useSelector } from "react-redux";

const DeleteResume = () => {
    const { resumeName } = useSelector((state) => state.ResumeModalReducer);

    return(
        <>
            <p>이력서 {resumeName}</p>
            <p>삭제하시겠습니까?</p>
        </>
    );
}

export default DeleteResume;