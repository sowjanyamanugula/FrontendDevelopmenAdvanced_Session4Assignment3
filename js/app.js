var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Department = (function () {
    //public name: string;
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("This is " + this.name + " Department");
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    //Use department class property and methods here
    function AccountingDepartment(name) {
        return _super.call(this, name) || this;
    }
    AccountingDepartment.prototype.printMeeting = function (time) {
        console.log("The meeting is scheduled for " + time);
    };
    return AccountingDepartment;
}(Department));
var SalesDepartment = (function (_super) {
    __extends(SalesDepartment, _super);
    //Use department class property and methods here
    function SalesDepartment(name) {
        return _super.call(this, name) || this;
    }
    SalesDepartment.prototype.printMeeting = function (time) {
        console.log("The meeting is scheduled for " + time);
    };
    return SalesDepartment;
}(Department));
var AdminDepartment = (function (_super) {
    __extends(AdminDepartment, _super);
    //Use department class property and methods here
    function AdminDepartment(name) {
        return _super.call(this, name) || this;
    }
    AdminDepartment.prototype.printMeeting = function (time) {
        console.log("The meeting is scheduled for " + time);
    };
    return AdminDepartment;
}(Department));
var accounts = new AccountingDepartment("Accounts");
accounts.printName();
accounts.printMeeting("tomorrow");
var sales = new AccountingDepartment("Sales");
sales.printName();
sales.printMeeting("today");
var admin = new AccountingDepartment("Admin");
admin.printName();
admin.printMeeting("week");
//# sourceMappingURL=app.js.map