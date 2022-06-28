<script>
    import { onMount } from 'svelte';
    import Loading from "../components/loading.svelte"

    let key;
    let isPressed = false;
    let newWord;
    let firstRow;
    let secondRow;
    let thirdRow;

    let isLoaded = false;

    onMount(() => {
        firstRow = document.getElementById("first-row").children;
        secondRow = document.getElementById("second-row").children;
        thirdRow = document.getElementById("third-row").children;

        setTimeout(() => {
        newWord = JSON.stringify($word);
        // console.log(newWord);
        for (let i = 0; i < firstRow.length; i++) {
            newWord.includes(firstRow[i].textContent) ? firstRow[i].style.backgroundColor = "#AEC6CF" : firstRow[i].style.backgroundColor = "white";
        }
        for (let i = 0; i < secondRow.length; i++) {
            newWord.includes(secondRow[i].textContent) ? secondRow[i].style.backgroundColor = "#AEC6CF" : secondRow[i].style.backgroundColor = "white";
        }
        for (let i = 0; i < thirdRow.length; i++) {
            newWord.includes(thirdRow[i].textContent) ? thirdRow[i].style.backgroundColor = "#AEC6CF" : thirdRow[i].style.backgroundColor = "white";
        }
        isLoaded = true;
    }, 1000);
    });
    
    const handleKeydown = (e) => {
        key = e.key;
        isPressed = true;
    }

    import { word } from "../stores/wordFetch";

</script>

<svelte:window on:keydown={handleKeydown}
 on:keyup={() => {isPressed = false}}/>

{#if !isLoaded}
    <Loading/>
{/if}
 
<div id="keyboard" class="h-auto w-screen flex flex-col justify-center items-center gap-4">
    <div id="first-row" class="h-auto w-auto flex flex-row gap-3 text-2xl uppercase">
        <div style:box-shadow={key == "q" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>q</span></div>
        <div style:box-shadow={key == "w" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>w</span></div>
        <div style:box-shadow={key == "e" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>e</span></div>
        <div style:box-shadow={key == "r" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>r</span></div>
        <div style:box-shadow={key == "t" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>t</span></div>
        <div style:box-shadow={key == "y" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>y</span></div>
        <div style:box-shadow={key == "u" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>u</span></div>
        <div style:box-shadow={key == "i" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>i</span></div>
        <div style:box-shadow={key == "o" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>o</span></div>
        <div style:box-shadow={key == "p" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>p</span></div>
    </div>

    <div id="second-row" class="h-auto w-auto flex flex-row gap-3 text-2xl uppercase">
        <div style:box-shadow={key == "a" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>a</span></div>
        <div style:box-shadow={key == "s" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>s</span></div>
        <div style:box-shadow={key == "d" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>d</span></div>
        <div style:box-shadow={key == "f" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>f</span></div>
        <div style:box-shadow={key == "g" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>g</span></div>
        <div style:box-shadow={key == "h" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>h</span></div>
        <div style:box-shadow={key == "j" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>j</span></div>
        <div style:box-shadow={key == "k" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>k</span></div>
        <div style:box-shadow={key == "l" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>l</span></div>
    </div>

    <div id="third-row" class="h-auto w-auto flex flex-row gap-3 text-2xl uppercase ml-8">
        <div style:box-shadow={key == "z" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>z</span></div>
        <div style:box-shadow={key == "x" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>x</span></div>
        <div style:box-shadow={key == "c" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>c</span></div>
        <div style:box-shadow={key == "v" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>v</span></div>
        <div style:box-shadow={key == "b" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>b</span></div>
        <div style:box-shadow={key == "n" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>n</span></div>
        <div style:box-shadow={key == "m" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-20 h-20 flex flex-row justify-center items-center rounded-xl"><span>m</span></div>
        <div style:box-shadow={key == "Enter" && isPressed === true ? "-3px 3px #000" : "none"} class="border-2 border-black border-solid w-36 h-20 flex flex-row justify-center items-center rounded-xl lowercase"><span>return</span></div>
    </div>

</div>