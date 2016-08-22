import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  
  let url = Meteor.absoluteUrl()+'BLZService.xml';
  // let url = 'http://www.thomas-bayer.com/axis2/services/BLZService?wsdl';

  let args = {blz: '37069521'};
  console.log("server started", url);

  try {
    var client = Soap.createClient(url);
    console.log("client", 'ok');

    var result = client.getBank(args);

    console.log(result);
  }
  catch (err) {
    if(err.error === 'soap-creation') {
      console.log('SOAP Client creation failed', err);
    }
    else if (err.error === 'soap-method') {
      console.log('SOAP Method call failed', err);
    }
  }

  console.log("SOAP call done", url);
});
