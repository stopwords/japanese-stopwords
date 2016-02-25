var chai = require('chai');
var should = chai.should();

var stopwords = require('../lib');

var assert = require('assert');
describe('Japanses stopwords', function() {

    it('should be present', function() {
        stopwords.should.be.a('array');
    });

});
