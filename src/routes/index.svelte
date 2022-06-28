<script>
    import Keyboard from "../components/keyboard.svelte";
    import Popup from "../components/popup.svelte";
    import { popupIsOpen } from "../stores/popup";

    const navToGame = (key) => {
        if (key == "Enter") {
            window.location = "/play";
        }
    }
</script>

<svelte:window on:keydown={e => navToGame(e.key)}/>

<div class="h-screen flex flex-col justify-center items-center">
    
    <a href="/play" class="h-40 w-40 rounded-xl border-black border-2 shadow-[-6px_6px_#000] hover:shadow-[-12px_12px_#000] transition-all duration-300 ease-in-out flex flex-row justify-center items-center">
            <span class="text-4xl font-bold mb-1">typist</span>
    </a>
</div>
<div class="flex flex-col justify-center items-center">
    <button class="text-sm absolute bottom-0 text-center my-10 hover:text-base transition-all ease-in-out duration-300" on:click={() => {popupIsOpen.set(true)}}>
        <span>press enter to play || click for how to play</span>
    </button>
</div>
{#if $popupIsOpen == true}
    <Popup>
        <h2 class="text-xl lowercase font-bold">how to play</h2>
        <p class="mt-4">A keyboard will appear on the screen with five letters highlighted. The object of the game is to guess what word can be made with the highlighted letters.</p>
        <p class="mt-4">Every word is five letters long. If less than five letters are highlighted, that means a letter is used twice or more. There can be more than one letter used more than once. Hence, there can sometimes be only three letters highlighted.</p>
        <p class="mt-4">Once you have typed out the word, press enter to submit your guess. If you guess the word correctly, the letters will turn green and you will be prompted to play again. If your guess is incorrect, the letters will turn red and you must backspace and try again.</p>
        <p class="mt-4">These words pull dynamically from a public word API. Thus, some of the words can be extremely difficult to guess, if not impossible... If you ever get stuck on a word, simply refresh the page to fetch a different word.</p>
        <h3 class="text-lg lowercase font-bold my-4">best of luck & have fun!</h3>
    </Popup>
{/if}