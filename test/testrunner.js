process.env.NODE_ENV = "test";
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../bin/www");
let request = require("request");

let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);

describe("/GET Training", () => {
    it("should get all the training", (done)=> {
        chai.request(server).get('/').end((err, res)=>{
            res.should.have.status(200);
            done();
        })
    });
    
});