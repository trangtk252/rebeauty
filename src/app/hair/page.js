import Products from "@/components/Products";
const nav = [
    {
        link: '#',
        name: 'Shampoo'
    },
    {
        link: '/rebeauty/hair/conditioner',
        name: 'Conditioner'
    },
    {
        link: '/rebeauty/hair/hair-oil',
        name: 'Hair Oil'
    },
]

const items = [
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61cy-xGtwFL._AC_SL1100_.jpg',
        name: 'Botanist',
        description: 'Botanical Shampoo',
        price: '¥2,607',
        link: '#'
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61FcmINtkEL._AC_SL1000_.jpg',
        name: 'Tsubaki',
        description: 'Extra Large Shampoo',
        price: '¥2,980',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/71FXgyeXlQL._AC_SL1500_.jpg',
        name: 'Lux',
        description: 'Damage Repair Shampoo',
        price: '¥1,790',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/81iYay3PJHL._AC_SL1500_.jpg',
        name: 'Pantene',
        description: 'Treatment in Conditioner',
        price: '¥1,380',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/81wJXGO0m6L._AC_SL1500_.jpg',
        name: 'Orna',
        description: 'Organic Conditioner',
        price: '¥2,037',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Gkwxk8R6L._AC_SL1000_.jpg',
        name: 'MVNE',
        description: 'Conditioner',
        price: '¥960',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/51k-gPOv-gL._AC_SL1100_.jpg',
        name: "Moroccanoil",
        description: 'Treatment',
        price: '¥4,730',
        link: '#'

    },
    {
        image: 'https://d9vmi5fxk1gsw.cloudfront.net/home/glowmee/upload/20161212/1481536121465.jpg',
        name: 'Raip R3 Argan',
        description: 'Hair Oil',
        price: '¥1,378',
        link: '#'

    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/51YcpEIAJoL._AC_SL1000_.jpg',
        name: "L'Oreal",
        description: 'Paris Elseve Hair Oil',
        price: '¥1,650',
        link: '#'

    },
]

export default function Page() {
    return(
        <Products name={"Hair"} nav={nav} items={items}></Products>
    )
}