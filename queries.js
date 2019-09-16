'use strict';
/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');




/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html



var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

  //console.log('findLibraryWest');

  Listing.findOne({name: 'Library West'}, function(err, Listing)
  {
    if(err)
    {
      console.log('findOne does not happen');
      throw err;
    }
    else
    {
      console.log('findOne happen');
      console.log(Listing);
    }
  });

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

  //console.log('removeCable start');
  
  Listing.findOneAndRemove({code: 'CABL'}, function(err, Listing)
  {
      if(err)
      {
        console.log('remove does not happen');
        throw err;
      }
      else
      {
          console.log('remove happen');
      }
  });

};


var updatePhelpsMemorial = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

  console.log('update thing');
  var updateB = {address: '1953 Museum Rd, Gainesville, FL 32603'};

  Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, updateB, {new: true}, function(err, listing)
  {
    if(err) 
    {throw err;}
    else
    {
    console.log('Update happen');
    console.log(listing);
    return listing;
    }
  });

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

  //console.log('RetrieveAllListing');

  Listing.find(function(err, Listing)
  {
    if(err)
    {
      console.log('find does not happen');
      throw err;
    }
    else
    {
      console.log('Retrieve all happen');
      console.log(Listing);
    }
  });


};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();

