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
        console.log(`Hello ${name}`);
    }

}
