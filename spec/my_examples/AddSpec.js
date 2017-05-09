var app=require("../../src/prime.js");

describe("Get Prime",function(){
  it("The function should return the prime ",function() {
    var value=app.getPrime(1);
    expect(value).toEqual([]);
  });
});

describe("Get Prime",function(){
  it("The function should return the prime ",function() {
    var value=app.getPrime(2);
    expect(value).toEqual([2]);
  });
});

describe("Get Prime",function(){
  it("The function should return the prime ",function() {
    var value=app.getPrime(5);
    expect(value).toEqual([2,3,5]);
  });
});

describe("Get Prime",function(){
  it("The function should not be boolean ",function() {
    var value=app.getPrime(true);
    expect(value).not.toBe("should be a number");
  });
});

describe("Get Prime",function(){
  it("The function should not be a string ",function() {
    var value=app.getPrime("hello");
    expect(value).not.toBe("should be a number");
  });
});

describe("Get Prime",function(){
  it("The function should not be boolean ",function() {
    var value=app.getPrime(false);
    expect(value).not.toBe("should be a number");
  });
});

describe("Get Prime",function (){
  var value=app.getPrime(7);
   it("The function should return ", function (){
      expect(value).toEqual([2,3,5,7]);
   });
});

describe("Get Prime",function (){
  var value=app.getPrime(10);
   it("The function should return ", function (){
      expect(value).toEqual([2,3,5,7]);
   });

});

describe("Get Prime",function (){
  var value=app.getPrime(100);
   it("The function should return", function (){
      expect(value).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,
      43,47,53,59,61,67,71,73,79,83,89,97]);
   });

});

describe("Get Prime",function (){
  var value=app.getPrime(null);
   it("The function expects argument to be a number", function (){
      expect(value).toBeDefined();
   });

});

describe("Get Prime",function (){
  var value=app.getPrime(-6);
   it("The function expects argument to be a number", function (){
      expect(value).not.toBe('negative but positive');
   });

});
