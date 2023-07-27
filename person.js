const Person = () => {
    let spouse;
    const marry = person => {
        if(isMarried) {
            divorce();
        }
        spouse = person;
        person.spouse = this;
    };

    let divorce = () => {
        spouse = undefined;
    };

    const isMarried = {
        get() {
            return spouse !== undefined;
        }
    };

    return {
        marry, 
        get divorce() {return divorce; },
        set divorce(value) {
            divorce = value;        
        },
        get spouse()  {
            return spouse;
        },
        isMarried
    };

};

module.exports = Person;