import Image from 'next/image'
import styles from './page.module.css'
import Swiper from "swiper";
import Carousel from "@/components/Carousel";

export default function Home() {
    const swiperPortfolio = new Swiper(".banner-container", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

    return (


            <div className="mt-6 ">
                <Carousel ></Carousel>
                <div className="py-20">
                <p className="ranking">High Ranking</p>
                <div className="flex justify-around gap-6 mx-6 pt-8">
                    <div className="bg-[#fceeed] pb-10">
                            <a href="/rebeauty/botanist"><Image
                                width={500}
                                height={500}
                                className="p-7"
                                src="https://botanistofficial.com/img/goods/S/btn318-d_27292c249b1d4c43913c9cba7d319e05.jpg"
                                alt="Botanist-Botanical Shampoo and Treatment Bouncy Volume with the peony and orange blossom scent"/></a>
                        <div className="rank-info">
                            <div className="rank-name">
                                <a href="/rebeauty/botanist"><strong>Botanist</strong><br/>Botanical Shampoo & Treatment</a>
                            </div>
                            <div className="rank-star">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#fceeed] pb-10">
                            <a href="#"><Image
                                width={500}
                                height={500}
                                className="p-7"
                                src="https://images-na.ssl-images-amazon.com/images/I/51U3j5k5OzL._SL1200_.jpg"
                                alt="The Seaweed Bath brand - Hydrating, Natural Seaweed Body Wash"/></a>
                        <div className="rank-info">
                            <div className="rank-name">
                                <a href="#"><strong>The Seaweed Bath Co.</strong><br/>Seaweed Body Wash</a>
                            </div>
                            <div className="rank-star">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#fceeed] pb-10">
                            <a href="/rebeauty/face/cleanser/TFS"><Image
                                width={500}
                                height={500}
                                className="p-7"
                                src="https://imgur.com/BVZnDKd.jpg"
                                alt="The Face Shop - Rice Water Bright Cleansing Foam"/></a>
                        <div className="rank-info">
                            <div className="rank-name">
                                <a href="/rebeauty/face/cleanser/TFS" className="text-2xl "><strong>The Face Shop</strong><br/>Rice Water Bright Cleansing
                                    Foam</a>
                            </div>
                            <div className="rank-star">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

)
}
