import styled from "styled-components"

const Wrapper = styled.div`
    
    border: .5px solid #666666;
    border-radius: 15px;
    background: #1D1D1D;
    padding: 10px 15px;
    margin-bottom: 10px;
    &>p {
        font-size: 1vw;
        color: white;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-size: 2vw;
            color: #666666;
        }
        div {
            border: .5px solid #666666;
            padding: 5px;
            border-radius: 15px;
            display: flex;
            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            p {
                color: white;
            }
        }
    }

`
const Content = styled.div`
    width: 100%;
    padding: 20px 50px
`

export default function InputGroup( ) {
    return (
        <Content>
            <Wrapper>
            <p>Balance</p>
            <div>
                <p>0.0</p>
                <div>
                    <img src = "./" alt = "img" />
                    <p>BLU</p>
                </div>
            </div>
        </Wrapper>
        </Content>
    )
}