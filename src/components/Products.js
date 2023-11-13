function products({nav, items, name}) {
    return (
        <section>
            <ul className="breadcrumb">
                <li><a href="/rebeauty/main">Home</a></li>
                <li><strong>{name}</strong></li>
            </ul>
            <div className="body-content">
                <nav id="side-bar">
                    <p className="font-bold text-2xl py-3">{name}</p>
                    <ul className="categories">
                        {nav.map((item, index) => (
                                <li key={index} className="category"><a href={item.link}>{item.name}</a></li>
                            )
                        )}

                    </ul>
                </nav>

                <div className="product-lineup ">
                    <div className="grid grid-cols-3">
                        {items.map((item, index) => (
                            <div key={index} className="rank-product border-t-2 border-[#9a9aa1]  ">
                                <div className="rank-image">
                                    <a href={item.link}><img
                                        src={item.image}
                                        alt={item.name}/></a>
                                </div>
                                <div className="rank-info">
                                    <div className="rank-name">
                                        <a href=""><strong>{item.name}</strong><br/>{item.description}</a>
                                    </div>
                                    <div className="price">
                                        <p>{item.price}</p>
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
                        ))}

                    < /div>
                </div>
            </div>
        </section>

    )
}

export default products;
