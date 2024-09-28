Object Data type 
*imp* -> The database table data coming to the UI as Array of Object
   Here the table is a array and object is for each row having key and value and each row becomes object

  object data type rep in 2 ways
      1. Literal type: Object rep by{Key: value}
          ex: let user = {id:1, name:"anil"};

      2. Object Type: Object rep by new Object({key: value})
          ex: let user = new Object({id:1. name:"anil"});

      let user = {id:1, name: "anil"};
      document.writeln(user) // [object object]
      document.writeln(user.id) // 1
      document.writeln(user.name) // anil

     Accessing object values
    there are 2 ways 
    1. extension : Object.keys
    2. Dynamic key: obj["key"] //object of key

    let user = {id:1, name:"anil"};
    let key = "name";
    document.writeln(user[key]);

    // Adding item to existing object
    js is a dynamically scripted language we can add key dynamicaaly to obj

     let user = {id:1, name:"anil"};
    user.email = "anil@gmail.com";

    let key = "email"
    document.writeln(user.email);
    document.writeln(user[key]);

Array(Arrays is a collection of items/elements)
Item can be any type
There are 2 ways to create an array

1. Literal TypeError(It is rep by [item1, item2])

ex: let arr = [1,2,3];

2. object type: rep by new Array();

ex: let arr = new array(1,2,3);

How to access from an array

-> Array items are accessed by using an index.
index starts from 0 to n-1 

let arr = [1,2,3];
document.writeln(arr[1]) // 2
document.writeln(arr[5]); // undefined

Array functions: It is used to manipulate the array data
1. Add/insert data to an Array
-> There are 3 possible ways to add an item to an Array
  i. Push: Push will add item to an array at last index position 
  ex: arr.push(item);

  let arr = [1,2,3];
  arr.push(4);
  document.writeln(arr[3])
  document.writeln(arr.length);

  ii. Unshift: Unshift will add item to an aaray at first Position
  ex: arr.unshift(item);

    let arr = [1,2,3];
    arr.unshift(5);
    document.writeln(arr[0])

  iii. Splice: splice will add item to an aaray at specific index position
  ex: Array.splice(index,deletecount,item);

  let arr = [1,2,3];
  arr.splice(1,0,5);
  document.write(arr[0]);
  document.write(arr[1]);
  document.write(arr[2]);
  document.write(arr[3]);

//   Array search functions
  1.Filter: All the matched records
  2.Find: return only first matched records
  3.findIndex: return index of first matched records
  4. findLastIndex: return last matched records
  5. indexof:  return index of matched records
  6. every: return true all the records are matched with search criteria
  7. some: return true at least one item is matched else match


let user = {id:1, name:"krishna"};
let user1 = {id:2, name:"Anil"};
let user2 = {id:3, name:"kumar"};

let arr = [];
arr.push(user);
arr.push(user1);
arr.push(user2);


general function

function filterData(item,index, arr)
{
  
  return item.name == "krishna";
}
Anonymous/variable defined function
const filterData1 = function(item, index,arr)
{
  return item.name == "krishna";
}

Arrow function
const filterData2 = (item,index,arr) =>
{
  return item.name == "krishna";
}

Arrow function shorthand syntax
const filterData3 = (item,index,arr) => item.name == "krishna";

let res = arr.find(filterData);
let res = arr.filter(filterData); // filter return type is array
let res = arr.findIndex((item,index,arr) => item.name == "Anil");
let res = arr.some((item,index,arr) => item.name == "Anil");
let res = arr.every((item,index,arr) => item.name == "Anil");

document.write(res);


Here find is a Higher order function
filterData -> act as callback function
Here "find" does -> it pass the 3 parameter to this callback function

*note* All search functions having 3 params -> item,index,arr.

dif  b/w indexOf and findIndex

indexof - loop array of numbers/strings
findIndex - loop array of object
some - if one of the record is matched it will give true/false

// For loop//
1. for loop - it is index based
ex: for(let i=0; i<2;i++){

}

2. For in -> loop the object items.
ex: for(let key in obj){}
for(let key in user){
    document.writeln(key) // id name
    document.writeln(user[key]) // 1 krishna
  }
  

3. for of: loop of array items
ex: for(let item of arr){}

for(let item of arr){
  document.writeln(item.id);
  document.writeln(item.name);
}

*imp* if you don't know the id or name then what you will do ?
for(let item of arr){
  for(let key in item){
    document.writeln(item[key]);
  }
}
