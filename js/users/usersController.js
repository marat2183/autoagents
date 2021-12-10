const usersTable = document.querySelector('.table');




const createUsersTableItem = (userObj) => {
    const tableItem = document.createElement('div');
    tableItem.classList.add('table-item');
    const userInfoDiv = createUserInfoBlock(userObj.fullname, userObj.avatarImgPaths);
    const userEmailSpan = createUserEmailSpan(userObj.email);
    const tableButtonsDiv = createTableItemButtons();
    tableItem.append(userInfoDiv, userEmailSpan, tableButtonsDiv)
    usersTable.append(tableItem);
    return;
}

const createUserInfoBlock = (fullname, avatarPaths) => {
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('table-item__user-info');

    const userAvatarImg = document.createElement('img');
    userAvatarImg.classList.add('table-item__user-avatar');
    userAvatarImg.setAttribute('src', avatarPaths[0]);
    userAvatarImg.setAttribute('srcset', avatarPaths.slice(1).join(', '));

    const userFullnameSpan = document.createElement('span');
    userFullnameSpan.classList.add('table-item__text', 'table-item__text--fullname')
    userFullnameSpan.textContent = fullname;

    userInfoDiv.append(userAvatarImg, userFullnameSpan);
    return userInfoDiv
}

const createUserEmailSpan = (email) => {
    const userEmailSpan = document.createElement('span');
    userEmailSpan.classList.add('table-item__text','table-item__text--email')
    userEmailSpan.textContent = email;
    return userEmailSpan
}

const createTableItemButtons = () => {
    const tableButtonsDiv = document.createElement('div');

    const editButtonImg = document.createElement('img');
    editButtonImg.classList.add('table-item__edit-btn');
    editButtonImg.setAttribute('src', './img/table-edit-btn.svg');

    const deleteButtonImg = document.createElement('img');
    deleteButtonImg.classList.add('table-item__delete-btn')
    deleteButtonImg.setAttribute('src', './img/table-delete-btn.svg');

    tableButtonsDiv.append(editButtonImg, deleteButtonImg);
    return tableButtonsDiv
}




export {createUsersTableItem}