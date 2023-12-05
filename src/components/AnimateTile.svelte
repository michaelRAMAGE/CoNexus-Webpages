<script>
  import { createEventDispatcher } from 'svelte';

  export let primaryImage = "";
  export let secondaryImage = "";
  export let alt = "";
  export let id = "";
  export let isLink = false;
  export let styles = ""; 

  let isHovered = false; 

  const dispatch = createEventDispatcher();
  function handleClick() {
    console.log(id + "in animate tile")
    dispatch('tileClick', { id });
  }
</script>

{#if isLink}
  <a href={id} class={`${styles} block`} id={id} >
    <img src={isHovered ? secondaryImage : primaryImage} alt={alt} on:mouseover={() => isHovered = true} on:mouseout={() => isHovered = false}/>
  </a>
{:else}
  <button id={id} class={`${styles}`} on:click={handleClick} on:mouseover={() => isHovered = true} on:mouseout={() => isHovered = false}>
    <img src={isHovered ? secondaryImage : primaryImage} alt={alt} class="" />
  </button>
{/if}


