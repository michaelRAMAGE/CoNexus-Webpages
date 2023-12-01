<script>
    import { AnimateTile } from "./index.js";
    import { createEventDispatcher } from 'svelte';
    export let stories = [];
    export let onTileClick = (detail) => {};
    
    // const dispatch = createEventDispatcher();
  
    function handleTileClick(detail) {
        console.log(detail + "in tile collection")
        onTileClick(detail)
        // dispatch('tileClick', detail);
    }
  </script>
  
  <div>
    {#each stories as story (story.name)}
      <AnimateTile
        id={story.name}
        primaryImage={story.thumbnail_primary}
        secondaryImage={story.thumbnail_secondary}
        alt={story.name}
        styles='w-64 h-64'
        on:tileClick={(event) => handleTileClick(event.detail)}
      />
    {/each}
  </div>
  