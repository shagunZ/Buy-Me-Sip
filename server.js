// sk_test_51NNzp4SAUVpuUIBLb0MNkxmBIv9S1cwl8uCpvUXHJiIUpdPXwuo3eMIzKrKmPVsw5aupPdJDYkEi2TBtvZiuS8PT00xDZcWKxj
//Coffee : price_1NNzs3SAUVpuUIBLUb6QOs64
//cappiccino: price_1NO1RKSAUVpuUIBL7oY7d5Rg
//espresso: price_1NO1SMSAUVpuUIBLmZIEpaW4

const express = require('express');
var cors = require('cors');
const { log } = require('console');
const stripe = require('stripe')('sk_test_51NNzp4SAUVpuUIBLb0MNkxmBIv9S1cwl8uCpvUXHJiIUpdPXwuo3eMIzKrKmPVsw5aupPdJDYkEi2TBtvZiuS8PT00xDZcWKxj')


const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async(req,res)=>{

    console.log(res.body)
    const items = req.body.items;
    let lineItems = [];
    items.forEach((items)=>{
        lineItems.push({
            price: items.id,
            quantity:items.quantity
        })
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode:'payment',
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url:session.url
    }));


});

app.listen(4000,()=>console.log("Listening on port 4000"));