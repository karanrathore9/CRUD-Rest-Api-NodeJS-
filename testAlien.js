let chai = require('chai');
let chaiHttp = require('chai-http');
let sinon = require('sinon');

let server = require('../app');
let controller = require('../controllers/aliens.controller.js');

//var aliens = new controller();

//Assertion Style
chai.should();
let expect = require('chai').expect
chai.use(chaiHttp);

describe('Alien API', () => {
	/**
     * test the GET route
     */
	describe('GET /aliens', () => {
		it('it should GET all the aliens ', (done) => {
			chai.request(server).get('/aliens').end((err, response) => {
				response.should.have.status(200);
				response.body.should.be.a('array');
				//response.body.length.should.be.equal(8);
				done();
			});
		});

		it('it should NOT GET all the aliens ', (done) => {
			chai.request(server).get('/alie/').end((err, response) => {
				response.should.have.status(404);
				done();
			});
		});
	});

	/**
     * test the GET (by id) route
     */
    describe('GET /aliens/:id', () => {
		it('it should GET a alien by ID ', (done) => {
            const alienId = "636b66a167cc56a30a7ed267";
			chai.request(server)
              .get('/aliens/'+alienId).end((err, response) => {
				response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('name');
                response.body.should.have.property('tech');
                response.body.should.have.property('sub');
				done();
			});
		});


	});

	/**
     * test the POST route
     */
    describe("POST /aliens",()=>{
        it("It should POST a new alien",(done)=>{
            const alien = {
                name:"Piyush",
                tech:"gaming",
                sub:"true"
            };
            chai.request(server)
                .post('/aliens')
                .send(alien)
                .end((err,response)=>{
                    const res = response;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body).to.have.property('name').eq("Piyush");
                    expect(res.body).to.have.property('tech').eq("gaming");
                done();
             })
        })
    })

    /**
     * test the Controller
     */

});


