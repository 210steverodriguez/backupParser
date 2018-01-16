var SMB2 = require('smb2');
var Details = require('./details');

var smb2Client = new SMB2({
  share: Details.share,
  domain: Details.domain,
  username: Details.username,
  password: Details.password
});

// smb2Client.readdir('Logs\\u\\', function(err, files){
//   if(err) throw err;
//   console.log(files)
// });

smb2Client.readFile('logs\\U\\replication.txt', {encoding: 'utf8'}, function(err,data){
  if(err) throw err;
  data = data.split('\r\n');
  console.log(data);

});
//
// smb2Client.exists('logs\\replication.txt', function (err, exists) {
//   if (err) throw err;
//   console.log(exists ? "it's there" : "it's not there!");
// });