<script>
    import { AnimateTile, ButtonCard } from "../components/index.js";

    export let stories = [];

    let selectedTileId;
    function handleTileClick(event) {
        selectedTileId = event.detail.id;
    }

</script>

<div>
    {#each stories as story (story.story_name)}
        <AnimateTile
            id={story.story_name}
            primaryImage={story.story_thumbnail_primary}
            secondaryImage={story.story_thumbnail_secondary}
            alt={story.story_name}
            styles='w-64 h-64'
            on:tileClick={handleTileClick}
        />
    {/each}

    {#if selectedTileId}
        <ButtonCard id={selectedTileId} />
    {/if}
</div>