import img1 from "../../assets/img1.png";
import img2 from "../../assets/usa.png"
import Success from "./Success";
import {useRef, useState} from "react";
import { useOutsideDetector, useOutsideDetector2 } from "../../components/useOutsideDetector"
import arrow from "../../assets/arrow.png"

function Generate() {
    const [successState, setSuccessState] = useState(0);
    const [dropState, setDropState] = useState(0);

    const handleClick = () => {
        setSuccessState(successState === 1 ? 0 : 1)
    }
    const toogleDrop = () => {
        setDropState(dropState === 1 ? 0 : 1)
    }
    const DropClose = () => {
        setDropState(0)
    }
    let tmp=useRef(null);
    useOutsideDetector2([tmp], DropClose);

    return (
        <div className="w-full flex justify-center relative">
            <div className="w-full max-w-[1080px] flex flex-col items-center border border-[#666666]  rounded-[10px] bg-[#161616] p-14">
                {/* <div className="m-[20px] text-white w-full max-w-[330px] p-[10px] text-center text-[13px] leading-[22px] border border-[#666666] rounded-[13px]">GENERATE NOW</div> */}
                <button className="m-5 rounded-[12.88px] h-10 p-[1px] bg-fire w-[326.27px]">
                    <div className="flex justify-center items-center text-white h-full bg-[#161616] rounded-[12.88px] uppercase">
                        Genarate Now
                    </div>
                </button>

                <div className="w-full max-w-[612px] flex flex-col items-center border border-[#666666]  rounded-[10px] bg-[#1D1D1D] p-[20px]">
                    <div className="w-full max-w-[512px] border border-[#666666]  rounded-[10px] bg-[#161616] m-[20px] p-[10px]">
                        <p className="w-full text-white size-[13px] leading-[23px]">Wallet Address</p>
                        <p className="text-white/50 text-[16px] leading-[40px]">59pKkt9EH2VmUKk6ALTE2uiTx5KnZPn2W6mb8pg5gYs</p>
                    </div>
                    <div className="w-full max-w-[512px] border border-[#666666]  rounded-[10px] bg-[#161616] m-[20px] py-[10px] px-[15px] relative">
                        <p className="w-full text-white text-[13px] leading-[23px]">Balance</p>
                        <p className="text-white/50 text-[23px] leading-[40px]">0.0</p>
                        <div className="absolute w-full max-w-[128px] top-[13px] right-[15px] flex border border-[#666666]  rounded-[10px] items-center p-2 pr-4 gap-1">
                            <img src={img1} alt="img1.png" className="w-[40px] h-[40px]  " />
                            <div className="text-[20px] leading-[22px] pl-[4px]">BLU</div>
                        </div>
                    </div>
                    <div className="w-full max-w-[512px] border border-[#666666]  rounded-[10px] bg-[#161616] m-[20px] py-[10px] px-[15px] relative">
                        <p className="w-full text-white text-[13px] leading-[23px]">Travel to</p>
                        <p className="text-white/50 text-[23px] leading-[40px]">USA</p>
                        <div className="absolute w-full max-w-[128px] top-[13px] right-[15px] flex border border-[#666666]  rounded-[10px] items-center p-2 pr-4 gap-1" >
                            <img src={img2} alt="img1.png" className="w-[40px] h-[40px]"  id="menu-button" aria-expanded="true" aria-haspopup="true" />
                            <div className="text-[20px] leading-[22px] pl-[4px] relative ">
                                USA
                                <img className="absolute top-[-5px] right-[-30px] w-[36px] h-[36px] hover:cursor-pointer" src={arrow} alt="arrow.png" ref={tmp} onClick={toogleDrop} />
                                {dropState ?  <div className="absolute top-[40px] right-[-25px] w-[200px] p-4 bg-[#161616] border rounded-[8px]">
                                    <div className="w-full flex justify-start items-center gap-[10px] p-[10px] hover:cursor-pointer">
                                        <img className="w-[24px] h-[24px]" src="../src/assets/usa.png" alt="usa.png" />
                                        <p className="text-[18px]">USA</p>
                                    </div>
                                    <div className="w-full flex justify-start items-center gap-[10px] p-[10px] hover:cursor-pointer" role="menuitem" >
                                        <img className="w-[24px] h-[24px]" src="../src/assets/usa.png" alt="usa.png" />
                                        <p className="text-[18px]">South Korea</p>
                                    </div>
                                    <div className="w-full flex justify-start items-center gap-[10px] p-[10px] hover:cursor-pointer" role="menuitem" >
                                        <img className="w-[24px] h-[24px]" src="../src/assets/usa.png" alt="usa.png" />
                                        <p className="text-[18px]">Dubai</p>
                                    </div>
                                    <div className="w-full flex justify-start items-center gap-[10px] p-[10px] hover:cursor-pointer" role="menuitem" >
                                        <img className="w-[24px] h-[24px]" src="../src/assets/usa.png" alt="usa.png" />
                                        <p className="text-[18px]">Singapore</p>
                                    </div>
                                </div>:""
                            }
                            </div>
                        </div>

                    </div>
                    <button className="w-full max-w-[512px] m-2 bg-[blue] rounded-[50px] w-full p-[10px]" onClick={handleClick}>Generate</button>
                </div> 
            </div>
            
            {successState ? <Success handleClose={() => setSuccessState(0)} /> : ""}
        </div>
        // <Wrapper>
        //     <div className="m-[20px] text-white w-[330px] p-[4px] rounded-[5px] text-center text-[13px] leading-[22px] border border-gra ">GENERATE NOW</div>
        //     <div className="">
        //         <div className="">

        //         </div>
        //         {/* <InputGroup  />
        //         <InputGroup />
        //         <InputGroup /> */}
        //         <div className="btn w-5/6">Generate</div>
        //     </div>
        // </Wrapper>
    )
}

export default Generate;