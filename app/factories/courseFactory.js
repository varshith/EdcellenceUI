
app.factory('courseFactory', function ($resource) {
   var factory = {};     
   var host = 'http://localhost/master/';
   
   factory.getCourses = function () {
       var courses = $resource(host + 'node.json?type=course');
       return courses.get();
   };
   factory.getCourse = function (courseID) {
       var course = $resource(host + 'node/'+ courseID +'.json')
       return course.get();
   };
   return factory;
});
