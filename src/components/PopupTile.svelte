<script>
  import { createEventDispatcher } from "svelte";
  import styles from '../styles/styles.js';
   
  export let img_path = "";
  export let img_alt = "";
  export let button_path = "";
  export let button_hover_path = "";
  export let tile_styles = ""; 
  export let text = "";
  
  let buttonIsHovered = false;
  const dispatch = createEventDispatcher();

  function pressPlay() {
    dispatch('play', {
      text: 'play'
    });
  }

</script>

<div style='' class={`flex flex-row w-[800px] h-[376px] p-[4.3px] m-2 rounded-2xl bg-blue ${tile_styles}`}> 
    <img class={`h-[368px] w-[368px] mr-2`} src={`${img_path}`} alt={`${img_alt}`} />
    <div class='flex flex-col mt-2'>
      <p class='mb-auto font-pt-serif-caption text-white'>{text}</p> 
      <a href="/" class="mt-auto ml-auto w-2/3" on:mouseover={() => buttonIsHovered = true} on:mouseout={() => buttonIsHovered = false}>
        <img src={ buttonIsHovered ? button_hover_path : button_path} alt="play"/>
      </a>
    </div>
</div>