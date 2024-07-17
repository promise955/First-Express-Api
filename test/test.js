const  request = require('supertest');
const assert = require('assert');
//npm install mocha chai supertest pm2 --save-dev 

//cd ~/.pm2/logs remove pm2 log
//rm *.log
// npm install -D webpack webpack-cli webpack-node-externals @babel/core babel-loader


describe('GET /', () => {
    it('should return 404 not found', (done) => {
      request('http://localhost:3456')
        .get('/')
        .end((err, res) => {
         assert.strictEqual(res.status, 404);
        assert.ok(res.text.includes('not found'));
          done();
        });
    });
  });
