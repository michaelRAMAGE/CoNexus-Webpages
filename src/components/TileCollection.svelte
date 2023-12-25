<script>
  import { AnimateTile } from "./index.js";
  import { createEventDispatcher } from 'svelte';

  export let tileData = [];
  export let collectionStyles = "";
  export let tileStyles = "";
  export let areLinks = false; 
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
    />
  {/each}
</div>