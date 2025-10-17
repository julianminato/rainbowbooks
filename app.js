
// Minimal client-side data + cart
const DATA = [
  {id:'b1', title:'The Market Down Under', author:'E. Mahoney', price:24.99},
  {id:'b2', title:'Shadows of Collins St', author:'A. Ransome', price:19.50},
  {id:'b3', title:'Miles to Go: An Aussie Tale', author:'V. Watson', price:29.00},
  {id:'b4', title:'Warehouse Whisperer', author:'J. Kuznecki', price:18.25},
  {id:'b5', title:'Digital Turn of the Page', author:'I. van Dorn', price:27.75},
  {id:'b6', title:'Numbers Don’t Lie', author:'A. Singh', price:23.40},
];
const fmt = v => '$' + v.toFixed(2);
const cart = JSON.parse(localStorage.getItem('rb_cart')||'[]');
function saveCart(){ localStorage.setItem('rb_cart',JSON.stringify(cart)); updateCartBadge(); }
function addToCart(id){ const item = cart.find(i=>i.id===id); if(item) item.qty++; else cart.push({id,qty:1}); saveCart(); toast('Added to cart'); }
function removeFromCart(id){ const i = cart.findIndex(x=>x.id===id); if(i>-1) cart.splice(i,1); saveCart(); renderCart && renderCart(); }
function changeQty(id,delta){ const it=cart.find(x=>x.id===id); if(!it) return; it.qty=Math.max(1,(it.qty||1)+delta); saveCart(); renderCart && renderCart(); }
function updateCartBadge(){ const n = cart.reduce((s,i)=>s+i.qty,0); document.querySelectorAll('.cart-badge').forEach(el=>el.textContent=n); }
function toast(msg){ const t=document.querySelector('.toast'); if(!t) return; t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1400); }
document.addEventListener('DOMContentLoaded', updateCartBadge);
