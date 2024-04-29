const {logIn, createAccount, googleSignOn} = require("../workshop.js")

test('was logging in successful', ()=> {
    expect(logIn("drew", "")).toBeFalsy(); 
    expect(logIn("", "pass")).toBeFalsy(); 
    expect(logIn("drew", "pass")).toBeTruthy(); 
    expect(logIn("name", "pass")).not.toBeTruthy(); 

    expect(createAccount("drew@gmail.com","pass")).toBeTruthy();
    expect(createAccount("", "")).toBeFalsy();
    expect(createAccount("drew", "")).toBeFalsy();

    expect(googleSignOn("drewseph@gmail.com")).toBeTruthy(); 
    expect(googleSignOn("drew@yahoo.com")).toBeFalsy(); 
})

