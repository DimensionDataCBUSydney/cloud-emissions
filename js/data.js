var applications = ['Email', 'Productivity', 'CRM'];

var industries = [
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
var computer_usage_by_industry = [
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
var user_to_application_usage = [
    {
        application: "Email",
        100: 1, // Under 100 employees, 100%
        500: 1,
        501: 1
    },
    {
        application: "Productivity",
        100: 1, // Under 100 employees, 100%
        500: 1,
        501: 1
    },
    {
        application: "CRM",
        100: 1, // Under 100 employees, 100%
        500: 1,
        501: 1
    }
]