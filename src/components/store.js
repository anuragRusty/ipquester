import { writable } from 'svelte/store';

export let gameState = writable("Waiting"); // Waiting,Menu,Objective,Running,Recap,Bonus;
