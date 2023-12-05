<script>
  import { AnimateTile } from "./index.js";
  import { createEventDispatcher } from 'svelte';

  export let tileData = [];
  export let collectionStyles = "";
  export let tileStyles = "";
  export let areLinks = false; 

  export let onTileClick = (detail) => {};

  // const dispatch = createEventDispatcher();
  function handleTileClick(detail) {
      console.log(detail + "in tile collection")
      onTileClick(detail)
      // dispatch('tileClick', detail);
  }
</script>

<div class={`${collectionStyles}`}>
  {#each tileData as story (story.name)}
    <AnimateTile
      id={story.name}
      primaryImage={story.thumbnail_primary}
      secondaryImage={story.thumbnail_secondary}
      alt={story.name}
      styles={tileStyles}
      isLink={areLinks ? true : false}
      on:tileClick={(event) => handleTileClick(event.detail)}
    />
  {/each}
</div>