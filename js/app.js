angular.module("main", ['zingchart-angularjs'])
.controller('calculatorCtrl', function($scope){
  $scope.computerUsingEmployeesPercent = 0;
  $scope.computerUsingEmployees = 0;
  $scope.numberOfEmployees = 0;

  $scope.calculateComputerUsingEmployees = function(){
    $scope.computerUsingEmployeesPercent = _.find($scope.computer_usage_by_industry, function(o) { return o.industry == $scope.chosenIndustry; }).usage;
    $scope.computerUsingEmployees = $scope.numberOfEmployees * $scope.computerUsingEmployeesPercent;
  }

  $scope.myJson = {
    type : 'line',
      series : [
        { values : [54,23,34,23,43] },
        { values : [10,15,16,20,40] }
      ]
  };

  $scope.workload_graph = {
    "type":"pie3d",
      "series": [
          {"text":"Server Closet", "values":[2]},
          {"text":"values":[55]},
          {"text":"values":[30]},
          {"text":"values":[28]},
          {"text":"values":[15]}
      ]
  }

  // Static data...
  $scope.applications = ['Email', 'Productivity', 'CRM'];

  $scope.industries = [
      'Agriculture, forestry, fishing and hunting and mining',
      'Construction',
      'Manufacturing',
      'Wholesale trade',
      'Retail trade',
      'Transportation and warehousing, and utilities',
      'Information',
      'Finance and insurance, real estate and rental and leasing',
      'Professional, scientific, management, administrative and waste',
      'Educational services, and health care and social assistance',
      'Arts, entertainment, recreation, accommodation and food',
      'Other services, except public administration',
      'Public administration'
  ];

  // Computer usage by industry
  $scope.computer_usage_by_industry = [
      {
          industry: 'Agriculture, forestry, fishing and hunting and mining',
          usage: .51
      },
      {
          industry: 'Construction',
          usage: .41
      },
      {
          industry: 'Manufacturing',
          usage: .52
      },
      {
          industry: 'Wholesale trade',
          usage: .64
      },
      {
          industry: 'Retail trade',
          usage: .68
      },
      {
          industry: 'Transportation and warehousing, and utilities',
          usage: .49
      },
      {
          industry: 'Information',
          usage: .74
      },
      {
          industry: 'Finance and insurance, real estate and rental and leasing',
          usage: .77
      },
      {
          industry: 'Professional, scientific, management, administrative and waste',
          usage: .70
      },
      {
          industry: 'Educational services, and health care and social assistance',
          usage: .72
      },
      {
          industry: 'Arts, entertainment, recreation, accommodation and food',
          usage: .46
      },
      {
          industry: 'Other services, except public administration',
          usage: .49
      },
      {
          industry: 'Public administration',
          usage: .63
      }
  ];


  // % of users that consume an application, by application type and industry size
  $scope.user_to_application_usage = [
      {
          application: "Email",
          small_usage: 1, // Under 100 employees, 100%
          medium_usage: 1,
          large_usage: 1
      },
      {
          application: "Productivity",
          small_usage: .5, // Under 100 employees, 100%
          medium_usage: .9,
          large_usage: 1
      },
      {
          application: "CRM",
          small_usage: .5, // Under 100 employees, 100%
          medium_usage: .75,
          large_usage: 1
      }
  ];

  $scope.distribution_by_location = [
    {
      location: "Server Closet",
      small_usage: .35,
      medium_usage: .04,
      large_usage: .02,
      pue: 2.5
    },
    {
      location: "Server Room",
      small_usage: .45,
      medium_usage: .09,
      large_usage: .04,
      pue: 2.1
    },
    {
      location: "Localized DC",
      small_usage: .10,
      medium_usage: .38,
      large_usage: .08,
      pue: 2.0
    },
    {
      location: "Mid-Tier DC",
      small_usage: .0,
      medium_usage: .21,
      large_usage: .23,
      pue: 2.0
    },
    {
      location: "Enterprise-Class DC",
      small_usage: .10,
      medium_usage: .27,
      large_usage: .63,
      pue: 1.5
    }
  ];

  $scope.users_per_server = [
    {
      location: "Server Closet",
      applications:[ {
        name: 'Email',
        users_per_server: 6
      },{
        name: 'Productivity',
        users_per_server: 7
      },{
        name: 'CRM',
        users_per_server: 9
      }]
    },
    {
      location: "Server Room",
      applications:[ {
        name: 'Email',
        users_per_server: 5
      },{
        name: 'Productivity',
        users_per_server:6
      },{
        name: 'CRM',
        users_per_server: 9
      }]
    },
    {
      location: "Localized DC",
      applications:[ {
        name: 'Email',
        users_per_server: 17
      },{
        name: 'Productivity',
        users_per_server: 29
      },{
        name: 'CRM',
        users_per_server: 50
      }]
    },
    {
      location: "Mid-Tier DC",
      applications:[ {
        name: 'Email',
        users_per_server: 462
      },{
        name: 'Productivity',
        users_per_server: 450
      },{
        name: 'CRM',
        users_per_server: 598
      }]
    },
    {
      location: "Enterprise-Class DC",
      applications:[ {
        name: 'Email',
        users_per_server: 909
      },{
        name: 'Productivity',
        users_per_server: 909
      },{
        name: 'CRM',
        users_per_server: 909
      }]
    },
    {
      location: "Cloud",
      applications:[ {
        name: 'Email',
        users_per_server: 909
      },{
        name: 'Productivity',
        users_per_server: 909
      },{
        name: 'CRM',
        users_per_server: 909
      }]
    }
  ];
});
