export const heading = "The Dischordian Saga";

export const subHeadingText = `The Dischordian Saga led to the creation of CoNexus and tells the epic narrative of wars between Artificial Intelligence and Humanity. Its story nodes, voted on by the Potentials NFT holders, evolve the lore and activate a new story within CoNexus each week.`

const base_path = "/assets/CoNexusV1/DischordianSaga/"
const small_tiles_path = base_path+"/SmallTiles/"
const big_tiles_path = base_path+"/BigTiles/"

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
        thumbnail_primary: small_tiles_path+"Escape1.png",
        thumbnail_secondary: small_tiles_path+"Escape2.png",
        on_click_thumbnail: big_tiles_path+"bEscape.png"
    },
    "Arena": { 
        thumbnail_primary: small_tiles_path+"Arena1.png",
        thumbnail_secondary: small_tiles_path+"Arena2.png",
        on_click_thumbnail: big_tiles_path+"bArena.png"
    },
    "Assassin": { 
        thumbnail_primary: small_tiles_path+"Assassin1.png",
        thumbnail_secondary: small_tiles_path+"Assassin2.png",
        on_click_thumbnail: big_tiles_path+"bAssassin.png"
    },
    "Soldier": { 
        thumbnail_primary: small_tiles_path+"Soldier1.png",
        thumbnail_secondary: small_tiles_path+"Soldier2.png",
        on_click_thumbnail: big_tiles_path+"bSoldier.png"
    },
    "Spy": { 
        thumbnail_primary: small_tiles_path+"Spy1.png",
        thumbnail_secondary: small_tiles_path+"Spy2.png",
        on_click_thumbnail: big_tiles_path+"bSpy.png"
    },
    "Engineer": {
        thumbnail_primary: small_tiles_path+"Engineer1.png",
        thumbnail_secondary: small_tiles_path+"Engineer2.png",
        on_click_thumbnail: big_tiles_path+"bEngineer.png"
    },
    "Oracle": {
        thumbnail_primary: small_tiles_path+"Oracle1.png",
        thumbnail_secondary: small_tiles_path+"Oracle2.png",
        on_click_thumbnail: big_tiles_path+"bOracle.png"
    },
    "Inception Ark": {
        thumbnail_primary: small_tiles_path+"Engineer1.png",
        thumbnail_secondary: small_tiles_path+"Engineer2.png",
        on_click_thumbnail: big_tiles_path+"bEngineer.png"
    }
}

export const genres = [
    {
        title: "General",
        stories: [
        {
            name: "Escape",
            thumbnail_primary: small_tiles_path+"Escape1.png",
            thumbnail_secondary: small_tiles_path+"Escape2.png",
            on_click_thumbnail: big_tiles_path+"bEscape.png"
        }, 
        {
            name: "Arena",
            thumbnail_primary: small_tiles_path+"Arena1.png",
            thumbnail_secondary: small_tiles_path+"Arena2.png",
            on_click_thumbnail: big_tiles_path+"bArena.png"
        }] 
    },
    {
        title: "Class-gated",
        stories: [
        {
            name: "Assassin",
            thumbnail_primary: small_tiles_path+"Assassin1.png",
            thumbnail_secondary: small_tiles_path+"Assassin2.png",
            on_click_thumbnail: big_tiles_path+"bAssassin.png"
        }, 
        {
            name: "Soldier",
            thumbnail_primary: small_tiles_path+"Soldier1.png",
            thumbnail_secondary: small_tiles_path+"Soldier2.png",
            on_click_thumbnail: big_tiles_path+"bSoldier.png"
        },
        {
            name: "Spy",
            thumbnail_primary: small_tiles_path+"Spy1.png",
            thumbnail_secondary: small_tiles_path+"Spy2.png",
            on_click_thumbnail: big_tiles_path+"bSpy.png"
        }, 
        {
            name: "Engineer",
            thumbnail_primary: small_tiles_path+"Engineer1.png",
            thumbnail_secondary: small_tiles_path+"Engineer2.png",
            on_click_thumbnail: big_tiles_path+"bEngineer.png"
        },
        {
            name: "Oracle",
            thumbnail_primary: small_tiles_path+"Oracle1.png",
            thumbnail_secondary: small_tiles_path+"Oracle2.png",
            on_click_thumbnail: big_tiles_path+"bOracle.png"
        }] 
    },
    {  
        title: "Trait-gated",
        stories: [
        {
            name: "Inception Ark",
            thumbnail_primary: small_tiles_path+"InceptionArk1.png",
            thumbnail_secondary: small_tiles_path+"InceptionArk2.png",
            on_click_thumbnail: big_tiles_path+"bInceptionArk.png"
        }] 
    } 
]