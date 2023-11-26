import { writable } from 'svelte/store';

const initState = {
    state:"Waiting", //"Objective","Running","Menu","Store",LSelection",CSelection,"Recap","Bonus"
    stateStack:["Menu"],
    menu:"PROFILE", // PROFILE,MENU
    sound:true,
    language:"English",
}

export let game = writable(initState);