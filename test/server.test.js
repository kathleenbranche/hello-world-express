import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';

describe('Express Server', () => {
    it('should return Hello World on the main page', async () => {
        const response = await request(app).get('/');
        expect(response.status).to.equal(200);
        expect(response.text).to.equal('Hello World');
    });
});