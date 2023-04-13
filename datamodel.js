// This file contains the data models (classes) that represent the entities used in generated story prompts.



class Hero{
    constructor(){
        const roles = ['Wizard', 'Thief', 'Bard', 'Paladin', 'Sorcerer', 'Mage', 'Ranger', 'Summoner', 'Knight'];
        const personalities = ['Mighty', 'Brave', 'Strong', 'Sly', 'Daring', 'Kind', 'Furious', 'Chaotic', 'Brilliant'];
        this._role = roles[Math.floor(Math.random() * roles.length)];
        this._personality = personalities[Math.floor(Math.random() * personalities.length)];
    }

    get role(){
        return this._role;
    }
}










let hero1 = new Hero;
console.log(hero1.role);