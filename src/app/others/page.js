import Products from "@/components/Products";
const nav = [
    {
        link: '/rebeauty/others/supplements',
        name: 'Supplements'
    },
    {
        link: '/rebeauty/others/sale',
        name: 'Sale'
    },
]

const items = [
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61GruKitIHL._AC_SL1000_.jpg',
        name: 'DHC',
        description: 'Collagen 30 Day Supply',
        price: '¥761',
        link: '#'
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/71bcOQl9KvL._AC_SL1500_.jpg',
        name: 'Celife',
        description: 'Astaxanthin Serum',
        price: '¥3,520',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61iwHHH-0lL._AC_SL1000_.jpg',
        name: 'Otsuka Pharmaceutical',
        description: 'Nature Made Multi Vitamin',
        price: '¥1,200',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/41DSZzKHptL._AC_.jpg',
        name: 'Aisai',
        description: 'Chocola BB Supplement',
        price: '¥4,298',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/81l9evpsB-L._AC_SL1500_.jpg',
        name: 'Transino',
        description: 'White C Clear',
        price: '¥3,528',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/81KQNwDQjiL._AC_SL1500_.jpg',
        name: 'Dianachura',
        description: 'Strong 39 Amino',
        price: '¥2,200',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/71zVwtFxmeL._AC_SL1500_.jpg',
        name: "Collagen Dorche",
        description: 'Supplement',
        price: '¥3,750',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/51YvNgNzDOS._AC_SL1500_.jpg',
        name: 'Whith White',
        description: 'Vitamin Supplement',
        price: '¥2,052',
        link: '#'
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61xfOHwzBrS._AC_SL1500_.jpg',
        name: 'White Vale',
        description: 'Beauty Supplement',
        price: '¥5,880',
        link: '#'
    },
]

export default function Page() {
    return(
        <Products name={"Others"} nav={nav} items={items}/>
    )
}