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
    {#if areLinks}
      <a href={story.name} id={story.name} class='block' >
        <AnimateTile
          id={story.name}
          primaryImage={story.thumbnail_primary}
          secondaryImage={story.thumbnail_secondary}
          alt={story.name}
          styles={tileStyles}
        />
      </a>
    {:else} 
      <AnimateTile
        id={story.name}
        primaryImage={story.thumbnail_primary}
        secondaryImage={story.thumbnail_secondary}
        alt={story.name}
        styles={tileStyles}
      />
    {/if}
  {/each}
</div>