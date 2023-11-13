import Products from "@/components/Products";
const nav = [
    {
        link: '/rebeauty/face/cleanser',
        name: 'Cleanser'
    },
    {
        link: '/rebeauty/face/toner',
        name: 'Toner'
    },
    {
        link: '/rebeauty/face/moisturizer',
        name: 'Moisturizer'
    },
    {
        link: '/rebeauty/face/mask',
        name: 'Mask'
    },
]

const items = [
    {
        image: 'https://pyxis.nymag.com/v1/imgs/4eb/bcf/26ee99adc9bf320797dd9bdc3b50e48efb-2----.rsquare.w600.jpg',
        name: 'Bioderma',
        description: 'Sensibio H2O Micellar Water',
        price: '¥1,801',
        link: '#'

    },
    {
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585257585-s-l640-1585257552.jpg',
        name: 'Cetaphil',
        description: 'Daily Facial Cleanser',
        price: '¥1,590',
        link: '/rebeauty/face/cleanser/cetaphil'

    },
    {
        image: 'https://img.cosmostore.org/cache/front/shop/products/430/1265798/650x650.jpg',
        name: 'Micellar Water',
        description: 'Moisturizing Milk',
        price: '¥2,860',
        link: '#'

    },
    {
        image: 'http://product.hstatic.net/1000036599/product/thefaceshop-rice-water-bright-cleansing-foam-300ml_4909cb32a4bc45c290f4f162cdd26f02_grande.png',
        name: 'The Face Shop',
        description: 'Rice Water Cleasing Foam',
        price: '¥1,200',
        link: '/rebeauty/face/cleanser/TFS'
    },
    {
        image: 'https://cdna2.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000//auto_image/compress/https://s3.amazonaws.com/zcom-media/sites/a0iE000000EnvnVIAR/media/catalog/product/2/0/202102_saborino_rn_pink5_780x780.jpg',
        name: 'Saborino',
        description: 'Sakura Face Mask',
        price: '¥1,700',
        link: '#'
    },
    {
        image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12520697-9414759062532539.jpg',
        name: 'AHC',
        description: 'Hydrating Aqualuronic Toner',
        price: '¥3,060',
        link: '#'

    },
    {
        image: 'https://s3.images-iherb.com/smi/smi33366/v/2.jpg',
        name: "Some By Mi",
        description: '30 Days Miracle Toner',
        price: '¥1,586',
        link: '#'

    },
    {
        image: 'https://image.makewebeasy.net/makeweb/0/6IvlpdvzY/Banner/SOOTHING_MOISTURE_ALOE_VERA_92_SOOTHING_GEL_01.jpg',
        name: 'Nature Republic',
        description: 'Aloe Vera Soothing Gel',
        price: '¥730',
        link: '#'

    },
    {
        image: 'https://online.lululun.com/Contents/ProductImages/0/r013_LL.jpg',
        name: 'Lululun',
        description: 'Face Mask',
        price: '¥1,650',
        link: '#'

    },
]

export default function Page() {
    return(
        <Products name={"Face"} nav={nav} items={items}></Products>
    )
}