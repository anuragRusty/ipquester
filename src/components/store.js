import { writable } from 'svelte/store';

const initState = {
    state:"Waiting", //"Objective","Running","Menu","Store","StoreItem",LSelection",CSelection,"Character",Recap","Bonus"
    stateStack:["Menu"],
    menu:"PROFILE", // PROFILE,MENU
    sound:true,
    language:"English",
    player:{char:"",about:""}
}

export let game = writable(initState);