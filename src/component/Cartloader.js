import { getShoppingCart } from "../utilities/fakedb";

let CartLoaderpro =async ()=>{
let load=await fetch('products.json')
let product= await load.json();

let storcart=getShoppingCart();
let saveCart=[]
for (const id in storcart) {
   let addedProduct=product.find(pd=> pd.id===id);
   if(addedProduct){
    let quantity=storcart[id];
    addedProduct.quantity=quantity
saveCart.push(addedProduct)
}
}


return saveCart;

}
export {CartLoaderpro};