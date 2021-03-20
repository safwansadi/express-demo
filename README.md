# express-demo
the basic of express and rest API

One of the core concept of express is middleware function.middleware function is a function that takes a request object and either respond to a client 
or passes request to another middleware function.In express every route handler function is technically a middleware function
 
app.get("/api/courses", (req, res) => { //take request and responses to the client
  res.send(courses);
});

app.use(express.json()) //this method returns a middleware function the job of this middleware function is to read the request 
                        and if there is a json object in the body of the request it will parse the body of the request into ajson object
                        and than it will set req.body property.
___Request Processing Pipeline_____
this pipeline hjas two middleware function 
1 -> purses the request body into a jason object -> (route())

Express application is nothing but a bunch of middleware function
