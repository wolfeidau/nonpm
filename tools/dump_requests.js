var httpProxy = require('http-proxy');

//
// Create a proxy server
//
httpProxy.createServer(function (req, res, proxy) {

  // show a bit of what is going down
  console.log('req');
  console.log('\turl:', req.url);
  console.log('\theaders:', req.headers);

  var buffer = httpProxy.buffer(req);

  req.on('data', function (data, encoding) {
    console.log('res');
    console.log('\tdata', data);
  });
  req.on('end', function (data, encoding) {
    console.log('res');
    console.log('\tdata', data);
  });

  // rewrite the host header to satisfy the other end
  req.headers['host'] = 'registry.npmjs.org';

  proxy.proxyRequest(req, res, {
    host: 'registry.npmjs.org',
    port: 80
  });

//  console.log('res');
//  console.log('\t', res);


/*
  res.on('finish', function (err, data) {
    console.log('res');
    console.log('\t', data);
  })
*/


}).listen(8000);