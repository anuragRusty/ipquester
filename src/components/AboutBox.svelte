<script>
import {fade} from "svelte/transition";
</script>

<div class="container" in:fade>
<b>About the Game</b>
<div>"IP Quester" is an educational adventure game developed by Anurag Kumar Singh, Subhashini Subhi, Anjalita Kumari, Rohini Kumari, Ankit Raj, Tuhin Mandal, guided by Team's mentor Prof.Saunak Bhattacharya.</div>
<b>Game Concept</b>
<div>Explore intellectual property through dynamic queries and choices, shaping your unique story.</div>
<b>Gameplay</b>
<div>Navigate challenges, make choices, and grasp copyrights, trademarks, patents, and designs.</div>
<b>Education</b>
<div>"IP Quester" raises IP protection awareness, offering practical knowledge for anyone.</div>
</div>
<style>
    .container{
        width: 85%;
        height: 85%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    b{
        font-size: 1.3em;
    }
</style>