const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res)=>{
   const url = req.url;
   if(url === '/hello'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!'
    }));
    return res.end();
   }
   if(url === '/'){
      res.write('<html>');
      res.write('<head> <title> Hello TutorialsPoint </title> </head>');
      res.write(' <body> <form action="/username" method="POST"> <input type="text" name="username"/>       <button type="submit">Submit</button> </body>');
      res.write('</html>');
      return res.end();
   }

    if(url === '/file'){
      const files = fs.readFileSync("new.html");
      res.statusCode = 200;
      // give correct input for html
      res.setHeader("Content-Type", "text/html");
      res.end(files);
    }
   res.write('<html>');
   res.write('<head> <title> Hello TutorialsPoint </title> </head>');
   res.write(' <body> Hello </body>');
   res.write('</html>');
   res.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  })