'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
var superM;


/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/

mongoose.connect(config.db.uri);
//extra=> catch(error => handleError(error));
//db.uri are the variables created in the file config
//you now need to create a code that tranfer info into the moongoose that is connect to your moongose

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */

fs.readFile('listings.json', 'utf8', function(err, data) {
  console.log('read file happen');
  console.log('\n');


  //Check for errors
 if(err) throw err;
 //console.log('there has been no error');


  //parse allow me turn the superM into array
 superM = JSON.parse(data);


superM.entries.forEach(element => 
  {
    console.log(element);
    console.log('\n');

    if(element.name == null || element.code == null)
    {
       throw err;
    }
    else
    {
    var utraM = new Listing(element);
    utraM.save(function(err)
    {
      if(err)
      {
        //throw console.error();
        throw err;
      }
      else
      {
        console.log('Save happen');
      }
    })
  }
  }
 );

});

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
