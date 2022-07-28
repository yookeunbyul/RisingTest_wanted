import styled from 'styled-components';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Head = ({tagList}) => {
    const { companyTagId } = useParams();
    const { tagName } = useSelector((state) => state.TagNameReducer);

    console.log(companyTagId);

    return(
        <Wrap>
            <div className="head">
                <div className="head-tag">
                    #{tagName}
                </div>
                <button>
                    <span>전체보기</span>
                </button>

                <div className="recommend">
                    <div className="title">추천</div>
                    {tagList ? (
                        tagList.map((tag) => {
                            return(
                                <>
                                    <Tag key={tag.tagId} isTag={companyTagId == tag.tagId}>#{tag.name}</Tag>
                                </>
                            )
                        })
                    ) : null}
                </div>
            </div>
        </Wrap>
    )
}

const Tag = styled.button`
    background-color: ${props => props.isTag ? "#eaf5ff" : "#f3f5f8"};
    color: ${props => props.isTag? "#268bf7" : "#333"};
    height: 46px;
        line-height: 46px;
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        border-radius: 3px;
        margin-left: 10px;
        padding: 0 26px;
        border-radius: 25px;
        border: 0;
        cursor: pointer;

        &:hover{
            background-color: #e8e8e8;
        }
`;

const Wrap = styled.div`

    .head{
        width: 100%;
        padding-top: 30px;
        background-color: #fff;

        /* border: 1px solid blue; */
    }

    .head-tag{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid #222; */
        padding: 30px 0px;

        font-size: 24px;
        font-weight: 600;
        letter-spacing: -.5px;
        line-height: 32px;
        color: #333;

        display:flex;
        align-items: center;
        justify-content: center;
    }

    .head-tag::after{
        content: "\f00d";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #333;
        font-size: 15px;
        margin-left: 8px;
    }

    .head > button{
        border: 0;
        background-color: transparent;
        position: absolute;
        top: 84px;
        right: 325px;
        font-size: 14px;
        font-weight: 600;
        color: #268bf7;
        text-align: right;

        cursor: pointer;
    }

    .head > button > span::after{
        content: "\f107";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #268bf7;
        margin-left: 8px;
    }

    .recommend{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid #222; */
        padding-bottom: 24px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title{
        display: inline-block;
        font-weight: 400;
        line-height: 42px;
        margin-right: 6px;
        font-size: 14px;
        text-align: right;
        color: #111;
    }

    .recommend > button {
        /* background-color: #f3f5f8; */
        height: 46px;
        line-height: 46px;
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        /* color: #333; */
        border-radius: 3px;
        margin-left: 10px;
        padding: 0 26px;
        border-radius: 25px;
        border: 0;
        cursor: pointer;

        &:hover{
            background-color: #e8e8e8;
        }
    }
`;

export default Head;