<script>
  export let primaryImage = "";
  export let secondaryImage = "";
  export let alt = "";
  export let id = "";
  export let styles = "";

  let isHovered = false;
</script>

<div
  id={id}
  on:mouseover={() => isHovered = true}
  on:mouseout={() => isHovered = false}
  class='cursor-pointer'
>
  <img src={isHovered ? secondaryImage : primaryImage} alt={alt} class={`${styles}`} />
</div>
