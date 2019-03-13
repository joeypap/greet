// Default export
export default () => {
        let greetings = `Hi from the default export!`
        console.log(greetings);

        return greetings;
};
      
      // Named export `doStuff`
export const doStuff = () => {
        console.log('Doing stuff…');
};

export class myHello {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }

};

import * as mymodule from 'https://rawgit.com/abernier/7ce9df53ac9ec00419634ca3f9e3f772/raw/eec68248454e1343e111f464e666afd722a65fe2/mymod.mjs';

mymodule.default();
