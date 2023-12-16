let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((item)=>{
        item.profession=="developer"? console.log(item):null
    })
  }
  
  // 2. Add Data
  function addData() {
    let f_name=prompt("Enter your Name");
    let f_age=prompt("Enter your age");
    let f_profession=prompt("Enter your Profession");
    data.push({f_name,f_age,f_profession});
    console.log(data);

  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data=data.filter(item=>item.profession!=="admin");
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let data2 = [
        { name: "Bhavika", age: 24, profession: "developer" },
        { name: "rahul", age: 27, profession: "admin" },
      ];
      let combineArray=data.concat(data2);
      console.log(combineArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum=0;
    data.forEach(item=>sum+=item.age);
    console.log(sum/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0;i<data.length;i++){
        if(data[i].age>25){
            console.log("Person greater than 25 exists!");
            break;
        }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueProfessionsarr=[];
    data.forEach(item=>{
        if(!uniqueProfessionsarr.includes(item.profession)){
            uniqueProfessionsarr.push(item.profession);
        }
    })
    console.log(uniqueProfessionsarr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(item=>{
        if(item.name=="john"){
            item.profession="Manager";
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let divcount=data.filter(item=>item.profession=="developer").length;
    let admincount=data.filter(item=>item.profession=="admin").length;
    console.log(`developers:${divcount} |Admins:${admincount}`);
  }