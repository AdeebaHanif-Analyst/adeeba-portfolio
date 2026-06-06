var app = angular.module("MyMod",['ngRoute']);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
     $locationProvider.hashPrefix('');

    $routeProvider.
    when("/home",{
        templateUrl:"views/home.html"
    }).
    when("/about",{
        templateUrl:"views/about_me.html"
    }).
    when("/projects",{
        templateUrl:"views/Projects.html"
    }).
    // when("/portfolio", {
    // templateUrl: "views/portfolio_page.html"
    // }).
    when("/skills",{
        templateUrl:"views/skills.html",
          controller: "Myskills"
    }).
    when("/contact",{
        templateUrl:"views/contact.html"
    }).
    otherwise({
        redirectTo : "/home"
    });

}]);
app.controller("Myskills",function($scope){
$scope.skills=[
    {
    category: "Languages & Tools",
    items: ["HTML", "CSS", "JavaScript","Bootstrap", "Python", "C#", "GitHub", "VS Code", "Visual Studio"]
  },
  {
    category: "Frameworks & Technologies",
    items: ["AngularJS", "React", "ASP.NET Web Forms", "ASP.NET Core (MVC, Web API)"]
  },
  {
    category: "Databases & Platforms",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Google Sheets", "Excel", "Jupyter Notebook"]
  },
  {
    category: "Data & Analytics",
    items: ["Machine Learning", "Advanced Excel", "Power BI", "Tableau", "Data Cleaning", "Data Visualization", "Exploratory Data Analysis", "Pivot Tables & Charts"]
  },
  {
    category: "Soft Skills",
    items: ["Teamwork", "Communication", "Data Understanding"]
  }
];
});

app.controller("MyController",function($scope){

});