const { beforeAll, expect } = require('@jest/globals');
const supertest = require('supertest')

const app = require('../index');
const api = supertest(app)


beforeAll((done) => {
    console.log('BEFORE ALL');
    done();
});

test('Length of todo list on root API call is 5', async () => {
    const result = await api.get('/');
    expect(result.body.length).toBe(5);
})

test('Value of task in second item of todo list is Eat Breakfast', async () => {
    const result = await api.get('/api/v1/todo');
    expect(result.body['1']['task']).toEqual("Eat Breakfast");
});


afterAll((done) => {
    console.log('AFTER ALL');
    done();
});