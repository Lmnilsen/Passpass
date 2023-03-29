import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
// import Iroh from 'iroh';
// import 'iroh';

  function officialTest()
  {
	const Iroh = require("iroh");

let stage = new Iroh.Stage(`
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
factorial(3);
`);

// function call
stage.addListener(Iroh.CALL)
.on("before", (e) => {
  let external = e.external ? "#external" : "";
  console.log(" ".repeat(e.indent) + "call", e.name, external, "(", e.arguments, ")");
  //console.log(e.getSource());
})
.on("after", (e) => {
  let external = e.external ? "#external" : "";
  console.log(" ".repeat(e.indent) + "call", e.name, "end", external, "->", [e.return]);
  //console.log(e.getSource());
});

// function
stage.addListener(Iroh.FUNCTION)
.on("enter", (e) => {
  let sloppy = e.sloppy ? "#sloppy" : "";
  if (e.sloppy) {
    console.log(" ".repeat(e.indent) + "call", e.name, sloppy, "(", e.arguments, ")");
    //console.log(e.getSource());
  }
})
.on("leave", (e) => {
  let sloppy = e.sloppy ? "#sloppy" : "";
  if (e.sloppy) {
    console.log(" ".repeat(e.indent) + "call", e.name, "end", sloppy, "->", [void 0]);
    //console.log(e.getSource());
  }
})
.on("return", (e) => {
  let sloppy = e.sloppy ? "#sloppy" : "";
  if (e.sloppy) {
    console.log(" ".repeat(e.indent) + "call", e.name, "end", sloppy, "->", [e.return]);
    //console.log(e.getSource());
  }
});

// program
stage.addListener(Iroh.PROGRAM)
.on("enter", (e) => {
  console.log(" ".repeat(e.indent) + "Program");
})
.on("leave", (e) => {
  console.log(" ".repeat(e.indent) + "Program end", "->", e.return);
});

eval(stage.script);

  }

  function irohTest() {
  const Iroh = require("iroh");
  console.log(Iroh);
  console.log(Iroh.Stage);

  // Function originally called irohTestBody()
  let stage = new Iroh.Stage(`
    // Project Euler Problem #1
    // Find sum of all multiples of 3 or 5 below 1000
    var sum = 0;
    for  (var i = 0; i < 1000; i++)
    {
      if (i % 3 === 0 || i % 5 === 0)
      {
        sum += i;
      }
    }
    console.log(sum);`);


    // First, we need to create a "stage", a block of code for Iroh to monitor
    // let testBody = irohTestBody.toString();
    // console.log(testBody);
    // let stage = new Iroh.Stage(testBody);

    let listener = stage.addListener(Iroh.VAR);
    listener.on("after", (e) => {
      console.log(e.name, "=>", e.value);
    });

    // eval is an unsafe function - okay here since we're using our own prewritten code
    // But should still be reevaluated before final release
    eval(stage.script);
  };

export class Home extends Component {
  static displayName = Home.name;

  render() {
   return (
      <div className='mt-5' style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '62px', textAlign: 'center' }}>
          <h1 className='display-1 text-center'> PassPass </h1>
          <h2 className='display-3 d-flex align-items-center justify-content-center'>Secure, convinient and easy to use!</h2>
        </div>
        <a className='mt-5 btn btn-secondary btn-lg' href="/about">Learn more</a>
        
        
        {/* <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p> */}
	{officialTest()}
      </div>
   )
}

}
