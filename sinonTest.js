let mocha = require('mocha');
const chai = require('chai');

const chaiHttp = require('chai-http');
const sinon = require('sinon');
const assert = require('assert');
const request = require('request');

let server = require('../app');
let controller = require('../controllers/aliens.controller.js');
const alien = require('../models/alien');
let expect = require('chai').expect;
//let describe = mocha.describe;

//
//let aliensObj = new Controller();
/*
describe('function return check', function() {
	it('test Get function', async function () {
		const spy = sinon.spy(Controller, 'Get');
		const res = {
			name: 'Piyush',
			tech: 'gaming',
			sub: 'true'
		};
		await Controller.Get({},{});
		//assert(spy.called);
		expect(spy).to.be.called();
	});
});*/

describe('GetId', () => {

	before(() => {
		sinon
		.stub(request, 'GET')
		.yields(null,null, JSON.stringify({ id:'636b66a167cc56a30a7ed267'}));
	})

/*	it(' alien has id of 636b66a167cc56a30a7ed267', (done) => {
		controller
			.GetId('636b66a167cc56a30a7ed267')
			.then((alien) => {
				expect(alien.id).to.equal('636b66a167cc56a30a7ed267');
			})
			.catch((err) => {
				done(err);
			});
	});

*/
});
