app.controller('personInfoController', function ($scope, personInfoService) {
    //The Gender Object
    $scope.selectedGender = "Male";
    $scope.Gender = ["Male", "Female"];

    //The Title Object
    $scope.selectedTitle = "Mr.";
    $scope.Title = ["Mr.", "Mrs.", "Miss", "Master"];
    $scope.IsSameAddres = false;
    //Function to reset Scope Variables
    function initialize() {
        $scope.PersonId = 0;
        $scope.Title = "";
        $scope.FirstName = "";
        $scope.MiddleName = "";
        $scope.LastName = "";
        $scope.Gender = "";
        $scope.BirthDate = "";
        $scope.Age = 0;
        $scope.CurrentAddress = "";
        $scope.PermanentAddress = "";
        $scope.Occupation = "";
        $scope.Email = "";
        $scope.MobileNo = "";
        $scope.DisablesPermanentAddress = false;
    }
})