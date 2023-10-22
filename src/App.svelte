<script>
import MenuBox from "./components/MenuBox.svelte";
import ObjectiveBox from "./components/ObjectiveBox.svelte";
import SatusBar from "./components/SatusBar.svelte";
import TapButton from "./components/TapButton.svelte";
import {game} from "./components/store";
    
let input = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;
</script>

<main>
{#if $game.state === "Waiting"}
<TapButton onClick={() => $game.state = "Menu"}/>
{:else if $game.state === "Menu"}
<MenuBox/>
{:else if $game.state === "Running" || $game.state === "Objective"}
<SatusBar/>
  {#if $game.state === "Objective"}
   <ObjectiveBox input_text={input}/>
  {/if}
{/if}
</main>

