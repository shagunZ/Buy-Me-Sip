//Coffee : price_1NNzs3SAUVpuUIBLUb6QOs64
//cappiccino: price_1NO1RKSAUVpuUIBL7oY7d5Rg
//espresso: price_1NO1SMSAUVpuUIBLmZIEpaW4
const productsArray = [
    {
        id: "price_1NNzs3SAUVpuUIBLUb6QOs64",
        title: "Iced Coffee",
        price: 499
    },
    {
        id: "price_1NO1RKSAUVpuUIBL7oY7d5Rg",
        title: "Cappiccino",
        price: 349
    },
    {
        id: "price_1NO1SMSAUVpuUIBLmZIEpaW4",
        title: "Espresso",
        price: 399
    }
];



const getProductData = (id) => {
    let productData = productsArray.find(product=>product.id===id);

    if(productData==undefined){
        console.log("produc not exist"+id);
        return undefined
    }
  return  productData;
}

export {productsArray,getProductData}