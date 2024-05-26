import React from 'react';
import Image from "next/image";
import Iphone from "@/public/images/apple-iphone-13-pro-2021-medium.png"

interface Props {
    text: string;
}
const Monitor = (props: Props) => {
    return (
        <div className={"relative w-[10rem] isolate max-h-[325px] overflow-clip"}>
            <Image src={Iphone} alt={"apple-iphone-13-pro-2021-medium.png"} width={200} height={200}/>
            <div className={"absolute inset-2 bg-gray-800/50 -z-10 rounded-2xl pt-4 pb-2 px-1"}>
                <p className={"font-perFont text-sm text-orange-400"} dir={"rtl"}>{props.text}</p>
            </div>
        </div>
    );
};

export default Monitor;