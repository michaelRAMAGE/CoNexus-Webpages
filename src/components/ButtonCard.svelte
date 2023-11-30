<script>
  export let description;
  export let base_image_path;
  export let button_path;
</script>

<div class="button-card relative w-80 h-80">
  <div class="relative">
    <img src={base_image_path} alt="" class="w-full h-auto" />
    <button class="absolute bottom-0 right-0">
      <img src={button_path} alt="" />
    </button>
  </div>
  <p class="absolute top-1 left-1/2 transform -translate-x-1/3 p-2">{description}</p>
</div>