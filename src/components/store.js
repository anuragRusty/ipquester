import { writable } from 'svelte/store';

const initState = {
    state:"Waiting", //"Objective","Running","Menu","Selection"
    sound:true,
    language:"English",
}

export let game = writable(initState);