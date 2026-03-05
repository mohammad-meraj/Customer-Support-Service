# What is JSX, and why is it used?
Ans: JSX stands for JavaScript XML. It is a syntax extension to JavaScript that allows you to write HTML-like code inside JavaScript files.It makes it easier to design the UI by combining JavaScript logic and HTML structure in the same file.
    Reason for using JSX:
    1.Readability & declarative style (UI structure looks very similar to the final HTML output).
    2.Full JavaScript power inside (You can use any JS expression inside {} curly braces).
       ex:{user.isAdmin ? <AdminPanel /> : <Login />}
    3.Component-Based Development.
       ex:  function Welcome() {
               return <h1>Hello User</h1>;
                        }