<script>
  export let primaryImage = "";
  export let secondaryImage = "";
  export let alt = "";
  export let id = "";
  export let isLink = false;
  export let styles = "";
  
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  function handleClick() {
    console.log(id + "in animate tile")
    dispatch('tileClick', { id });
  }

</script>

{#if isLink}
  <a href={id} id={id} class={`hover-image ${styles}`}>
    <img src={primaryImage} alt={alt} class="primary-image" />
    <img src={secondaryImage} alt={`${alt}-selected`} class="secondary-image" />
  </a>
{:else}
  <button id={id} class={`hover-image ${styles}`} on:click={handleClick}>
    <img src={primaryImage} alt={alt} class="primary-image" />
    <img src={secondaryImage} alt={`${alt}-selected`} class="secondary-image" />
  </button>
{/if}

<style scoped>
  .hover-image {
    overflow: hidden;
  }

  .secondary-image {
    display: none;
  }

  .hover-image:hover .secondary-image {
    display: block;
    opacity: 1;
  }

  .hover-image:hover .primary-image {
    display: none;
  }
</style>
