var myObjectd={
    primary:"blue",
    secondary:"red ",
    tertiary:"white"
}


for (var i in myObjectd) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log(i +'->'+myObjectd[i])
}
var details=['name','lname','age','add']
var number=['ashbin','thapa',21,'butwal']
for (var k in number,details) {
 
    // if (Object.hasOwnProperty.call(obvar k)) {
    //     const element = ovar k];
        
    //}
       console.log(details[k]+'->'+number[k])
}