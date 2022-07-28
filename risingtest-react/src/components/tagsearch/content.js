import styled from 'styled-components';

const Content = ({companyList}) => {

    return(
        <Wrap>
            <div className="box">
                {companyList ? (
                    companyList.map((company) => {
                        return(
                            <>
                                <div className="card" key={company.companyId}>
                                    <div className="head">
                                        <img src={company.Logo} width="50" alt=""/>
                                        <div className="company-name">{company.companyName}</div>
                                    </div>
                                    <button>팔로우</button>
                                    <div className="tag-container">
                                        {company.companyTags.map((i) => {
                                            return(
                                                <>
                                                    <span key={i.tagId}>#{i.name}</span>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        )
                    })
                ) : null}
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    background-color: #f8f8f8;
    width: 98.5vw;
    height: 100%;


    .box{
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid #222; */

        padding: 20px;

        display: grid;

        grid-template-columns: 520px 520px;
        grid-template-rows: 134px;
        column-gap: 20px;
        row-gap: 20px;
    }

    .card{
        background-color: #fff;
        border-radius: 3px;
        padding: 20px 20px 5px 20px;
        position: relative;
    }

    .head{
        display:flex;
        align-items: center;
        /* border: 1px solid #222; */
    }

    .head > img{
        border: 1px solid #f1f1f2;
    }

    .company-name{
        line-height: 25px;
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin-left: 15px;
    }

    .card > button{
        position: absolute!important;
        padding: 5px 20px 5px!important;
        top: 20px;
        right: 20px;
        border: 1px solid #e1e2e3!important;
        font-size: 14px;
        color: #36f;
        background-color: #fff;
        border-radius: 25px;
        font-weight: 900;
        cursor: pointer;
    }

    .tag-container{
        width: 480px;
        margin-top: 30px;
        font-size: 14px;
        height: 28px;
        font-weight: 400;
        line-height: 1;
        color: #999;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .tag-container > span{
        margin-right: 12px;
    }
`;

export default Content;