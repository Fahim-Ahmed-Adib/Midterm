const age=40;
const salary=300000;

function bonus(age,salary){
    if(age >25 && salary>=100000)
    {
        return (salary+(salary/100)*20);
    }
    else if(age >25 && salary >=200000)
    {
        return (salary+(salary/100)*30);
    }
    else if(age >35 && salary >=300000)
    {
        return (salary+(salary/100)*40);
    }
    else{
      return (salary+(salary/100)*10);
    }
}

const result= bonus(age,salary);
console.log(result);