const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const fs = require('fs');
const path = require('path');

app.use(cors());

// Serve the main directory and its subdirectories
app.use('/images/Cakes', express.static('D:/ProjectsWebSites/paulina WEBSite/Code/images/Cakes'));

// Define a custom route for listing directory contents
app.get('/images/Cakes', (req, res) => {
  const mainDirectoryPath = 'D:/ProjectsWebSites/paulina WEBSite/Code/images/Cakes';

  fs.readdir(mainDirectoryPath, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Error listing main directory contents' });
    } else {
      const fileDetails = files.map(file => {
        const filePath = path.join(mainDirectoryPath, file);
        const stats = fs.statSync(filePath);
        return {
          name: file,
          size: stats.size,
        };
      });

      res.json(fileDetails);
    }
  });
});

// Define a route for subdirectories
app.get('/images/Cakes/*', (req, res) => {
  const subDirectoryPath = path.join('D:/ProjectsWebSites/paulina WEBSite/Code/images/Cakes', req.params[0]);

  fs.readdir(subDirectoryPath, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Error listing subdirectory contents' });
    } else {
      const fileDetails = files.map(file => {
        const filePath = path.join(subDirectoryPath, file);
        const stats = fs.statSync(filePath);
        return {
          name: file,
          size: stats.size,
        };
      });

      res.json(fileDetails);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
