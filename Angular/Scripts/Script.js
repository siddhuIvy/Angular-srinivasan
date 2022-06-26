/// <reference path="angular.min.js" />


var myApp = angular.module("myModule", []);
myApp.controller("FirstController", function ($scope) {
    $scope.message = "This is First Message";
});

myApp.controller("SecondController", function ($scope) {
    var employee = {
        firstName: "Sathiya",
        lastName: "Moorthi",
        gender: "Male"
    };
        $scope.employee = employee;
});
  
myApp.controller("sourcedirective", function ($scope) {
        var Flower = {
            name: "Rose",
            color: "Red",
            display: "/Img/Flower.jpg"
        }
        $scope.Flower = Flower;
        });
myApp.controller("TwoWayBinding", function ($scope) {
        $scope.message="Two Way Binding!";
});

myApp.controller("ngreperter", function ($scope) {
        var employee = {
            firstName: "Shiva",
            lastName: "Shankar",
            gender: "Male"
    };
    $scope.employee = employee;
    });

                
myApp.controller("ngreperts", function ($scope) {
        var employees = [          
{ firstName: "Sathiya", lastName: "Sri", gender: "Male", salary: 155000 },
{ firstName: "Sara", lastName: "Ravi", gender: "Female", salary: 168000 },
{ firstName: "Albert", lastName: "Hendry", gender: "Male", salary: 157000 },
{ firstName: "Mark", lastName: "Antony", gender: "Male", salary: 153000 },
{ firstName: "Shiva", lastName: "Ravi", gender: "Male", salary: 160000 }
                 ];
$scope.employees= employees
});

myApp.controller("ngrepert", function ($scope) {
        var countries = [
            {
                name: "UK",
                cities: [
                    { name: "London" },
                    { name: "Manchester" },
                    { name: "Birmingham" },
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }
                ]
            },
            {
                name: "India",
                cities: [
                    { name: "Hyderabad" },
                    { name: "Chennai" },
                    { name: "Mumbai" }
                ]
            },
    ];
    $scope.countries = countries;
 });

myApp.controller("events", function ($scope) {
    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "Asp.Net", likes: 0, dislikes: 0 },
        { name: "SQL Server", likes: 0, dislikes: 0 },
        { name: "AngularJS", likes: 0, dislikes: 0 },
    ];
    $scope.technologies = technologies;
    $scope.incrementlikes = function (technology) {
        technology.likes++;
    }
    $scope.incrementdislikes = function (technology) {
        technology.dislikes++;
    }
});

myApp.controller("Filter", function ($scope) {

        var employees = [
            {
                name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                gender: "Male", salary: 55000.788
            },
            {
                name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                gender: "Female", salary: 68000
            },
            {
                name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                gender: "Male", salary: 57000
            },
            {
                name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                gender: "Female", salary: 53000
            },
            {
                name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                gender: "Male", salary: 60000
            }
        ];
        $scope.employees = employees;
        $scope.rowCount = 3;
});

myApp.controller("Sortingdata", function ($scope) {

        var employees = [
            {
                name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                gender: "Male", salary: 55000
            },
            {
                name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                gender: "Female", salary: 68000
            },
            {
                name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                gender: "Male", salary: 57000
            },
            {
                name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                gender: "Female", salary: 53000
            },
            {
                name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                gender: "Male", salary: 60000
            }
        ];

        $scope.employees = employees;
        $scope.sortColumn = "name";

});

myApp
    .controller("sortrow", function ($scope) {

        var employees = [
            {
                name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                gender: "Male", salary: 55000
            },
            {
                name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                gender: "Female", salary: 68000
            },
            {
                name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                gender: "Male", salary: 57000
            },
            {
                name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                gender: "Female", salary: 53000
            },
            {
                name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                gender: "Male", salary: 60000
            }
        ];

        $scope.employees = employees;
        $scope.sortColumn = "name";
        $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ?
                !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {

            if ($scope.sortColumn == column) {
                return $scope.reverseSort
                    ? 'arrow-down'
                    : 'arrow-up';
            }

            return '';
        }
    });

