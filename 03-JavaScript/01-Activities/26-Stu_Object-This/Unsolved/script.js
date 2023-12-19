// 'This' refers to the window 
console.log(this);

// This refers to the window object
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// The child's age
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// The initial investment (5000) *1.15
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// call the function helloThis to check results
helloThis();

// call the object methods to check results
child.ageTenYears();
investor.investment.investmentGrowth();
