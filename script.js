// Script for navigation bar
const bar=document.getElementsById('bar');
const close=document.getElementsById('close');
const nav=document.getElementsById('navbar');

if(bar)
{
  bar.addEventListener('click', () =>{
  nav.classList.add('active');
  })
}


if(close)
{
  bar.addEventListener('click', () =>{
  nav.classList.remove('active');
  })
}
