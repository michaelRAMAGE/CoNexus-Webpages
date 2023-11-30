export const heading = "The Dischordian Saga";

export const subHeadingText = `The Dischordian Saga led to the creation of CoNexus and tells the epic narrative of wars between Artificial Intelligence and Humanity. Its story nodes, voted on by the Potentials NFT holders, evolve the lore and activate a new story within CoNexus each week.`

const small_tiles_path = "/assets/CoNexusV1/DischordianSaga/SmallTiles/"
const big_tiles_path = "/assets/CoNexusV1/DischordianSaga/BigTiles/"

export const story_names = [
    "Escape",
    "Arena",
    "Assassin",
    "Solder",
    "Spy",
    "Engineer",
    "Oracle",
    "Inception Ark"
]

export const stories = {
    "Escape": { 
        story_thumbnail_primary: small_tiles_path+"Escape1.png",
        story_thumbnail_secondary: small_tiles_path+"Escape2.png",
        on_click_thumbnail: big_tiles_path+"bEscape.png"
    },
    "Arena": { 
        story_thumbnail_primary: small_tiles_path+"Arena1.png",
        story_thumbnail_secondary: small_tiles_path+"Arena2.png",
        on_click_thumbnail: big_tiles_path+"bArena.png"
    },
    "Assassin": { 
        story_thumbnail_primary: small_tiles_path+"Assassin1.png",
        story_thumbnail_secondary: small_tiles_path+"Assassin2.png",
        on_click_thumbnail: big_tiles_path+"bAssassin.png"
    },
    "Soldier": { 
        story_thumbnail_primary: small_tiles_path+"Soldier1.png",
        story_thumbnail_secondary: small_tiles_path+"Soldier2.png",
        on_click_thumbnail: big_tiles_path+"bSoldier.png"
    },
    "Spy": { 
        story_thumbnail_primary: small_tiles_path+"Spy1.png",
        story_thumbnail_secondary: small_tiles_path+"Spy2.png",
        on_click_thumbnail: big_tiles_path+"bSpy.png"
    },
    "Engineer": {
        story_thumbnail_primary: small_tiles_path+"Engineer1.png",
        story_thumbnail_secondary: small_tiles_path+"Engineer2.png",
        on_click_thumbnail: big_tiles_path+"bEngineer.png"
    },
    "Oracle": {
        story_thumbnail_primary: small_tiles_path+"Oracle1.png",
        story_thumbnail_secondary: small_tiles_path+"Oracle2.png",
        on_click_thumbnail: big_tiles_path+"bOracle.png"
    },
    "Inception Ark": {
        story_thumbnail_primary: small_tiles_path+"Engineer1.png",
        story_thumbnail_secondary: small_tiles_path+"Engineer2.png",
        on_click_thumbnail: big_tiles_path+"bEngineer.png"
    }
}

export const genres = [
    {
        title: "General",
        stories: [
        {
            story_name: "Escape",
            story_thumbnail_primary: small_tiles_path+"Escape1.png",
            story_thumbnail_secondary: small_tiles_path+"Escape2.png",
            on_click_thumbnail: big_tiles_path+"bEscape.png"
        }, 
        {
            story_name: "Arena",
            story_thumbnail_primary: small_tiles_path+"Arena1.png",
            story_thumbnail_secondary: small_tiles_path+"Arena2.png",
            on_click_thumbnail: big_tiles_path+"bArena.png"
        }] 
    },
    {
        title: "Class-gated",
        stories: [
        {
            story_name: "Assassin",
            story_thumbnail_primary: small_tiles_path+"Assassin1.png",
            story_thumbnail_secondary: small_tiles_path+"Assassin2.png",
            on_click_thumbnail: big_tiles_path+"bAssassin.png"
        }, 
        {
            story_name: "Soldier",
            story_thumbnail_primary: small_tiles_path+"Soldier1.png",
            story_thumbnail_secondary: small_tiles_path+"Soldier2.png",
            on_click_thumbnail: big_tiles_path+"bSoldier.png"
        },
        {
            story_name: "Spy",
            story_thumbnail_primary: small_tiles_path+"Spy1.png",
            story_thumbnail_secondary: small_tiles_path+"Spy2.png",
            on_click_thumbnail: big_tiles_path+"bSpy.png"
        }, 
        {
            story_name: "Engineer",
            story_thumbnail_primary: small_tiles_path+"Engineer1.png",
            story_thumbnail_secondary: small_tiles_path+"Engineer2.png",
            on_click_thumbnail: big_tiles_path+"bEngineer.png"
        },
        {
            story_name: "Oracle",
            story_thumbnail_primary: small_tiles_path+"Oracle1.png",
            story_thumbnail_secondary: small_tiles_path+"Oracle2.png",
            on_click_thumbnail: big_tiles_path+"bOracle.png"
        }] 
    },
    {  
        title: "Trait-gated",
        stories: [
        {
            story_name: "Inception Ark",
            story_thumbnail_primary: small_tiles_path+"InceptionArk1.png",
            story_thumbnail_secondary: small_tiles_path+"InceptionArk2.png",
            on_click_thumbnail: big_tiles_path+"bInceptionArk.png"
        }] 
    } 
]