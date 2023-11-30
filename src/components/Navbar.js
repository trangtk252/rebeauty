"use client"
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image"

function navbar() {
    const pathname = usePathname();
    if (pathname !== "/login") {
        return (
            <div className="w-full grid grid-cols-10 bg-[#c5d2c7] px-4">
                <div className="col-span-1 ...">

                    <div className=" my-5 flex justify-center">
                        <Image className="rounded-full" src="https://imgur.com/9PK7Dz6.png" width={100} height={100}
                               alt="ReBeauty - Cosmetic and Skin Care Products Review Page logo"/>
                    </div>
                </div>

                <div className="col-span-7 flex flex-col justify-end">

                    <div className="flex topnav justify-center bottom-1">
                    <a href="/rebeauty" className="active">Home</a>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <a href="/rebeauty/face">Face</a>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown_content">
                            <a href="/rebeauty/face/cleanser">Cleanser</a>
                            <a href="/rebeauty/face/toner">Toner</a>
                            <a href="/rebeauty/face/moisturizer">Moisturizer</a>
                            <a href="/rebeauty/face/mask">Mask</a>
                        </div>
                    </div>
                     <div className="dropdown">
                    <button className="dropbtn"><a href="/rebeauty/hair">Hair</a>
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown_content">
                        <a href="/rebeauty/hair/shampoo">Shampoo</a>
                        <a href="/rebeauty/hair/conditioner">Conditioner</a>
                        <a href="/rebeauty/hair/hair-oil">Hair oil</a>
                    </div>
                </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <a href="/rebeauty/body">Body</a>
                            <i className="fa fa-caret-down"></i></button>
                        <div className="dropdown_content">
                            <a href="/rebeauty/body/body-shampoo">Body shampoo</a>
                            <a href="/rebeauty/body/body-lotion">Body Lotion</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <a href="/rebeauty/others">Others</a>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown_content">
                            <a href="/rebeauty/others/supplements">Supplements</a>
                            <a href="/rebeauty/others/sale">Sale</a>
                        </div>
                    </div>
                    <a href="/rebeauty/about-us">About us</a>
                    </div>
                </div>

                <div className=" col-span-2 flex flex-col justify-center ">
                    <div className="flex justify-center  mx-5">
                        <div className="bg-white px-3 flex rounded-xl mx-4">
                            <input className="outline-none text-gray-400" type="text" placeholder="Search"/>
                            <button type="submit">
                                <i className="fa fa-search text-[#c5d2c7]"></i>
                            </button>
                        </div>

                        <div className="">
                            <a href="/rebeauty/login"><i className="far fa-user-circle fa-2x"
                                                         style={{color: "white"}}></i></a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default navbar;