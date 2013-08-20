app.controller('Courses', function ($scope, courseFactory) {
    $scope.courses = courseFactory.getCourses();
});

app.controller('Course', function ($scope, $routeParams, courseFactory) {
     var courseID = ($routeParams.courseID) ? parseInt($routeParams.courseID) : 0;  
    $scope.course = courseFactory.getCourse(courseID);
});

