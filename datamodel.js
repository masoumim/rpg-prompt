// This file contains the data models (classes) that represent the entities used in generated story prompts.



class Hero{
    constructor(){
        const roles = ['Wizard', 'Thief', 'Bard', 'Paladin', 'Sorcerer', 'Mage', 'Ranger', 'Summoner', 'Knight'];
        const personalities = ['Mighty', 'Brave', 'Strong', 'Sly', 'Daring', 'Kind', 'Furious', 'Chaotic', 'Brilliant', 'Intimidating'];
        const weapons = ['Sword', 'Knife', 'Staff', 'Wand', 'Mace', 'Spellbook', 'Bow', 'Dagger'];
        this._role = roles[Math.floor(Math.random() * roles.length)];
        this._personality = personalities[Math.floor(Math.random() * personalities.length)];
        this._weapon = weapons[Math.floor(Math.random() * weapons.length)];
    }

    get role(){
        return this._role;
    }

    get personality(){
        return this._personality;
    }

    get weapon(){
        return this._weapon;
    }
}

class Enemy{
    constructor(){
        const enemyTypes = ['Goblin', 'Blob', 'Necromancer', 'Troll', 'Snake', 'Bat', 'Rat', 'Beast', 'Demon', 'Skelleton', 'Zombie', 'Ghost'];
        const personalities = ['Monsterous', 'Evil', 'Slimy', 'Ferocious', 'Horrifying', 'Deadly', 'Frightening', 'Imposing', 'Dreadful'];
        this._enemyType = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
        this._personality = personalities[Math.floor(Math.random() * personalities.length)];
    }

    get enemyType(){
        return this._enemyType;
    }

    get personality(){
        return this._personality;
    }
}


class Location{
    constructor(){
        const locationTypes = ['Castle', 'Swamp', 'Graveyard', 'Town', 'Mountain', 'Cave', 'Tower', 'Bridge', 'Forest', 'Temple', 'Valley'];
        const locationDescriptions = ['Large', 'Abandoned', 'Sprawling', 'Mysterious', 'Dark', 'Ancient','Deserted'];        
        this._location = locationTypes[Math.floor(Math.random() * locationTypes.length)];
        this._locationDescription = locationDescriptions[Math.floor(Math.random() * locationDescriptions.length)];        
    }

    get location(){
        return this._location;
    }

    get locationDescription(){
        return this._locationDescription;
    }
}

// Export the Classes
module.exports = {Hero, Enemy, Location};
