// This program creates simple sentences about people, places and things commonly found in an RPG (Role-Playing Game)

// Import the classes from datamodel.js
const {Hero, Enemy, Location} = require('./datamodel.js');


// List of verbs
const heroEquipVerbs = ['using', 'equipped with', 'armed with'];
const victoryVerbs = ['defeated', 'bested', 'gutted', 'destroyed', 'obliterated', 'conquered', 'vanquished'];
const attackVerbs = ['fought', 'attacked', 'battled', 'clashed with', 'assulted', 'challenged'];

// List of articles
const articles = ['a', 'the'];
const capitalArticles = ['A', 'The'];


// List of genders
const genders = ['his', 'her'];

// List of prepositions
const prepositions = ['above', 'across', 'against', 'along', 'among', 'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'by', 'down', 'from', 'in', 'into', 'near', 'of', 'off', 'on', 'to', 'toward', 'under', 'upon', 'with',  'within'];




function sentence1(){
    let hero1 = new Hero();
    let hero2 = new Hero();
    let enemy1 = new Enemy();
    let location1 = new Location();

    let article1 = capitalArticles[Math.floor(Math.random() * capitalArticles.length)];
    let article2 = articles[Math.floor(Math.random() * articles.length)];
    let article3 = articles[Math.floor(Math.random() * articles.length)];
    let article4 = articles[Math.floor(Math.random() * articles.length)];
    let prepposition = prepositions[Math.floor(Math.random() * prepositions.length)];
    let attackVerb = attackVerbs[Math.floor(Math.random() * attackVerbs.length)];

    // replace 'a' or 'the' with 'an' if the following word starts with an 'a'
    if(hero1.personality.charAt(0) === 'A' || hero1.personality.charAt(0) === 'I'){
        article1 = 'An';
    }
    if(hero2.personality.charAt(0) === 'A' || hero2.personality.charAt(0) === 'I' ){
        article2 = 'an';
    }
    if(enemy1.personality.charAt(0) === 'A' || enemy1.personality.charAt(0) === 'I'){
        article3 = 'an';
    }
    if(location1.locationDescription.charAt(0) === 'A' || location1.locationDescription.charAt(0) === 'I'){
        article4 = 'an';
    }

    // Assemble sentence
    return `${article1} ${hero1.personality} ${hero1.role} and ${article2} ${hero2.personality} ${hero2.role} ${attackVerb} ${article3} ${enemy1.personality} ${enemy1.enemyType} ${prepposition} ${article4} ${location1.locationDescription} ${location1.location}`;
}


function sentence2(){
    let hero1 = new Hero();
    let weapon = hero1.weapon;
    let enemy1 = new Enemy();

    let article1 = capitalArticles[Math.floor(Math.random() * capitalArticles.length)];
    let article2 = articles[Math.floor(Math.random() * articles.length)];
    let heroEquip = heroEquipVerbs[Math.floor(Math.random() * heroEquipVerbs.length)];
    let gender = genders[Math.floor(Math.random() * genders.length)];
    let victory = victoryVerbs[Math.floor(Math.random() * victoryVerbs.length)];

    if(hero1.personality.charAt(0) === 'A' || hero1.personality.charAt(0) === 'I'){
        article1 = 'An';
    }
    if(enemy1.personality.charAt(0) === 'A' || enemy1.personality.charAt(0) === 'I'){
        article2 = 'an';
    }

    // Assemble sentence
    return `${article1} ${hero1.personality} ${hero1.role} ${heroEquip} ${gender} ${weapon} ${victory} ${article2} ${enemy1.personality} ${enemy1.enemyType}`;
}





console.log(sentence2());
