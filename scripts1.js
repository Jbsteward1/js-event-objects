const userData = [
  {
    userId: 1,
    firstName: "Kez",
    lastName: "Smith",
    userName: "Ksmith1",
    email: "ksmith1@gmail.com",
    password: 0000,
  },
  {
    userId: 2,
    firstName: "Bryhan",
    lastName: "Owen",
    userName: "Bowen2",
    email: "Bowen2@hotmail.com",
    password: 1234,
  },
  {
    userId: 3,
    firstName: "Luccas",
    lastName: "Santos",
    userName: "LSantos3",
    email: "Lsantos3@viral.com",
    password: 5678,
  },
  {
    userId: 4,
    firstName: "Jeremy",
    lastName: "Steward",
    userName: "Jsteward4",
    email: "Jsteward4@coolkid.com",
    password: 9012,
  },
];

function checkUserData(getUserName, getPassword, getEmail) {
  let selectedUser = userData.filter(
    (indexCards) => getUserName == indexCards.userName
  );
  if (selectedUser.length == 0) {
    alert("User doesn't exist");
  } else {
    if (getPassword == selectedUser[0].password) {
      if (getEmail == selectedUser[0].email) {
        alert("You have logged in succesfully");
      } else {
        alert("Email is incorrect");
      }
    } else {
      alert("Password is incorrect");
    }
  }
}

// add a submit button...[done]
// function event when you click submit...[done]
// fetch the user input from processing...[done]

// check the user input vs data...[1/2]
// add alert if positive ("youve logged in") if not ("fail")
