describe('Tests in <DemoComponent />', () => {

    test('This test should not fail', () => {

        const messageOne = 'Hello';

        const messageTwo = messageOne.trim();

        expect(messageTwo).toBe(messageOne);
    })

})