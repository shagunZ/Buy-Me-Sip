//Coffee : price_1NNzs3SAUVpuUIBLUb6QOs64
//cappiccino: price_1NO1RKSAUVpuUIBL7oY7d5Rg
//espresso: price_1NO1SMSAUVpuUIBLmZIEpaW4
//frappe: price_1NOlTzSAUVpuUIBLIygEYTv2
//latte: price_1NOlVoSAUVpuUIBLO6WTJduS
//americano: price_1NOlWVSAUVpuUIBLsH8PJMa8
//longbalck: price_1NOlX6SAUVpuUIBLIGHCYita
//affogato: price_1NOlY4SAUVpuUIBLMaCySstY
//caffe mocha: price_1NOlZ1SAUVpuUIBLWsgPWFFD
const productsArray = [
    {
        id: "price_1NNzs3SAUVpuUIBLUb6QOs64",
        title: "Iced Coffee",
        img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price: 499
    },
    {
        id: "price_1NO1RKSAUVpuUIBL7oY7d5Rg",
        title: "Cappiccino",
        img:"https://media.istockphoto.com/id/1442009345/photo/mocha-with-latte-art-served-in-a-cup-isolated-on-dark-grey-background-top-view-of-hot-coffee.webp?b=1&s=170667a&w=0&k=20&c=2Y-0FiuQX9jvtnbJ-Mz33D0lq_-a3Emqxd5jHpuaW6k=",
        price: 349
    },
    {
        id: "price_1NOlTzSAUVpuUIBLIygEYTv2",
        title: "Frappe",
        img:"https://images.unsplash.com/photo-1534449369274-82e4ad08bf35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJhcHBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price: 449
    },
    {
        id: "price_1NOlVoSAUVpuUIBLO6WTJduS",
        title: "Latte",
        img:"https://plus.unsplash.com/premium_photo-1677610060350-b2f76add6bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 299
    },
    {
        id: "price_1NOlWVSAUVpuUIBLsH8PJMa8",
        title: "Americano",
        img:"https://plus.unsplash.com/premium_photo-1667112016529-b61c178c0a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW5vfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price: 249
    },
    {
        id: "price_1NOlX6SAUVpuUIBLIGHCYita",
        title: "Long Black",
        img:"https://plus.unsplash.com/premium_photo-1672436880050-e876098f3032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 299
    },
    {
        id: "price_1NOlY4SAUVpuUIBLMaCySstY",
        title: "Affogato",
        img:"https://images.unsplash.com/photo-1567357502214-dd13f3512e71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZmb2dhdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 399
    },
    {
        id: "price_1NOlZ1SAUVpuUIBLWsgPWFFD",
        title: "Caffe mocha",
        img:"https://plus.unsplash.com/premium_photo-1663012978924-5bfd443ac932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9jaGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 499
    },
    {
        id: "price_1NO1SMSAUVpuUIBLmZIEpaW4",
        title: "Espresso",
        img:"https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 399
    }
];



const getProductData = (id) => {
    let productData = productsArray.find(product=>product.id===id);

    if(productData===undefined){
        console.log("produc not exist"+id);
        return undefined
    }
  return  productData;
}

export {productsArray,getProductData}