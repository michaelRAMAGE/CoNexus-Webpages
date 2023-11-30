<script>
    import AnimateTile from "../components/AnimateTile.svelte";
    import { genres } from "../consts/dischordiansaga";
</script>

<div>
  {#each genres as genre (genre.title)}
    <div id={genre.title}>
      <h1 class="text-3xl font-bold">{genre.title}</h1>
      <div class="flex flex-row flex-wrap">
        {#each genre.stories as story (story.story_name)}
          <AnimateTile
            id={story.story_name}
            primaryImage={story.story_thumbnail_primary}
            secondaryImage={story.story_thumbnail_secondary}
            alt={story.story_name}
            styles='w-64 h-64'
          />
        {/each}
      </div>
    </div>
  {/each}
</div>