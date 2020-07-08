const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialize url
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.toJSON());

//Host (root domain)
console.log(myUrl.host);

//hostname
console.log(myUrl.hostname);
//hostname doesn't give port
 
//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);
//params object
console.log(myUrl.searchParams);
//add params
console.log(myUrl.searchParams.append('abc','126'));
console.log(myUrl.searchParams);
//loop through params
myUrl.searchParams.forEach((value,name)=>{
    console.log(`name ${name}
    value ${value}`);
});




