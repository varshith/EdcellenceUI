var app = angular.module('courses', ['ngResource']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'Courses',
                templateUrl: 'app/partials/courses.html'
            })
        .when('/course/:courseID',
            {
                controller: 'Course',
                templateUrl: 'app/partials/course.html'
            })
        .otherwise({ redirectTo: '/' });
});