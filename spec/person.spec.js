const person = require('../person.js');
describe('person', () => {
    it('that is married will be divorced when marrying some one else', () => {
        let him = person();
        let her = person();
        him.marry(her);
        expect(him.spouse).toBe(her);
    });

    [{
        isMarried: true,
        expectDivorce: true
    },
    {
        isMarried: false,
        expectDivorce: false
    }]
    .forEach(spec => {
        it(`marry calls divorce if isMarried is ${spec.isMarried}`, () => {
            let him = person();
            let divorceSpy = jasmine.createSpy('divorce');
            him.divorce = divorceSpy;
            let her = person();
            spyOn(him, 'isMarried').and.returnValue(spec.expectDivorce);
    
            him.marry(her);
            expect(him.spouse).toBe(her);
            let divorceStrategy = expect(divorceSpy);
            if(!spec.isMarried) {
                divorceStrategy.not;
            }
            divorceStrategy.toHaveBeenCalled();
        });    
    });
});