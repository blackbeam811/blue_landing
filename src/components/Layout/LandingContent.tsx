import { Button } from "../Buttons"
import Generate from "../Generate";
import Buy from "../Buy";
import bg1 from "../../assets/1.png";
import bg2 from "../../assets/2.png";
import bg3 from "../../assets/3.png";
import bg4 from "../../assets/4.png";
import bg5 from "../../assets/5.png";
import vector from "../../assets/vector.png";
function LandingContent() {
    return (
        <div className="flex justify-center flex-wrap m-[130px]" >
            <div className="flex justify-center flex-wrap my-14">
                <p className="w-full max-w-[1137px] text-white-900 text-center leading-tight text-[64px] leading-[80px]"><span className="relative">Blu is <img src={vector} alt = "vector.png" className="absolute bottom-[-15px] right-0 width-[227px] max-w-[227px]" /></span>a<span className="bg-plasma inline-block text-transparent bg-clip-text "> &nbsp;Community Driven</span> project with limitless possibilities </p>
                <p className="w-full max-w-[1073px] text-white-900 text-center bg-power inline-block text-transparent bg-clip-text text-[26px] leading-[31px] p-4">POWER!!! In return BLU BEAR called his Friends ShibZoids from the first bull run and they  BLUE BEAR Holders to Travel the World</p>
            </div>
            <Button x = {"13px"} y = {"35px"}>Watch Video</Button>
            <p className="text-xl w-full text-center mt-[210px] tracking-[4px]">TRUSTED BY THE WORLD LEADERS</p>
            <div className="w-full max-w-[963px] flex justify-between items-center p-10">
                <img src = {bg1} alt = "1.png" />
                <img src = {bg2} alt = "2.png" />
                <img src = {bg3} alt = "3.png" />
                <img src = {bg4} alt = "4.png" />
                <img src = {bg5} alt = "5.png" />
            </div>
            <div className="w-full max-w-[945px] m-[100px] flex justify-center flex-wrap">
                <p className="w-full max-w-[480px] text-[40px] leading-[56px] text-white-900 text-center">Genarate Blu Voucher<span className="text-[#9C74F1]">.</span></p>
                <p className="w-full max-w-[945px] text-[24px] leading-[36px] text-white-900 text-center">POWER!!! In return BLU BEAR called his Friends ShibZoids from the first bull run and they  BLUE BEAR Holders to Travel the World</p>
            </div>
            <div className="w-5/6 flex justify-center">
            <Generate />
            </div>
            <Buy/>
        </div>
    );
}


export default LandingContent;