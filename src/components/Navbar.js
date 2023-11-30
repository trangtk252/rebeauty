"use client"
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image"

function navbar() {
    const pathname = usePathname();
    if (pathname !== "/login") {
        return (
            <div className="w-full grid grid-rows-2 grid-flow-col bg-[#c5d2c7] px-4">
                <div className="row-span-2 col-span-1 ...">
                    <div className=" my-5">
                        <Image className="rounded-full" src="https://imgur.com/9PK7Dz6.png" width={120} height={120}
                               alt="ReBeauty - Cosmetic and Skin Care Products Review Page logo"/>
                    </div>
                </div>
                <div className="col-span-2 ...">
                </div>

                <div className="col-span-2 ...">
                    <div className="flex topnav">
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

                <div className=" col-span-1 ...">
                    <div className="flex justify-center  my-5">
                        <div className="bg-white px-3 flex rounded-xl mx-12">
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
                <div className="col-span-1  ..."></div>
            </div>

        )
    }
}

export default navbar;