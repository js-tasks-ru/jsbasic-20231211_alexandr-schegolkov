function makeFriendsList(friends) {
  let list = document.createElement("ul");

  for (i = 0; i < friends.length; ++i) {
    let li = document.createElement("li");
    li.innerText = friends[i].firstName + " " + friends[i].lastName;
    list.appendChild(li);
  }

  return list;
}
