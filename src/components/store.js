import { writable } from 'svelte/store';

const initState = {
    state:"Waiting", //"Objective","Running","Menu","Store",LSelection",CSelection,"Character",Recap","Bonus"
    stateStack:["Menu"],
    menu:"PROFILE", // PROFILE,MENU
    sound:true,
    language:"English",
    player:{name:"",about:""}
}

export let game = writable(initState);