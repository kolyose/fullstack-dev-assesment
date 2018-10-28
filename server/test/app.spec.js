const request = require('supertest');
const fs = require('fs');
const util = require('util');
const db  = require('../src/db').default;
const app  = require('../src/app').default;

const readFile = util.promisify(fs.readFile);

let server;
let testData;

const shutdown = () => {
  if (db) 
    db.disconnect();

  if (server) 
    server.close();
}
/* eslint-disable*/
describe('Server', () => {
  beforeAll(async () => {
    try {
      await db.connect('mongodb://127.0.0.1:27018/nanos-test');         
      server = await app.listen(8001);
      const seedFile = await readFile('data/data.json');
      testData = JSON.parse(seedFile);      
    } catch (e) {
      shutdown();
      console.error(e);
    }
  });

  afterAll(async () => {
    shutdown();
  });

  describe('cors', () => {
    test("should respond with required headers", async () => {
      const response = await request(server).head('/');
      expect(response.headers).toHaveProperty('Access-Control-Allow-Origin'.toLowerCase());
      expect(response.headers).toHaveProperty('Access-Control-Allow-Headers'.toLowerCase());
      expect(response.headers).toHaveProperty('Access-Control-Allow-Methods'.toLowerCase());
    });
  });

  describe('routing', () => {  
    beforeEach(async () => {
      await db.reset();     
      await db.seedCampaigns(testData);
    });
    
    describe('HEAD /', () => {
      test("should respond with code 200", async () => {
        const response = await request(server).head('/');
        expect(response.status).toEqual(200);
      });
    });
  
    describe('GET /', () => {
      test("should respond with code '302 Moved Temporarily' and redirect to '/campaigns'", async () => {
        const response = await request(server).get('/');
        expect(response.status).toEqual(302);
        expect(response.headers.location).toEqual('/campaigns');
      });
    });
  
    describe('GET to non-existing page', () => {
      test("should respond with code '404 Not Found'", async () => {
        const response = await request(server).get('/not-found');
        expect(response.status).toEqual(404);
      });
    });
  
    describe('GET /campaigns', () => {
      test('should respond with code 200 and a body containing campaigns data', async () => {
        const response = await request(server).get('/campaigns');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body).toEqual(testData);
      });
      test("should respond with '204 No Content' if there are no campaigns", async () => {
        await db.reset();     
        const response = await request(server).get('/campaigns');
        expect(response.status).toEqual(204);
      });
    });
  
    describe('GET /campaigns/:id', () => {
      test('should respond with code 200 and a body containing the campaign data', async () => {
        const response = await request(server).get('/campaigns/100000001');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body).toEqual(testData[0]);
      });
      test('should respond with corresponding error if the campaign was not found', async () => {
        const response = await request(server).get('/campaigns/000');
        expect(response.status).toEqual(404);
        expect(response.text).toEqual('Campaign not found.');
      });
    });
  });
});


