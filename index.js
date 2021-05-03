import {Observable}  from './observer.js';

const input=document.querySelector('input');
const p1=document.getElementById('p1');
const p2=document.getElementById('p2');
const p3=document.getElementById('p3');

    const upP1= text=>p1.textContent=text;
    const upP2= text=>p2.textContent=text;
    const upP3= text=>p3.textContent=text;

const obs=new Observable();

obs.subscribe(upP1);
obs.subscribe(upP2);
obs.subscribe(upP3);


input.addEventListener('keyup',e=>{
    obs.notify(e.target.value);
})

