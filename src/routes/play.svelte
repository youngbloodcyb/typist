<script>
    import { onMount } from 'svelte';
    import Keyboard from "../components/keyboard.svelte";
    import { word } from '../stores/wordFetch';

    let listLength;
    let list;
    let guessLetters;

    let letterArray = [];

    const acceptableChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let isCorrect = false;

    onMount(() => {
        listLength = document.getElementById("letters").getElementsByTagName("li").length;
        list = document.querySelector("#letters");
        guessLetters = document.querySelector("#guess-letters");

    });

    
    const addListItem = (key) => {
        if (listLength <= 4) {
            if (acceptableChar.includes(key)) {
                let li = document.createElement("li");
                li.appendChild(document. createTextNode(key));
                list.appendChild(li);
                li.classList.add("w-auto", "h-auto", "border-black", "border-2", "border-solid", "rounded-xl", "p-2");
                listLength++;
                letterArray.push(key);
            }
        }
    }

    const deleteListItem = (key) => {
        if (key === "Backspace") {
            if (listLength >= 1) {
                list.removeChild(list.lastChild);
                listLength--;
                letterArray.pop(key);
            }
            guessLetters.style.backgroundColor = "white";
        }
    }

    const submitGuess = (key, array) => {
        let arr = array.join("");
        if (key === "Enter") {
            if (arr == $word) {
                isCorrect = true;
                guessLetters.style.backgroundColor = "#90ee90";
            } else {
                guessLetters.style.backgroundColor = "#ff6961";
            }
        }
    }

    const nextQuestion = (key, meta) => {
        if (key === "Enter" && meta && isCorrect == true) {
            location.reload();
        }
    }

    console.log($word);
</script>

<svelte:window on:keydown={e => addListItem(e.key)}
on:keydown={e => deleteListItem(e.key)}
on:keydown={e => submitGuess(e.key, letterArray)}
on:keydown={e => nextQuestion(e.key, e.metaKey)}
/>

<div class="h-screen flex flex-col justify-center items-center">
    <Keyboard/>

    <div id="guess-letters" class="flex flex-row justify-center items-center h-14 w-auto mt-10 rounded-xl">
        <ul class="flex flex-row justify-center uppercase gap-2 py-1 px-4" id="letters">
        </ul>
    </div>
    {#if isCorrect}
        <div class="mt-6">
            <span>You got it! Want to play again? Type ⌘ + return for another word.</span>
        </div>
    {/if}
</div>
