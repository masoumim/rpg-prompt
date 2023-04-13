// This program creates simple sentences about people, places and things commonly found in an RPG (Role-Playing Game)

// List of nouns
const peopleNouns = ['Wizard', 'Thief', 'Bard', 'Paladin', 'Sorcerer', 'Goblin', 'Bat', 'Rat', 'Blob', 'Mage', 'Ranger', 'Summoner'];
const placeNouns = ['Cave', 'Tower', 'Castle', 'Town', 'Medow', 'Bridge', 'Swamp', 'Forest', 'Temple', 'Mountain', 'Valley'];
const thingNouns = ['Sword', 'Knife', 'Staff', 'Wand', 'Mace', 'Spellbook', 'Health potion', 'Mana potion', 'Gold', 'Cloak', 'Armor', 'Bow'];

// List of verbs
const actionVerbs = ['fought', 'swung', 'attacked', 'defended', 'grabed', 'jumped', 'walked', 'ran', 'explored', 'hunted', 'uncovered', 'pushed', 'helped', 'saved', 'drank'];

// List of adjectives
const adjectives = ['large', 'small', 'rusty', 'shiny', 'slimy', 'strong', 'weak', 'huge', 'quick', 'slow', 'great', 'terrible', 'difficult'];


// List of articles
const articles = ['a', 'the'];

// List of prepositions
const prepositions = ['above', 'across', 'against', 'along', 'among', 'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'by', 'down', 'from', 'in', 'into', 'near', 'of', 'off', 'on', 'to', 'toward', 'under', 'upon', 'with',  'within'];



// Example: The Thief fought a Bard behind the catle.
function simpleSentenceBuilder(articles,peopleNouns,actionVerbs, prepositions, placeNouns){
    let article1 = articles[Math.floor(Math.random() * articles.length)];
    let person1 = peopleNouns[Math.floor(Math.random() * peopleNouns.length)];
    let action = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
    let article2 = articles[Math.floor(Math.random() * articles.length)];
    let person2 = peopleNouns[Math.floor(Math.random() * peopleNouns.length)];
    let preposition = prepositions[Math.floor(Math.random() * prepositions.length)];
    let article3 = articles[Math.floor(Math.random() * articles.length)];
    let place = placeNouns[Math.floor(Math.random() * placeNouns.length)];

    // Assemble sentence
    console.log(`${article1} ${person1} ${action} ${article2} ${person2} ${preposition} ${article3} ${place}`);
}


//simpleSentenceBuilder(articles, peopleNouns, actionVerbs, prepositions, placeNouns);

