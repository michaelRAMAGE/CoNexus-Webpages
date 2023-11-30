<script>
    import { AnimateTile, ButtonCard } from "../components/index.js";

    export let stories = [];

    let selectedTileId;
    function handleTileClick(event) {
        selectedTileId = event.detail.id;
    }

</script>

<div>
    {#each stories as story (story.name)}
        <AnimateTile
            id={story.name}
            primaryImage={story.thumbnail_primary}
            secondaryImage={story.thumbnail_secondary}
            alt={story.name}
            styles='w-64 h-64'
            on:tileClick={handleTileClick}
        />
    {/each}

    {#if selectedTileId}
        <ButtonCard id={selectedTileId} />
    {/if}
</div>