const products = [
  { name: "T-shirt",    price: 800,  stock: 12,  category: "clothing"    },
  { name: "Headphones", price: 2500, stock: 0,   category: "electronics" },
  { name: "Notebook",   price: 150,  stock: 45,  category: "stationery"  },
  { name: "Sneakers",   price: 3200, stock: 5,   category: "clothing"    },
  { name: "Pen",        price: 50,   stock: 200, category: "stationery"  },
];

products.forEach(products => {
    if(products.stock > 0) 
    console.log(products.name);
});



products.forEach(products => {
    if(products.price < 1000) 
    console.log(products.name);
});


products.forEach(products => {
if (products.category == "clothing") 
    console.log(products.name)
});


let totalValue= 0;

 products.forEach(products => {
 totalValue += products.price * products.stock;
 });
  
console.log(totalValue);


 products.forEach(products => {
 if(products.category === "clothing" && products.stock > 0) {
  console.log(`${products.name} (In Stock: ${products.stock})`);
    }
  });

