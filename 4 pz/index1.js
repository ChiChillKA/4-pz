console.log("Задание 2")
let name = prompt("Введите имя: ")
let surname = prompt("Введите фамили: ")
    let upname=name.toUpperCase();
    let upsurname=surname.toUpperCase();
    let normalname=upname.substr(1);
    let normalsurname=upsurname.substr(1);
    normalname=normalname.toLowerCase();
        normalsurname=normalsurname.toLowerCase();
        let n_surname=upsurname[0];
        let n_name=upname[0];
        let fin_name=n_name+normalname;
        let fin_surname=n_surname+normalsurname;
            if(fin_name==name&&fin_surname==surname)
            {
                alert(name+" "+surname+". "+"/nИмя и фамилия в норме."); 
            }
                else
                {
                    if(fin_name==name&&fin_surname!=surname){
                        alert(name+" "+fin_surname+". "+"/nИмя в норме, фамилия исправна.");
                    }
                    else
                    {
                        if(fin_name!=name&&fin_surname==surname){
                            alert(fin_name+" "+surname+". "+"/nИмя испарвна, фамилия в норме.");
                        }
                        else
                        {
                            alert(fin_name+" "+fin_surname+". "+"/nИмя и фамилия исправны.");
                        }
                };
            }
