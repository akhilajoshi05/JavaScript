// singleton using constructor

const appUser = new Object()  // singleton obj
console.log(appUser);


const app = {}   // non singleton
app.id="123abs"
app.name="abc"
app.isLoggedIn= false
console.log(app);

const regularUser = {
    email:"aaaa@gmail.com",
    fullname:{
        userFullName:{
            firstName:"aj",
            lastName:"jj"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userFullName.firstName);

//combining objects
const obj1= {1: "A", 2:"B"}
const obj2= {3: "A", 4:"B"}
const obj6= {5: "A", 6:"B"}
const obj3= {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj6)
console.log(obj5);

//spread operator
const obj7 = {...obj1, ...obj2}
console.log(obj7);

// when values comes from database
const user = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

user[1].email
console.log(app);
console.log(Object.keys(app));
