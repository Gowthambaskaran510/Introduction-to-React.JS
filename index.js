const className = "greeting";
const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Gowtham", lastName: "Baskaran" };
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}!</h1>
    <p> Nice to meet you </p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
