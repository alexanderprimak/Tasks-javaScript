const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
 ];

 
 let sayUserName = prompt ("What is your name or last name");

    let res;


    for (let i=0 ; i < data.length; i++) {

        if(data[i].firstName === sayUserName) {
        
            res = `${data[i].firstName} ${data[i].lastName} ,  возраст:${data[i].age}`;

            break;

        }else if(data[i].lastName === sayUserName){

            res = `${data[i].firstName} ${data[i].lastName} , возраст:${data[i].age}`;

            break;

        } else {

            res = "Noresults found for your request"

        }

 }

 alert(res);


 