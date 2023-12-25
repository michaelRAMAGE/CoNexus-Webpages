<script>
  import { createEventDispatcher } from 'svelte';

  export let primaryImage = "";
  export let secondaryImage = "";
  export let alt = "";
  export let id = "";
  export let isLink = false;
  export let styles = ""; 

  let isHovered = false; 
</script>

{#if isLink}
  <a href={id} id={id} class='block' >
    <img src={isHovered ? secondaryImage : primaryImage} alt={alt} class={`${styles}`} on:mouseover={() => isHovered = true} on:mouseout={() => isHovered = false}/>
  </a>
{:else}
  <div id={id} on:click={handleClick} class='cursor-pointer' on:mouseover={() => isHovered = true} on:mouseout={() => isHovered = false}>
    <img src={isHovered ? secondaryImage : primaryImage} alt={alt} class={`${styles}`} />
  </div>
{/if}


