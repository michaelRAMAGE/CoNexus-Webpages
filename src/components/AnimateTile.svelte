<script>
  export let primaryImage;
  export let secondaryImage;
  export let alt;
  export let styles = '';
  export let id;
  export let isLink = false; // New prop to determine if it should be a link
</script>

{#if isLink}
  <a href={id} id={id} class={`hover-image ${styles}`}>
    <img src={primaryImage} alt={alt} class="primary-image" />
    <img src={secondaryImage} alt={`${alt}-selected`} class="secondary-image" />
  </a>
{:else}
  <div id={id} class={`hover-image ${styles}`}>
    <img src={primaryImage} alt={alt} class="primary-image" />
    <img src={secondaryImage} alt={`${alt}-selected`} class="secondary-image" />
  </div>
{/if}

<style>
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

