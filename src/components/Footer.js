"use client"
import {usePathname} from "next/navigation";

function Footer() {
    const pathname = usePathname();
    if (pathname !== "/login") {
        return (
            <div className=" bg-[#c5d2c7] flex py-8 justify-center font-bold sticky">
                <div className="w-10/12 flex justify-between">
                <div className="logo">
                    <img src="https://imgur.com/9PK7Dz6.png"
                         alt="ReBeauty - Cosmetic and Skin Care Products Review Page logo"/>
                </div>

                <div className="company">
                    <h5>Company</h5>
                    <a href="/about-us">About Us</a>
                    <a href="/partners">Partners</a>
                </div>
                <div className="terms">
                    <a href="/termsOfUse">
                        <h5>Terms of use</h5>
                    </a>
                </div>
                <div className="help">
                    <a href="/helpCenter">
                        <h5>Help center</h5>
                    </a>
                </div>
                <div className="connect">
                    <h5>Connect with us</h5>
                    <div className="smicon">
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-square fa-2x"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram-square fa-2x"></i></a>
                        <a href="https://www.twitter.com"><i className="fab fa-twitter-square fa-2x"></i></a>
                    </div>
                </div>
                </div>
            </div>)
    }
}

export default Footer;