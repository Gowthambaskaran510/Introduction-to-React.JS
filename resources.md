# React CDN

````html
<script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>

```Javascript file

<div id="root"></div>
<script type="text/javascript">
  const rootElement = document.getElementById("root");
  const element = document.createElement("h1");
  element.textContent = "Hello World!";
  element.classList.add("greeting");
  rootElement.appendChild(element);
</script>
````

```React.js
<script type="module">
      const elementType = "h1";
      const elementProps = { className: "greeting ", children: "Hello world!" };

      const element = React.createElement(elementType, elementProps);

      ReactDOM.render(element, document.getElementById("root"));
</script>

```

JSX

<div id="root"></div>
    <script type="text/babel">
      const element = <h1 className="greeting ">Hello world!</h1>;

      ReactDOM.render(element, document.getElementById("root"));
    </script>

<div id="root"></div>
    <script type="text/babel">
      const name = "Gowtham";
      const className = "greeting";
      const element = <h1 className="greeting ">Hello {name}!</h1>;

      ReactDOM.render(element, document.getElementById("root"));
    </script>

<div id="root"></div>
    <script type="text/babel">
      const fullName = (user) => user.firstName + " " + user.lastName;
      const user = { firstName: "Gowtham", lastName: "Baskaran" };
      const className = "greeting";
      const element = <h1 className="greeting ">Hello {fullName(user)}!</h1>;

      ReactDOM.render(element, document.getElementById("root"));
    </script>
