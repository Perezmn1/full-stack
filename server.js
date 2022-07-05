const express       = require('express'),
      Employee      = require('./dbFiles/employee'),
      dbOperation   = require('./dbFiles/dbOperation'),
    	cors          = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let sessions; 
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async(req,res) => {
  console.log(req);
  const result = await dbOperation.getEmployees(req.body.name);
	res.send(result.recordset);
})

app.post('/quit', async(req,res) => {
  await dbOperation.createEmployee(req.body);
  const result = await dbOperation.getEmployees(req.body.Firstname);
	console.log('Called quit');	
  res.send(result.recordset);
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));