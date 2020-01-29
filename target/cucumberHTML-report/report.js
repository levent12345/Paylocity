$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddEmployeeDiscount.feature");
formatter.feature({
  "line": 1,
  "name": "Employee Dashboard information",
  "description": "",
  "id": "employee-dashboard-information",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1767039725,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 864702932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 409243559,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1057519501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3250416546,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "checking firstname you entered",
  "description": "",
  "id": "employee-dashboard-information;checking-firstname-you-entered",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TC001"
    },
    {
      "line": 12,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "checking firstname on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.checking_firstname_on_the_dashboard()"
});
formatter.result({
  "duration": 26768684,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[John]\u003e but was:\u003c[Veli]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinitions.testSteps.checking_firstname_on_the_dashboard(testSteps.java:54)\n\tat ✽.And checking firstname on the dashboard(AddEmployeeDiscount.feature:14)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1079326359,
  "status": "passed"
});
formatter.before({
  "duration": 1064881052,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 745101385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 397834123,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1061155534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3241268566,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "checking lastname you entered",
  "description": "",
  "id": "employee-dashboard-information;checking-lastname-you-entered",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@TC002"
    },
    {
      "line": 15,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "checking lastname on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.checking_lastname_on_the_dashboard()"
});
formatter.result({
  "duration": 27130483,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Doe]\u003e but was:\u003c[Ali]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinitions.testSteps.checking_lastname_on_the_dashboard(testSteps.java:59)\n\tat ✽.And checking lastname on the dashboard(AddEmployeeDiscount.feature:17)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1088800613,
  "status": "passed"
});
formatter.before({
  "duration": 1106638437,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 678610061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 397219699,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1063545753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3244783996,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "checking dependants you entered",
  "description": "",
  "id": "employee-dashboard-information;checking-dependants-you-entered",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC003"
    },
    {
      "line": 19,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "checking ldependants on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.checking_ldependants_on_the_dashboard()"
});
formatter.result({
  "duration": 26946398,
  "status": "passed"
});
formatter.after({
  "duration": 1083351706,
  "status": "passed"
});
formatter.before({
  "duration": 1092803228,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 743981439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 408802567,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1055562812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3252151579,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "checking Salary",
  "description": "",
  "id": "employee-dashboard-information;checking-salary",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@TC004"
    },
    {
      "line": 23,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "checking Salary on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.checking_Salary_on_the_dashboard()"
});
formatter.result({
  "duration": 25867369,
  "status": "passed"
});
formatter.after({
  "duration": 1086343076,
  "status": "passed"
});
formatter.before({
  "duration": 1032511519,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 741608696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 385628706,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1059844529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3250851677,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "checking Gross Pay",
  "description": "",
  "id": "employee-dashboard-information;checking-gross-pay",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TC005"
    },
    {
      "line": 27,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "checking Gross pay on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.checking_Gross_pay_on_the_dashboard()"
});
formatter.result({
  "duration": 26260946,
  "status": "passed"
});
formatter.after({
  "duration": 1080793792,
  "status": "passed"
});
formatter.before({
  "duration": 1029325604,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 751051961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 387045609,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1062371507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3246345889,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "checking Benefit Cost",
  "description": "",
  "id": "employee-dashboard-information;checking-benefit-cost",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@TC006"
    },
    {
      "line": 31,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "checking Benefit Cost  on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.checking_Benefit_Cost_on_the_dashboard()"
});
formatter.result({
  "duration": 50966157,
  "status": "passed"
});
formatter.after({
  "duration": 1082641568,
  "status": "passed"
});
formatter.before({
  "duration": 1056243489,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 738232975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 393613429,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1062417416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3243404868,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "checking  Net Pay",
  "description": "",
  "id": "employee-dashboard-information;checking--net-pay",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC007"
    },
    {
      "line": 35,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "checking  Net Pay on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.checking_Net_Pay_on_the_dashboard()"
});
formatter.result({
  "duration": 50197411,
  "status": "passed"
});
formatter.after({
  "duration": 1087869554,
  "status": "passed"
});
formatter.before({
  "duration": 1094323805,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 739021119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 387956850,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1059277141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3246117748,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "checking Id",
  "description": "",
  "id": "employee-dashboard-information;checking-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@TC008"
    },
    {
      "line": 39,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "checking Id\u0027s on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.checking_Id_s_on_the_dashboard()"
});
formatter.result({
  "duration": 25761271,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[2]\u003e but was:\u003c[1]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinitions.testSteps.checking_Id_s_on_the_dashboard(testSteps.java:108)\n\tat ✽.And checking Id\u0027s on the dashboard(AddEmployeeDiscount.feature:41)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1089026041,
  "status": "passed"
});
formatter.before({
  "duration": 1023439512,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 767025934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 543315249,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1056477196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3251091248,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "checking Edit functionality",
  "description": "",
  "id": "employee-dashboard-information;checking-edit-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@TC009"
    },
    {
      "line": 43,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "after edit firstname on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.after_edit_firstname_on_the_dashboard()"
});
formatter.result({
  "duration": 6222583614,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[john]\u003e but was:\u003c[Veli]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinitions.testSteps.after_edit_firstname_on_the_dashboard(testSteps.java:122)\n\tat ✽.And after edit firstname on the dashboard(AddEmployeeDiscount.feature:45)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1088461479,
  "status": "passed"
});
formatter.before({
  "duration": 1101881563,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "employee entering username \"testUser\" and password \"Test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "employee select Add Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "employee entering firstname \"Ali\" lastname \"Veli\" and dependants\"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.launch_the_browser()"
});
formatter.result({
  "duration": 758521972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser",
      "offset": 28
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "testSteps.employee_entering_username_and_password(String,String)"
});
formatter.result({
  "duration": 391978661,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.employee_select_Add_Employee()"
});
formatter.result({
  "duration": 1056502383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali",
      "offset": 29
    },
    {
      "val": "Veli",
      "offset": 44
    },
    {
      "val": "3",
      "offset": 65
    }
  ],
  "location": "testSteps.employee_entering_firstname_lastname_and_dependants(String,String,String)"
});
formatter.result({
  "duration": 3251639606,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "checking Delete functionality",
  "description": "",
  "id": "employee-dashboard-information;checking-delete-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@TC0010"
    },
    {
      "line": 47,
      "name": "@Discount"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "after delete firstname on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "testSteps.after_delete_firstname_on_the_dashboard()"
});
formatter.result({
  "duration": 2079104624,
  "error_message": "java.lang.AssertionError: expected:\u003cnull\u003e but was:\u003cVeli\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinitions.testSteps.after_delete_firstname_on_the_dashboard(testSteps.java:134)\n\tat ✽.And after delete firstname on the dashboard(AddEmployeeDiscount.feature:49)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1087705996,
  "status": "passed"
});
});