import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 5000;
// app.use(cors)

app.get("/", (req:any, res: any) => {
  res.send("server is up and running")
})
app.get('/api/data', (req:any, res: any) => {
  res.setHeader('Cache-Control', 'no-store'); // Disable caching
   const filePath = path.join(__dirname, 'data', 'data.json');

   //Read the JSON file
   fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (err){
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    
    // Pagination
    let paginatedData = jsonData;
    let perPage = parseInt(req.query.perPage) || 12;
    if(req.query.page == 'all'){

    }else {
      const page = parseInt(req.query.page) || 1;
      const startIndex = (page -1)*perPage;
      const endIndex = startIndex + perPage;
      paginatedData = jsonData.slice(startIndex, endIndex);
    }


    // Total records and page count
    const totalRecords = jsonData.length;
    const totalPages = Math.ceil(totalRecords / perPage);
    
    res.json({
      totalPages,
      totalRecords,
      data:paginatedData
    });
   })
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
