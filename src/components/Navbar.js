"use client"
import {usePathname, useRouter} from "next/navigation";

function navbar() {
    const pathname = usePathname();
    if (pathname !== "/login") {
    return (
        <div>
        <header className="flex w-full">
            <div className="flex justify-center w-full">
                <img src="https://imgur.com/beXWL1O.png"
                     alt="ReBeauty - Cosmetic and Skin Care Products Review Page logo"/>
            </div>
            <div className="flex justify-end my-3 w-full px-12">
                <div className="flex justify-between ">
                    <div className="bg-white px-3 flex rounded-xl mx-12">
                        <input type="text"  placeholder="Search"/>
                        <button type="submit">
                            <i className="fa fa-search text-[#c5d2c7]"></i>
                        </button>
                    </div>

                    <div className="">
                            <a href="/rebeauty/login"><i className="far fa-user-circle fa-2x" style={{color: "white"}}></i></a>
                    </div>
                </div>

            </div>

        </header>

    <div className="topnav" id="myTopnav">
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
            <button className="dropbtn">
                <a href="/rebeauty/hair">Hair</a>
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
                <i className="fa fa-caret-down"></i>
            </button>
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
        {/*<a href="javascript:void(0);" className="icon" onClick="myFunction()">&#9776;</a>*/}
    </div>
        </div>
    )
    }
}
export default navbar;