myApp.controller("Searchfilter", function ($scope) {

        var employees = [
            { name: "Ben", gender: "Male", salary: 55000, city: "London" },
            { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
            { name: "Mark", gender: "Male", salary: 57000, city: "London" },
            { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
            { name: "Todd", gender: "Male", salary: 60000, city: "London" },
        ];

        $scope.employees = employees;
});

myApp.controller("FilterMultiple", function ($scope) {

        var employees = [
            { name: "Ben", gender: "Male", salary: 55000, city: "London" },
            { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
            { name: "Mark", gender: "Male", salary: 57000, city: "London" },
            { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },


            { name: "Todd", gender: "Male", salary: 60000, city: "London" },
        ];

        $scope.employees = employees;
});

myApp.controller("Customfilter", function ($scope) {

        var employees = [
            { name: "Ben", gender: 1, salary: 55000 },
            { name: "Sara", gender: 2, salary: 68000 },
            { name: "Mark", gender: 1, salary: 57000 },
            { name: "Pam", gender: 2, salary: 53000 },
            { name: "Todd", gender: 3, salary: 60000 }
        ];

        $scope.employees = employees;
});

myApp.controller("showhide", function ($scope) {

        var employees = [
            { name: "Ben", gender: "Male", city: "London", salary: 55000 },
            { name: "Sara", gender: "Female", city: "Chennai", salary: 68000 },
            { name: "Mark", gender: "Male", city: "Chicago", salary: 57000 },
            { name: "Pam", gender: "Female", city: "London", salary: 53000 },
            { name: "Todd", gender: "Male", city: "Chennai", salary: 60000 }
        ];

        $scope.employees = employees;
});


myApp.controller("initexample", function ($scope) {
        var countries = [
            {
                name: "India",
                cities: [
                    { name: "Hyderabad" },
                    { name: "Chennai" }
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                ]
            }
        ];

        $scope.countries = countries;
});

myApp.controller("Includedirectrive", function ($scope) {

        var employees = [
            { name: "Ben", gender: "Male", salary: 55000 },
            { name: "Sara", gender: "Female", salary: 68000 },
            { name: "Mark", gender: "Male", salary: 57000 },
            { name: "Pam", gender: "Female", salary: 53000 },
            { name: "Todd", gender: "Male", salary: 60000 }
        ];

        $scope.employees = employees;
        $scope.employeeView = "EmployeeTabel.html";
});
myApp.controller("Includedirectrive", function ($scope) {

        var employees = [
            { name: "Ben", gender: "Male", salary: 55000 },
            { name: "Sara", gender: "Female", salary: 68000 },
            { name: "Mark", gender: "Male", salary: 57000 },
            { name: "Pam", gender: "Female", salary: 53000 },
            { name: "Todd", gender: "Male", salary: 60000 }
        ];

        $scope.employees = employees;
        $scope.employeeList = "EmployeeList.html";
});
myApp.controller("consuming", function ($scope, $http) {

        $http.get("EmployeeService.asmx/GetAllEmployees")
            .then(function (response) {
                $scope.employees = response.data;
            });
    });

myApp.controller("inputoutput", function ($scope, stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input);
        };
});


myApp.controller("demoController", function
        ($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (scrollLocation) {
            $location.hash(scrollLocation);
            $anchorScroll.yOffset = 20;
            $anchorScroll();
        }
});

myApp.controller("countrys",
        function ($scope, $location, $anchorScroll, $http) {
            $http.get("CountryService.asmx/GetData")
                .then(function (response) {
                    $scope.countries = response.data;
                });

            $scope.scrollTo = function (countryName) {
                $location.hash(countryName);
                $anchorScroll();
            }

        });