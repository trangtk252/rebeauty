"use client"
import {useState} from "react";

export default function Page() {
    const [tabNum, setTabNum] = useState(1);
    const [like, setLike] = useState(false);
    const [like2, setLike2] = useState(false);

    return (
        <section>

            <ul className="breadcrumb">
                <li><a href="/rebeauty">Home</a></li>
                <li><a href="/rebeauty/face">Face</a></li>
                <li><a href="/rebeauty/face/cleanser">Cleanser</a></li>
                <li><strong>Cetaphil - Daily Facial Cleanser</strong></li>
            </ul>

            <div className="product">
                <img className="product-image"
                     src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585257585-s-l640-1585257552.jpg"
                     alt="The Face Shop - Rice Water Bright Cleansing Foam"/>
                <div className="product-info">
                    <div className="product-name">
                        <p className="brand">Cetaphil</p>
                        <p className="name"><strong>DAILY FACIAL CLEANSER</strong></p>
                        <p className="price">¥1,590 - 475ml</p>
                        <a href="https://www.cetaphil.com/us/product/daily-facial-cleanser" className="official"
                           target="_blank">Visit the official store</a>
                    </div>
                    <div className="product-rank">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fas fa-star-half-alt fa-2x"></i>
                    </div>
                    <button className="button"><a href="/rebeauty/face/cleanser/cetaphil/review"><strong>Write A Review</strong></a>
                    </button>
                </div>
            </div>

            <div className="review">
                <div className="tab">
                    <button className={`tab-btn ${tabNum === 1 ? " active" : ""} `} onClick={() => setTabNum(1)} >
                        <strong>Overall</strong></button>
                    <button className={`tab-btn ${tabNum === 2 ? " active": ""} `} onClick={() => setTabNum(2)}><strong>User Review</strong>
                    </button>
                    <button className={`tab-btn ${tabNum === 3 ? " active": ""} `} onClick={() => setTabNum(3)}><strong>Brand
                        Overview</strong></button>
                </div>
                {tabNum === 1 && (
                        <div id="Overall" className="tabcontent">
                            <p>This is the popular product line of Cetaphil and most people use this one. It is because this is
                                the type which is often recommended by dermatologists. The product can be used for all skin
                                types.</p>
                            <p><strong>Design:</strong><br/>
                                The packaging is designed very simply with two basic colors, white and blue. The product is
                                contained in a solid, upright plastic bottle with an opaque white shell and a green cap.
                                Currently, Cetaphil Gentle Cleanser is available in 2 capacities: 500ml (this product line has a
                                convenient pump design) and 125ml (no pump nozzle but the cap design is also very sturdy).</p>
                            <strong className="pl-5">Main ingredients:</strong><br/>
                                <ul className="pl-5">
                                    <li>Water: The main ingredient of Cetaphil Gentle Cleanser. Water in pure form, without
                                        added minerals
                                    </li>
                                    <li>Cetyl Alcohol: This is an FDA-approved emollient. At the same time, CIR experts all
                                        confirm that it is safe and benign for the skin
                                    </li>
                                    <li>Propylene Glycol: This substance has the ability to absorb moisture in the air to supply
                                        the skin. They help limit the loss of water in the epidermis, help hydrate and increase
                                        moisture in the cell structure, so the skin is always soft
                                    </li>
                                    <li>Sodium Lauryl Sulfate: This is a cleansing ingredient commonly found in cleansers. This
                                        ingredient helps other active ingredients slide to the surface of the skin gently and
                                        reduces surface tension
                                    </li>
                                    <li>Steary Alcohol: Skin softening emulsifier. At the same time, the active ingredient has
                                        the effect of preserving other additives in the composition
                                    </li>
                                    <li>Parabens: such as Methylparaben, Propylparaben Preservative, Butylparaben Preservative.
                                        They have the effect of releasing some necessary substances for the skin. In addition,
                                        these substances also have the effect of preserving cosmetics. If used in small amounts
                                        within the prescribed level, it is completely safe
                                    </li>
                                </ul>
                            <p><strong>Texture:</strong><br/>
                                The texture of the cleanser is similar to that of a lotion and has an opaque white color. When
                                used, this product does not foam and is very gentle on the skin. The texture is smooth and
                                fluid, so it wears off very quickly.</p>
                        </div>
                    )
                }
                {tabNum === 2 && (
                <div id="User-Review" className="tabcontent">
                    <div id="user">
                        <div className="user-rank">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p><strong>Definitely worth the price!</strong></p>
                        <p className="review-text">Ever since I started using Cetaphil product, I have no longer used
                            other cleansing products coz this is the best one so far. After every wash, my skin seems to
                            brighten and become very soft, just like baby's skin.</p>

                        <button className="like-btn" onClick={() => setLike(!like)}>
                            <span ><i className={`fa-heart mr-2 ${like ? " fas" : " far"}`}></i></span>
                            <span id="comment1">{like ? "3" : "2"}</span> Like
                        </button>
                    </div>

                    <div id="user">
                        <div className="user-rank">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <p><strong>I love this cleanser so muchhh!!!</strong></p>
                        <p className="review-text">Thanks to this Cetaphil Cleanser, my acne breakout has been improved a
                            lot! Definitely recommend to use this one!</p>

                        <button className="like-btn " onClick={() => setLike2(!like2)}>
                            <span><i className={` fa-heart mr-2 ${like2 ? " fas" : " far"}`}></i></span>
                            <span id="comment2 ">{like2 ? "4" : "3"}</span> Likes
                        </button>
                    </div>
                </div>
                    )}
                {tabNum === 3 && (
                <div id="Brand-Overview" className="tabcontent">
                    <p>Cetaphil is a line of body care products from the famous brand Galderma Laboratories. This
                        company provides to users from cleansers, shower gels, lotions, lotions and moisturizers,
                        etc. <br/><br/> Currently, this brand has a wide presence in the world market. In particular,
                            Cetaphil is extremely popular in the US, India and Canada,... Consumers can find these
                            products at drugstores, grocery stores or supermarkets, etc. <br/><br/> Since the American
                                success in 1947, Cetaphil has become a prestigious skin care brand in more than 70
                                countries. It is always a product of choice for many people.
                    </p>
                </div>
                    )}
            </div>
        </section>
    )
}