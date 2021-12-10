import { createUsersTableItem } from "./usersController.js";
import { usersData } from "./usersData.js";


const MAX_TABLE_SIZE = 9;

const userAddService = (usersData) => {
    if (usersData.length <= MAX_TABLE_SIZE){
        for (let user of usersData){
            createUsersTableItem(user)
        }
        return;
    } 
    for (let i = 0; i < MAX_TABLE_SIZE; i++){
        createUsersTableItem(usersData[i]);
    }
    return;
}

userAddService(usersData);

