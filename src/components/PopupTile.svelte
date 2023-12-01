<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function pressPlay() {
    dispatch('play', {
      text: 'play'
    });
  }
</script>

<div  class="">
    <img src="/assets/CoNexusV1/DischordianSaga/BigTiles/bArena.png" alt="test"/>
</div>