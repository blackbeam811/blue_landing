import { useRef } from "react";
import img from "../../assets/gift.png"
import { useOutsideDetector } from "../useOutsideDetector";
type Props = {
    handleClose?: () => void;
  };

export default function({ handleClose } : Props) {
    let cc=useRef(null)
    useOutsideDetector([cc], handleClose)
    return (
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full max-w-[478px]" ref={cc}>
            <div className="relative w-ful bg-white flex justify-center border rounded-[16px] pb-[20px]">
                <div className="w-full max-w-[329px] flex flex-col items-center">
                    <img src={img} alt="gift.png" />
                    <div className="text-[36px] text-black text-center">Congratulation</div>
                    <div className="text-[20px] text-black text-center">You get a vecation voucher code</div>
                    <div className="text-[16px] text-black text-center">offer valid till 20th jun 2024</div>
                    <div className="text-[20px] text-black text-center font-semibold mt-[35px]">Your Coupon</div>
                    <div className="text-[20px] text-black text-center font-semibold p-[20px] border border-dashed border-[2px] border-[rgb(33,42,240)] flex justify-center items-center bg-[rgba(33,42,240,.5)]">GLTF63748476SWT</div>
                </div>
                <div className="transform rotate-45 text-[50px] absolute top-[-10px] right-[15px] text-black hover:cursor-pointer" onClick={handleClose}>+</div>
            </div>
        </div>
    )
}