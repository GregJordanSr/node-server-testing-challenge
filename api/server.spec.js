const request = require('supertest');

const db = require('../database/dbConfig.js');
const server = require('../users/userRoutes');

describe('server', () => {
  beforeEach( () => {
    return db('users').truncate();
  });

  it('tests are running with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /users', () => {
    it('returns 200 OK', () => {
     
      return request(server).get('/users')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('returns JSON', () => {
      return request(server).get('/users')
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });


  describe('POST /api/register', () => {
    it('should insert a user into the db', () => {
      return request(server).post('/api/register')
        .send({
          name: 'wife',
        })
        .then(res => {
          expect(res.body.length).toBe(1);
        });
    });

    it('should insert more than one user', () => {
      return request(server) .post('/api/register')
       
        .send([
          {
            name: 'Quadir',
          },
          {
            name: 'Zakee',
          },
          {
            name: 'Lil Greg',
          },
        ]);
      const users = db('users');
      expect(users).toHaveLength(3);
    });
  });
});
