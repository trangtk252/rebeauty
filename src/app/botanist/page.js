export default function Page() {
    return (
        <section>
            <ul className="breadcrumb">
                <li><a href="/rebeauty">Home</a></li>
                <li><a href="/rebeauty/hair">Hair</a></li>
                <li><strong>Botanist - Botanical Set Bouncy Volume</strong></li>
            </ul>

            <div className="product">
                <img className="product-image"
                     src="https://botanistofficial.com/img/goods/S/btn318-d_27292c249b1d4c43913c9cba7d319e05.jpg"
                     alt="Botanist-Botanical Shampoo and Treatment Bouncy Volume with the peony and orange blossom scent"/>
                <div className="product-info">
                    <div className="product-name">
                        <p className="brand">Botanist</p>
                        <p className="name"><strong>Botanical Set Bouncy Volume</strong></p>
                        <p className="price">¥2,640 - 425ml</p>
                        <a href="https://botanistofficial.com/shop/g/gbtn318-d/" className="official" target="_blank">Visit
                            the official store</a>
                    </div>
                    <div className="product-rank">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fas fa-star-half-alt fa-2x"></i>
                    </div>
                    <button className="button"><a href="/rebeauty/review"><strong>Write A Review</strong></a></button>
                </div>
            </div>

            <div className="review">
                <div className="tab">
                    <button className="tab-btn" onClick="openTab(event, 'Overall')" id="defaultOpen">
                        <strong>Overall</strong></button>
                    <button className="tab-btn" onClick="openTab(event, 'User-Review')"><strong>User Review</strong>
                    </button>
                    <button className="tab-btn" onClick="openTab(event, 'Brand-Overview')"><strong>Brand
                        Overview</strong></button>
                </div>
                <div id="Overall" className="tabcontent">
                    <p>Do you have frizzy, rough and split ends hair? Hair caring is an essential human need, and
                        choosing the right shampoo and conditioner is extremely necessary. If you choose the wrong
                        shampoo, it can cause dandruff, frizzy hair or hair loss. Therefore, today ReBeauty will bring
                        you a very popular herbal shampoo and conditioner, which is the Botanical Botanical hair
                        treatment set.</p>
                    <p><strong>Design:</strong><br/>
                        With a design in the form of a plastic bottle with a convenient pump nozzle, a transparent
                        bottle with stylized words on the body of the bottle looks quite lovely and prominent, just a
                        glance and I bet you can't forget her shape!</p>
                    <p><strong>Main ingredients:</strong><br/>
                        Plant extracts of natural origin: avocado, licorice, palm fruit, maca nut, sugar cane, coconut,
                        soybean and corn are rich in fatty acids, effectively smoothing hair.</p>
                    <p><strong>Texture:</strong><br/>
                        This product has a crystal clear gel texture. When you rub it against your hands, it will become
                        foamy.</p>
                </div>
                <div id="User-Review" className="tabcontent">
                    <div id="user">
                        <div className="user-rank">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p><strong>Love it but...</strong></p>
                        <p className="review-text">The products treat my hair very well! It did not feel greasy at all
                            for
                            the whole day. However, I notice my hair tend to fall more than before, not so much though.
                            But I cannot make sure that it is because of this product since I did change some other
                            products also.</p>

                        <button className="like-btn" onClick="liked('comment1')">
                            <span className="heart-icon"><i className="far fa-heart"></i></span>
                            <span id="comment1">7</span> Like
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
                        <p><strong>My holygrail!!!</strong></p>
                        <p className="review-text">Before using this, I always struggle with greasy and handruff, since
                            the weather where I live is very very bad! My friend recommended this and my life has
                            changed ever since. If you're also in the same situation, try the set out! You'll never
                            regret it!!!</p>

                        <button className="like-btn" onClick="liked('comment2')">
                            <span className="heart-icon"><i className="far fa-heart"></i></span>
                            <span id="comment2">5</span> Like
                        </button>
                    </div>
                </div>
                <div id="Brand-Overview" className="tabcontent">
                    <p>Botanist is a recently emerging Japanese cosmetic company. Although it does not have
                        a long history like other famous cosmetic brands, with certain steps, Botanist has gradually
                        asserted its name in the Asian market.
                        <br/><br/>
                        Botanist's products are characterized by being completely extracted from natural plants,
                        without chemical ingredients that cause irritation and affect health, ensuring absolute
                        safety.
                        <br/><br/>
                        Botanist has body care lines such as: Shampoo, conditioner, hair wax, mask, lotion,
                        lotion....
                    </p>
                </div>
            </div>
        </section>
    )
}