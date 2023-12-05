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
        on_click_thumbnail: big_tiles_path+"bEscape.png",
        on_click_text: "Play as a prisoner going through experiments in a guarded prison and try to escape the planet by defeating or fleeing from The Warden."
    },
    "Arena": { 
        thumbnail_primary: small_tiles_path+"Arena1.png",
        thumbnail_secondary: small_tiles_path+"Arena2.png",
        on_click_thumbnail: big_tiles_path+"bArena.png",
        on_click_text: "Try to escape the prison planet by winning in a series of challenges which may include the gladiator's arena filled with powerful creatures."
    },
    "Assassin": { 
        thumbnail_primary: small_tiles_path+"Assassin1.png",
        thumbnail_secondary: small_tiles_path+"Assassin2.png",
        on_click_thumbnail: big_tiles_path+"bAssassin.png",
        on_click_text: "Play as Agent Zero, a highly trained assassin working for the forces of humanity, on a mission to infiltrate a base and assassinate an AI target vital to the war effort."
    },
    "Soldier": { 
        thumbnail_primary: small_tiles_path+"Soldier1.png",
        thumbnail_secondary: small_tiles_path+"Soldier2.png",
        on_click_thumbnail: big_tiles_path+"bSoldier.png",
        on_click_text: "Play as the Iron Lion, a legendary veteran fighting the AI empire."
    },
    "Spy": { 
        thumbnail_primary: small_tiles_path+"Spy1.png",
        thumbnail_secondary: small_tiles_path+"Spy2.png",
        on_click_thumbnail: big_tiles_path+"bSpy.png",
        on_click_text: "Play as a double agent known as Eyes of the Watcher, choose between the Insurgency and the Architect's Watcher, and steal highly classified information from the other side."
    },
    "Engineer": {
        thumbnail_primary: small_tiles_path+"Engineer1.png",
        thumbnail_secondary: small_tiles_path+"Engineer2.png",
        on_click_thumbnail: big_tiles_path+"bEngineer.png",
        on_click_text: "Play as the Doctor, on a mission to fix the universe with inventive solutions, as you are visiting planets in danger from a variety of apocalyptic threats."
    },
    "Oracle": {
        thumbnail_primary: small_tiles_path+"Oracle1.png",
        thumbnail_secondary: small_tiles_path+"Oracle2.png",
        on_click_thumbnail: big_tiles_path+"bOracle.png",
        on_click_text: "Play as the Oracle, on a mission to spread the seeds of rebellion against the machine overlords and convince the people of a new world to join the Resistance."
    },
    "Inception Ark": {
        thumbnail_primary: small_tiles_path+"Engineer1.png",
        thumbnail_secondary: small_tiles_path+"Engineer2.png",
        on_click_thumbnail: big_tiles_path+"bEngineer.png",
        on_click_text: "Play as a prisoner going through experiments in a guarded prison and try to escape the planet by defeating or fleeing from The Warden."
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