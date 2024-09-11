import styled from "styled-components";
import { Button } from "../Buttons";
import vector from "../../assets/vector.png";

const Wrapper = styled.div`
    margin-top: 100px;
    width: 100vw;
    display: flex;
    align-items: center;

    flex-wrap: wrap;
    flex-direction: column;

    &>div {
        width: 55%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .vec {
            width: 227px;
            height: 8px;
            // left: 130px;
            // top: 334px;

            border-radius: 3.84167px;
        }
    }
`

export default function Buy() {
    return (
        <div className="w-full flex items-center flex-wrap flex-col mt-[100px]">
            <div>
                <p className = "w-full max-w-[691px] text-[60px] leading-[72px] text-white-900 text-center">Be part of the future of <span className="relative" >BLU COIN<img src={vector} alt = "vector.png" className="absolute top-[50%] right-0 w-full max-w-[331px] z-[-1]" /></span></p>
                <p className="w-full max-w-[691px] text-[20px] leading-[32px] text-white-900 text-center px-[100px] ">Blu Unleashed: Bringing Laughter and Crypto to Solana Blockchain </p>
            </div>
            <Button x = {"13px"} y = {"29px"}>BUY BLU COIN</Button>
        </div>
        
    )
}