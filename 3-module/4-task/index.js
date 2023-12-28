function showSalary(users, age) {
  let result;
  let nameBalanceArr = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      let userArr = [];
      userArr.push(users[i].name);
      userArr.push(users[i].balance);
      let userStr = userArr.join(", ");
      nameBalanceArr.push(userStr);
    }
  }
  result = nameBalanceArr.join("\n");
  return result;
}
