import Products from "@/components/Products";
 const nav = [
     {
         link: '/rebeauty/body/body-shampoo',
         name: 'Body Shampoo'
    },
     {
         link: '/rebeauty/body/body-lotion',
         name: 'Body Lotion'
     },
 ]

const items = [
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61BqfsJ1W1L._AC_SL1500_.jpg',
        name: 'Vaseline',
        description: 'Unscented Body Milk',
        price: '¥880',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61fhSabEHUL._AC_SL1500_.jpg',
        name: 'Neutrogena',
        description: 'Body Emulsion',
        price: '¥1,236',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/714nb-5v7kL._AC_SL1500_.jpg',
        name: 'Biore',
        description: 'Moisturizing Milk',
        price: '¥483',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/717iy3N7w0L._AC_SL1500_.jpg',
        name: 'Nile',
        description: 'Cleansing Body Soap',
        price: '¥2,480',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/81wJXGO0m6L._AC_SL1500_.jpg',
        name: 'CII',
        description: 'Medicated Body Shampoo',
        price: '¥1,100',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/616FOhHXbmL._AC_SL1500_.jpg',
        name: 'Dove',
        description: 'High Capacity Body Soap',
        price: '¥2,050',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/51W9c3eij2L._AC_SL1200_.jpg',
        name: "L'Occitane",
        description: 'Elbavel Body Milk',
        price: '¥4,290',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61fnVbREaPL._AC_SL1500_.jpg',
        name: 'Cetaphil',
        description: 'Moisturizing Cream',
        price: '¥1,740',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/61GM6g83WaL._AC_SL1500_.jpg',
        name: 'Reihiro',
        description: 'Hatamugi Body Milk',
        price: '¥590',
    },
    ]

export default function Page() {
    return(
        <Products name={"Body"} nav={nav} items={items}></Products>
    )
}