const request = require('supertest');
const app = require('./app');

test('I am alive and responding', done => {
    request(app)
    .get('/')
    .expect(200)
    .end(done)
});

test('GET /', done => {
    request(app)
    .get('/about')
    .expect(200)
    .end(done)
});

test('GET jibberish', done => {
    request(app)
    .get('/asjdgajdsg')
    .expect(404)
    .end(done)
});

test('GET /users', done => {
    request(app)
    .get('/users')
    .expect(200)
    .end(done)
});

test('GET /user/10', done => {
    request(app)
    .get('/user/10')
    .expect(200)
    .end(done)
});

test('DELETE /user/10', done => {
    request(app)
    .delete('/user/10')
    .expect(200)
    .end(done)
});

test('POST /user', done => {
    request(app)
    .post('/user')
    .expect(200)
    .end(done)
});