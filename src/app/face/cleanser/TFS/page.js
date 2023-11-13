export default function Page() {
    return (
        <section>
            <ul className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/face">Face</a></li>
                <li><a href="/face/cleanser">Cleanser</a></li>
                <li><strong>The Face Shop - Rice Water Bright Cleansing Foam</strong></li>
            </ul>

            <div className="product">
                <img className="product-image"
                     src="https://cocoshop.vn/uploads/shops/2019_08/sua-rua-mat-gao-the-face-shop.jpg"
                     alt="The Face Shop - Rice Water Bright Cleansing Foam"/>
                <div className="product-info">
                    <div className="product-name">
                        <p className="brand">The Face Shop</p>
                        <p className="name"><strong>RICE WATER BRIGHT CLEANSING FOAM</strong></p>
                        <p className="price">¥1200 - 300ml</p>
                        <a href="https://www.naturecollection.com/mall/product/product-view.jsp?dpid=AF006379"
                           className="official" target="_blank">Visit the official store</a>
                    </div>
                    <div className="product-rank">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fas fa-star-half-alt fa-2x"></i>
                    </div>
                    <button className="button"><a href="/face/cleanser/TFS/review"><strong>Write A Review</strong></a></button>
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
                    <p>Of all the facial cleansers which are sold at a reasonable market price, The Faceshop rice water
                        bright cleansing foam stands out as a magical product which has a deep cleansing effect with the
                        ability to control sebum and tighten pores effectively. It is suitable for all types of skins,
                        even the most sensitive one.</p>
                    <p><strong>Design:</strong><br/>
                        This product’s container is a pop-up plastic tube. There is no outer packaging, only one layer
                        of plastic wrapped around the tube. The tube has brown beige color with a simple rice cotton
                        image which aims to emphasize that the main ingredient of the product is from rice milk. With
                        this soft plastic design, it will be difficult for us to completely use up the product. Because
                        when the cream is almost used up, it will stick a lot around the neck of the cap.</p>
                    <p><strong>Main ingredients:</strong><br/>
                        <ul>
                            <li>Natural rice water: Has been purified through many cycles to help brighten and create
                                good elasticity
                            </li>
                            <li>Moringa: Plant-based mineral oil which helps to balance moisture</li>
                            <li>Vitamin B5: Helps with antibacterial detoxification</li>
                            <li>Fit Protein: Orchid extract that whitens and rejuvenates skin</li>
                            <li>Saponaria Officinalis Leaf Extract: A plant extract that nourishes the skin from the
                                inside
                            </li>
                            <li>Glycerin: Helps with moisturizing process</li>
                            <li>Myristic acid: Creates fine foam</li>
                        </ul></p>
                    <p><strong>Texture:</strong><br/>
                        Despite being a face wash, it does not have a liquid texture like milk, but a creamy texture.
                        The white cream looks a bit spongy. Along with this, Rice Water Bright Cleansing Foam has
                        massage beads which helps the cleansing process become more effective. These particles are small
                        in size and clean gently, not harshly. So those who have sensitive skin or are suffering from
                        mild damage can also use it.</p>
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
                        <p><strong>This product is worth it!!!</strong></p>
                        <p className="review-text">I bought this multiple times and it still works on my skin very well. I
                            have dry skin but after I cleanse my face, it doesn't feel dry or flaky at all!!! Definitely
                            would recommend it to my friends!</p>

                        <button className="like-btn" onClick="liked('comment1')">
                            <span className="heart-icon"><i className="far fa-heart"></i></span>
                            <span id="comment1">6</span> Like
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
                        <p><strong>Best face cleansing product ever!!!</strong></p>
                        <p className="review-text">It is no doubt that The Face Shop's skincare products are the best!
                            This product has helped me reduce acne breakout! It also makes my skin brighter somehow!
                            Really love this one!</p>

                        <button className="like-btn" onClick="liked('comment2')">
                            <span className="heart-icon"><i className="far fa-heart"></i></span>
                            <span id="comment2">8</span> Like
                        </button>
                    </div>
                </div>
                <div id="Brand-Overview" className="tabcontent">
                    <p>The Face Shop was founded by Jeong Un-ho and opened its first store in 2003 in the neighborhood
                        of Myeongdong. Right from the first days of development, The Face Shop has always made a
                        commitment that: “The energy source of “nature” in The Face Shop always respects the balance of
                        nature and penetrates the skin wonderfully without harming the skin. Let THEFACESHOP bring
                        nature to your skin.” <br/><br/> After two years of establishment, The Face Shop opened its 100th
                            store in Korea and is the third largest cosmetics group in this country. In addition, the
                            brand is present in many Asian countries and is favored by many customers. <br/><br/> In 2005,
                                The Face Shop became the preferred cosmetic brand to enter the DFS market. Also in this
                                year, The Face Shop cosmetic brand was sold No. 1 in Korea and was in the top 3 cosmetic
                                brands with the highest revenue in Korea. <br/><br/> In 2009, LG Corporation acquired the
                                    cosmetic brand The Face Shop. Headquarters at LG Gwanghwamun Building. CEO Cha Suk
                                    Yong received "Korea's Best CEO" award in 2009-2010 by Asia Money
                                    magazine. <br/><br/> Currently, The Face Shop has more than 900 stores and business
                                        presence in 22 countries around the world.
                    </p>
                </div>
            </div>
        </section>
    )
}