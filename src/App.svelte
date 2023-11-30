<script>
import BottomMenu from "./components/BottomMenu.svelte";
import CharacterSelection from "./components/CharacterSelection.svelte";
import LevelSelection from "./components/LevelSelection.svelte";
import MenuBox from "./components/MenuBox.svelte";
import ObjectiveBox from "./components/ObjectiveBox.svelte";
import SatusBar from "./components/SatusBar.svelte";
import StoreBox from "./components/StoreBox.svelte";
import TapButton from "./components/TapButton.svelte";
import {game} from "./components/store";
    
let input = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

</script>

<main>
{#if $game.state === "Waiting"}
<TapButton onClick={() => $game.state = "Menu"}/>
{:else if $game.state === "Menu"}
<MenuBox/>
{:else}
<SatusBar/>
  {#if $game.state === "Objective"}
   <ObjectiveBox input_text={input}/>
   {:else if $game.state === "LSelection"}
   <LevelSelection/>
   {:else if $game.state === "CSelection" || $game.state === "Character"}
   <CharacterSelection/>
   {:else if $game.state === "Store" || $game.state === "StoreItem"}
   <StoreBox/>
  {/if}
  <BottomMenu/>
{/if}
</main>



   