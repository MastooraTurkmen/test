const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'disney.com',
    'chess.com',
    'dogpicture.com',
]

describe('googleSearch', () => {
    it('this is a test', () => {
        expect('hello').toBe('hello')
    })

    it('this is searching google', () => {
        expect(googleSearch('testest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpicture.com'])
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })

    it('this does not return more than 3', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})
