const request = require('supertest');

const server = require('./index.js')

describe('server', function() {
  /*  it('sanity of syntax test', function() {
      expect(true).toBe(true);
    })*/

    //it('POST /create', function() {
    it("POST /create", async () => {
      /*return request(server)
        .post('/api/create')
        .send({
        	vin: "testvin",
        	make: "testmake",
        	model: "testmodel",
        	mileage: 123
        })
        .set('Accept', 'application/json')
          .then(res => {
          // check that the status code is 200
          expect(res.status).toBe(200);
      })*/
      const car = {
        vin: "testvin",
        make: "testmake",
        model: "testmodel",
        mileage: 123
      };

      let res = await request(server)
        .post("/api/create")
        .send(car);

      expect(res.status).toBe(200);
    })

})
