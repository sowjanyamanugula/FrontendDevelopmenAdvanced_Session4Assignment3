abstract class Department {
//public name: string;
constructor (public name:string) {}
printName(): void { 
    console.log(`This is `+ this.name + ` Department`);
 }
abstract printMeeting(time:string): void;
}

class AccountingDepartment extends Department {
//Use department class property and methods here
      constructor(name:string){
          super(name);
      }
      printMeeting(time): void{
          console.log(`The meeting is scheduled for ` + time);
      }
}

class SalesDepartment extends Department {
//Use department class property and methods here
      constructor(name){
          super(name);
      }
      printMeeting(time): void{
          console.log(`The meeting is scheduled for ` + time);
      }
}
class AdminDepartment extends Department {
//Use department class property and methods here
      constructor(name){
          super(name);
      }
      printMeeting(time): void{
          console.log(`The meeting is scheduled for ` + time);
      }
}

let accounts=new AccountingDepartment("Accounts");
accounts.printName();
accounts.printMeeting("tomorrow");


let sales=new AccountingDepartment("Sales");
sales.printName();
sales.printMeeting("today");

let admin=new AccountingDepartment("Admin");
admin.printName();
admin.printMeeting("week");

