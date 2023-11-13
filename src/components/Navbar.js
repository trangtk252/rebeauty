"use client"
import {usePathname, useRouter} from "next/navigation";

function navbar() {
    const pathname = usePathname();
    if (pathname !== "/login") {
    return (
        <div>
        <header>
            <img src="https://imgur.com/beXWL1O.png"
                 alt="ReBeauty - Cosmetic and Skin Care Products Review Page logo"/>
            <div className="wrap">
                <form className="search">
                    <input type="text" className="searchTerm p-[16px]" placeholder="Search"/>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user">
                <a href="/login"><i className="far fa-user-circle fa-2x" style={{color: "white"}}></i></a>
            </div>
        </header>

    <div className="topnav" id="myTopnav">
        <a href="/" className="active">Home</a>
        <div className="dropdown">
            <button className="dropbtn">
                <a href="/face">Face</a>
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown_content">
                <a href="/face/cleanser">Cleanser</a>
                <a href="/face/toner">Toner</a>
                <a href="/face/moisturizer">Moisturizer</a>
                <a href="/face/mask">Mask</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">
                <a href="/hair">Hair</a>
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown_content">
                <a href="/hair/shampoo">Shampoo</a>
                <a href="/hair/conditioner">Conditioner</a>
                <a href="/hair/hair-oil">Hair oil</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">
                <a href="/body">Body</a>
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown_content">
                <a href="/body/body-shampoo">Body shampoo</a>
                <a href="/body/body-lotion">Body Lotion</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">
                <a href="/others">Others</a>
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown_content">
                <a href="/others/supplements">Supplements</a>
                <a href="/others/sale">Sale</a>
            </div>
        </div>
        <a href="/about-us">About us</a>
        {/*<a href="javascript:void(0);" className="icon" onClick="myFunction()">&#9776;</a>*/}
    </div>
        </div>
    )
    }
}
export default navbar;