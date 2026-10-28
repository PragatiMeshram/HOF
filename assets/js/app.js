let cl = console.log;

let age = [10,20,5,15,30]
let result =age.reduce((acc,cv)=>{
    cl(acc,cv)
});

//2.addition
let age1 = [10,20,5,15,30]
let result2 = age1.reduce((acc,cv)=>{
    acc = acc + cv;
    return acc;
})

cl(result2);

//3.multiplication
let age2 = [10,20,5,15,30]
let result3 = age2.reduce((acc,cv)=>{
    acc = acc * cv
    return acc;
});
cl(result3);

//4.doublethe value
let age3 = [10,20,5,15,30]

let result4 = age3.reduce((acc,cv)=>{
     acc.push(cv * 2)
    return acc;
},[])
cl(result4);

//5.[The value is 10,The value is 20,...]
let age4 = [10,20,5,15,30]
let result5 = age.reduce((acc,cv)=>{
    acc.push(`The value is ${cv}`);
    return acc;
},[]);
cl(result5);

//6.find sqrt
let num = [10,20,5,15,30]
let result6 =num.reduce((acc,cv)=>{
    acc.push(+Math.sqrt(cv).toFixed(2))
    return acc;
},[]);
cl(result6);

//7.
let age5 = [10];
let result7 = num.reduce((acc,cv)=>{
    cl(acc,cv);
    return acc;
}, 1); 

cl(result7);


var companies = [
    { name: "Company One", id : 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id : 2, category: "retail", start: 1992, end: 2008 },
    { name: "Company Three", id : 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four",id : 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five",id : 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company six",id : 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven",id : 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight",id : 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine",id : 9, category: "Retail", start: 1981, end: 1989},
]

//8. Total age of company

let result8 = companies.reduce((acc,cv)=>{
    acc = acc + (cv.end - cv.start);
    return acc;
},0);
cl(result8);

//9. ['company one','company two',......]
let result9 = companies.reduce((acc,cv)=>{
    acc.push(cv.name)
    return acc;
},[]);
cl(result9);

//10.['company one-2','company two-2'...]
let result10 = companies.reduce((acc,cv)=>{
    acc.push(`${cv.name} - ${cv.end-cv.start}years`)
    return acc;
},[]);
cl(result10);

//11.['company one-life span'....]
let result11 = companies.reduce((acc,cv)=>{
    acc.push(`${cv.name} (${cv.start}-${cv.end})`);
    return(acc);
},[]);

cl(result11);

//12.['company one-finance(1981-2003)','company two-retail(1992-2008)']

let result12 = companies.reduce((acc,cv)=>{
    acc.push(`${cv.name} - ${cv.category}(${cv.start}-${cv.end})`);
    return(acc);
},[]);

cl(result12);

//13.[{compName : 'company name',lifespan : '1981-2003'}]

   let result13 = companies.reduce((acc,cv)=>{
   let obj = {
    compName : cv.name,
    lifespan : `${cv.start} - ${cv.end}`
   }
   acc.push(obj);
    return (acc);
   },[]);
   cl(result13);

   //or
   let result14 = companies.reduce((acc,cv)=>{
    acc.push({
        compName : cv.name,
        lifeSpan : `${cv.start} - ${cv.end}`
    })
    return acc;
   },[]);
   cl(result14);



   var companies = [
    { name: "Company One", id : 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id : 2, category: "retail", start: 1992, end: 2008 },
    { name: "Company Three", id : 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four",id : 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five",id : 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company six",id : 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven",id : 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight",id : 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine",id : 9, category: "Retail", start: 1981, end: 1989},
]
   //15.[{compName:"company one",duration:"22 years"}]

   let result15 = companies.reduce((acc,cv)=>{
     acc.push({
        compName : cv.name,
        duration : `${cv.end-cv.start}years`
     })
    return acc;
   },[]);
   cl(result15);

   //16.

   let result16 = companies.reduce((acc,cv)=>{
    acc.push(`The company name is ${cv.name} and category is ${cv.category} and it run for ${cv.end - cv.start} years`);
    return acc;
   },[]);
   cl(result16);

   //17.[{name:"company Two", id:2,category:"retail",start:1992,end:2008}]
   //[{name."company four", id:4,category:"retail",start:1989,end:2010}]

   let result17 = companies.reduce((acc,cv)=>{
   if(cv.category.toLowerCase().includes("retail")){
    acc.push(cv);
   }

    return acc;
   },[]);
   cl(result17);

   //18.create array of company who run for atleast 10 years

   let result18 = companies.reduce((acc,cv)=>{
    if(cv.end - cv.start >= 10){
        acc.push(cv)
    }
    return acc;
   },[]);
   cl(result18);

   //19.companies start in 80's
   //cv.start >= 1980 && cv.start < 1989

   let result19 = companies.reduce((acc,cv)=>{
     
    if(cv.start >= 1980 && cv.start <= 1989){
        acc.push(cv);
    }
    return acc;
   },[]);
   cl(result19);

   //20.["The company name is company one and category is finance",
   // "The company name is company two and category is retail"]

   let result20 = companies.reduce((acc,cv)=>{
  
    if(cv.start >= 1980 && cv.start<=1989){
        acc.push(`The company name is ${cv.name} and category is ${cv.category} ${cv.start}`);
    }
    return acc;
   },[])
   cl(result20);

   //21.[{compname : "company One",duration: "22 years"}]

   let result21 = companies.reduce((acc,cv)=>{
    if (!Array.isArray(acc))
        acc = []
    acc.push({
        compName : cv.name,
        duration : `${cv.end - cv.start}Years`
    })
    return acc;
   }) 
   cl(result21);

   //22.

   let result22 = companies.reduce((acc,cv,i)=>{
    if(i === 1){
        acc = [{
            compName : cv.name,
            duration : `(${cv.end - cv.start} Years)`}]
    }else{
    acc.push({
        compName : cv.name,
        duration : `${cv.end - cv.start}Years`
    })
}
    return acc;
   },[]);
   cl(result22);









