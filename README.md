# 1. What is JSX, and why is it used?
Ans: JSX stands for JavaScript XML. It is a syntax extension to JavaScript that allows you to write HTML-like code inside <br>JavaScript files.It makes it easier to design the UI by combining JavaScript logic and HTML structure in the same file.
<br>
<br>   Reason for using JSX   : <br>
<br>    1. Readability & declarative style (UI structure looks very similar to the final HTML output).

        <div>
             <h2>User Profile</h2>
            <p>Name: Meraj</p>
        </div>
  }
<br>   2. Full JavaScript power inside (You can use any JS expression inside {} curly braces).
<br>        ex:

     {user.isAdmin ? <AdminPanel /> : <Login />}
<br>    3. Component-Based Development.
<br>
       ex: 
              
               function Welcome() {
               return <p>Hello User</p>;
                        }

# 2. What is the difference between State and Props?
Ans: Props and State are the two primary ways to handle data in React components. They serve very different purposes.<br>
<br> Props: Props are used to pass data from a parent component to a child component.<br>
<br> ex:

         function App() {
              return <User name="Meraj" />;
               }

                     function User(props) {
                    return <h1>Hello {props.name}</h1>;
                }

<br> state:  State is used to store and manage data inside a component.<br>
<br>ex:

          import { useState } from "react";

              function Counter() {
                       const [count, setCount] = useState(0);

                       return (
                    <button onClick={() => setCount(count + 1)}>
                                 Count: {count}
                                 </button>
                                );
                        }

# 3. What is the useState hook, and how does it work?
Ans: useState() is a React Hook used to add state to functional components. It returns a state variable and a function to update it. When the state changes,React automatically re-renders the component to update the UI.
<br>The useState hook returns two things:
<br>
    1.  State variable → stores the current value
<br>
2.  Setter function → updates the state value  
<br> ex:

         import React, { useState } from "react";

          function Counter() {
      const [count, setCount] = useState(0);

                return (
                      <div>
                      <h2>Count: {count}</h2>
                     <button onClick={() => setCount(count + 1)}>
                                 Increase
                            </button>
                        </div>
                 );
             }

# 4. How can you share state between components in React?
Ans:  State can be shared between components by lifting the state up to a common parent component and passing it through props. For larger applications, developers can use the Context API or state management libraries like Redux.
<br>There are several ways to share state between React components:<br>
<br>1. Lifting State Up=>
<br>Move state to the closest common ancestor, then pass it down via props. This is the most fundamental pattern.<br>
<br>2. Props Drilling=>
<br>Pass state through multiple component layers via props. Simple but can get messy with deeply nested trees.<br>
<br>3. Context API=>
<br>Built-in React solution for sharing state without prop drilling. Best for global data like themes, auth, or locale.<br>

# 5. How is event handling done in React?
Ans: Event handling in React is done using camelCase event attributes like onClick, onChange, and onSubmit. A function is passed as the event handler, which executes when the event occurs. React uses a synthetic event system to ensure cross-browser compatibility.
<br><br>
ex:

    <button onClick={() => console.log("Clicked")}> Click </button>

 or

     function InputExample() {
     const handleChange = (e) => {
    console.log(e.target.value);
    };
      return <input type="text" onChange={handleChange} />;
     }
