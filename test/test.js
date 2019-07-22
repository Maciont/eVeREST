var request = require("request");
var expect = require("chai").expect;
var baseUrl= "https://jsonplaceholder.typicode.com"
var cl= console.log


describe('*[GET Tests]*', function() {
    it('Status Code is 200 and 100 items are returned in JSON on GET/posts', function(done){
        request.get({url: baseUrl + '/posts'},
            function(error, response, body) {
                cl('* STATUS CODE 200 OK')
                expect(response.statusCode).to.equal(200);
                var bodyObj = JSON.parse(body);
                cl('* JSON parsed correctly')
                var itemsNum = (Object.keys(bodyObj).length);
                expect(itemsNum).to.equal(100);
                cl('There are ' + itemsNum + ' objects in /posts JSON as expected')
            done();
            })
    })

    it('Status Code is 200 and headers are as expexted on GET /posts/1', function(done) {
        request.get({url: baseUrl + '/posts/1'},
            function(error, response) {
                cl('* STATUS CODE 200 OK')
                expect(response.statusCode).to.equal(200);
                cl('* Content-Type is application/json')
                expect(response.headers["content-type"]).to.equal('application/json; charset=utf-8');
            done();
            }
            
        )}
        )

    it('Check if there are more than 45 occurences of "eveniet" in GET /comments?userId=1', function(done) {
        request.get({url: baseUrl + '/comments?userId=1'},
            function(error, response, body) {
                cl('* STATUS CODE 200 OK')
                expect(response.statusCode).to.equal(200);
                var bodyObj = JSON.stringify(body);
                var evenietCount = bodyObj.split('eveniet').length -1
                expect(evenietCount >= 45);
                cl('* THERE ARE ' + evenietCount + ' occurences of "eveniet" in /comments?userId=1 which is more than 45')
            done();
            }
                
        )}
)

    it('JSON body items are as expected on GET/posts/1', function(done) {
        request.get({url: baseUrl + '/posts/1'},
            function(error, response, body) {
                cl('* STATUS CODE 200 OK')
                expect(response.statusCode).to.equal(200);
                var bodyObj = JSON.parse(body);
                cl('* JSON parsed correctly, keys found:')
                cl(Object.keys(bodyObj));
                cl('* Checking userId value');
                expect(bodyObj.userId).to.equal(1);
                cl('* Checking id value');
                expect(bodyObj.id).to.equal(1);
                cl('* Checking title value');
                expect(bodyObj.title).to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
                cl('* Checking body value');
                expect(bodyObj.body).to.equal("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
                + " molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
            done();
        });
    })
});

describe('*[POST Tests]*', function() {
    it('POST simple JSON on /posts', function(done) {
        request.post({url: baseUrl + '/posts/', form: {V13ss:'M4nn', Ev3:'Re5t', ProofOf:'Concept'}}, function(err,httpResponse) {
                expect(httpResponse.statusCode).to.be.oneOf([201,202]);
                cl('* STATUS CODE ' + httpResponse.statusCode)
                cl('* Successfully added: \n' + httpResponse.body)
            done();
            }
        )
    })
})

describe('*[PUT Tests]*', function() {
    it('PUT simple JSON on /posts/1', function(done) {
        cl('* Updating /posts/1')
        request.put({url: baseUrl + '/posts/1', form: {M4nn:'V13ss', Re5t:'Ev3', K0tly:'N1e Pi3ce'}}, function(err,httpResponse) {
                expect(httpResponse.statusCode).to.be.oneOf([200, 201, 204]);
                cl('* STATUS CODE ' + httpResponse.statusCode)
                cl('* Successfully updated /posts/1 with \n' + httpResponse.body)
            done();
            }
        )
    })
})

describe('*[DEL Tests]*', function() {
    it('DEL /posts/1', function(done) {
        cl('* Deleting /posts/1')
        request.del({url: baseUrl + '/posts/1'}, function(err,httpResponse) {
                expect(httpResponse.statusCode).to.be.oneOf([200, 202, 204]);
                cl('* STATUS CODE ' + httpResponse.statusCode)
                cl('* Successfully deleted /posts/1')
            done();
            }
        )}
    )}
)