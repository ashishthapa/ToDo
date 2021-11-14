const { beforeAll, expect } = require('@jest/globals');
const supertest = require('supertest')

const app = require('../index');
const api = supertest(app)


beforeAll((done) => {
    console.log('BEFORE ALL');
    done();
});

test('todo list are returned as json on root API call', async () => {
    const result = await api.get('/');
    expect(result.body.length).toBe(5);
})

test('todo list are returned as json on v1 for todo API', async () => {
    const result = await api.get('/api/v1/todo');
    expect(result.body['1']['task']).toEqual("Eat Breakfast");
});

afterAll((done) => {
    console.log('AFTER ALL');
    done();
});