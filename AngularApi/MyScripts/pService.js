app.Service("personInfoervice", function ($http) {
    this.getInfo = function (id) {
        var req = $http.get('/api/personInformationAPI/' + id);
        return req;
    };

    this.getAppInfo = function () {
        var req = $http.get('/api/personInformationAPI');
        return req;
    };
    this.postInfo = function () {
        var req = $http.post('/api/personInformationAPI', personInfo);
        return req;
    };
});