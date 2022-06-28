import {writable} from "svelte/store";

export let word = writable();

const wordFetch = async () => {
    const url = 'https://random-word-api.herokuapp.com/word?length=5';
    const res = await fetch(url);
    const data = await res.json();
    word.set(data);
};

wordFetch();