const fs = require("fs");

// Path to your JSON file
const jsonFilePath = "./JSON/config.json";
let StartServer = true;


// Read the JSON file
fs.readFile(jsonFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the JSON file:", err);
        return;
    }

    try {
        const jsonObject = JSON.parse(data);

        console.log("JSON object:", jsonObject.cakeSections);


        jsonObject.cakeSections.forEach((e) => {

            const directoriesToCreate = jsonObject[e].cakes.map(
                (e2) => `images/Cakes/${e2.image}`
            );

            console.log(directoriesToCreate);

            directoriesToCreate.forEach((directoryName) => {
                // Check if the directory exists
                if (!fs.existsSync(directoryName)) {
                    // If it doesn't exist, create the directory
                    fs.mkdir(directoryName, (err) => {
                        if (err) {
                            console.error(
                                `Error creating the "${directoryName}" directory:`,
                                err
                            );
                        } else {
                            console.log(`The "${directoryName}" directory has been created.`);
                        }
                    });
                } else {
                    console.log(`The "${directoryName}" directory already exists.`);
                }
            });
        });


        if (StartServer){
            const server = require('./server.js'); // Replace with the correct path to server.js
        
            // Now, you can access the exported values or functions from server.js
            // server.someFunction();
        }
        

    } catch (parseError) {
        console.error("Error parsing the JSON:", parseError);
    }
});


