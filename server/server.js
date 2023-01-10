 const express=require('express');
 const app=express()
 const port = process.env.PORT || 5000;



 

// Use Routes
app.use("/api/auth", require('./routes/auth'));
app.use("/api/payment", require('./routes/payment'));
app.use("/api/product", require('./routes/product'));
app.use("/api/order", require('./routes/order'));



 //listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
