export const heading = "SAGAVERSE GAMING";

export const subHeadingText = 
`Sagaverse Gaming consists of custom games and events that seamlessly integrate with the Dischordian Saga's lore and enhance the NFTs' narrative.

These experiences, created by ourselves, as well as in collaboration with our Web3 partners, provide extra rewards, encourage community interaction, and expand engagement across diverse games, metaverses, and blockchain platforms.`

const base_path = "/assets/SagaversePage/";
const small_tiles_path = base_path+"/SmallTiles/";
const big_tiles_path = base_path+"/BigTiles/";

export const all_games = [
    {
        title: "Our Games",
        content: [
            {
                name: "Battle For Nexon",
                thumbnail_primary: small_tiles_path+"B4N-1.png",
                thumbnail_secondary: small_tiles_path+"B4N-2.png",
                on_click_thumbnail: big_tiles_path+"bB4N.png",
                on_click_text: `Battle For Nexon is a simple space invasion mini-game that evolved from the Inception Ark holder’s decision to throw caution to the wind and recklessly descend upon the planet Nexon in pursuit of an AI Warlord. In the process, this move alerted the General’s AI fleet of their presence.

                Can you navigate the storm of enemy warships and end the ruthless reign of the AI overlords?`
            }, 
            {
                name: "Ark Assassin",
                thumbnail_primary: small_tiles_path+"AA-1.png",
                thumbnail_secondary: small_tiles_path+"AA-2.png",
                on_click_thumbnail: big_tiles_path+"bAA.png",
                on_click_text: `Ark Assassin is a simple archery mini-game based on the lore of when the Potentials decided to enter the temple’s chambers and lead a direct assault on Binath’s flagship. 

                Can you navigate the temple and destroy the AI Security forces to reach the inner chambers and eliminate your target?`
            }, 
            {
                name: "Last Stand",
                thumbnail_primary: small_tiles_path+"LS-1.png",
                thumbnail_secondary: small_tiles_path+"LS-2.png",
                on_click_thumbnail: big_tiles_path+"bLS.png",
                on_click_text: `Last Stand is a top-down shooter game based on the lore of Iron Lion, when the greatest soldier of the human Insurgency was left alone in an impossible situation to battle waves of AI robots and save time for Agent Zero, to give humanity a chance for the future. 

                Can you defeat enough robotic assassins to save the Veridian Prime planet?`
            }, 
            // {
            //     name: "Project Warhawk",
            //     thumbnail_primary: small_tiles_path+"PW-1.png",
            //     thumbnail_secondary: small_tiles_path+"PW-2.png",
            //     on_click_thumbnail: big_tiles_path+"bPW.png",
            //     on_click_text: `Project Warhawk is the code name for our upcoming multiplayer top-down shooter game based on the clans formed by Potentials classes.`
            // },
            
        ]
    },
    {
        title: "Collaborations",
        content: [
            {
                name: "The Dark Zoo",
                thumbnail_primary: small_tiles_path+"GLMA-1.png",
                thumbnail_secondary: small_tiles_path+"GLMA-2.png",
                on_click_thumbnail: big_tiles_path+"bGLMA.png",
                on_click_text: `The Dark Zoo is a map in the Great Escape game by GLMR Apes, based on the lore where the Gibbon got captured in a high-tech zoo guarded by the Keepeer and under the control of the vicious AI overlord, the Collector.

                Can you escape and combat the robotic jailers while seeking out Knowledge Crystals to uncover the dark motives of the Collector and guide Generous Gibbon to freedom?`
            }, 
            {
                name: "Upcoming",
                thumbnail_primary: small_tiles_path+"Upcoming.png",
                thumbnail_secondary: small_tiles_path+"Upcoming.png",
                on_click_thumbnail: "",
                on_click_text: `More information to be released!`
            }, 
        ]
    }
]











