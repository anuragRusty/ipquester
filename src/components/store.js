import { writable } from 'svelte/store';

const initState = {
    state:"Waiting",
    sound:true,
    language:"English",
}

export let game = writable(initState);