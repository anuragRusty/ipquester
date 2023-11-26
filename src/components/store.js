import { writable } from 'svelte/store';

const initState = {
    state:"Waiting", //"Objective","Running","Menu","LSelection",CSelection,"Recap","Bonus"
    stateStack:["Menu"],
    menu:"MENU", // PROFILE,MENU
    sound:true,
    language:"English",
}

export let game = writable(initState);