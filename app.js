
const DATA=[
{id:'b1',title:'Tomorrow, and Tomorrow, and Tomorrow',author:'Gabrielle Zevin',price:24.99},
{id:'b2',title:'Lessons in Chemistry',author:'Bonnie Garmus',price:19.50},
{id:'b3',title:'The Seven Moons of Maali Almeida',author:'Shehan Karunatilaka',price:29.00},
{id:'b4',title:'The Lincoln Highway',author:'Amor Towles',price:18.25},
{id:'b5',title:'Project Hail Mary',author:'Andy Weir',price:27.75},
{id:'b6',title:'The Midnight Library',author:'Matt Haig',price:23.40},
];
const fmt=v=>'$'+v.toFixed(2);
const cart=JSON.parse(localStorage.getItem('cart')||'[]');
function addToCart(id){const i=cart.find(x=>x.id===id);if(i)i.qty++;else cart.push({id,qty:1});localStorage.setItem('cart',JSON.stringify(cart));alert('Added '+id);}
