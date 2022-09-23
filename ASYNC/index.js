//PROMISE

function httpGetAsync(theUrl,resolve) {
    var xmlHttp = new XMLHttpRequest ();
    xmlHttp.onreadystatechange = function () {
        if ( xmlHttp.readyState === 4 && xmlHttp.status === 200) resolve(xmlHttp);
    };
    xmlHttp.open("GET" , theUrl, true);
    xmlHttp.send(null);
}

const currrentPromise = new Promise ((resolve, reject) => {
    httpGetAsync('http://picsum.photos/200/300' , resolve);
});

const promise2 = new Promise ((resolve, reject) => {
    httpGetAsync('http://picsum.photos/200/300' , resolve);
});


currrentPromise.then((data)  => {
    console.log(data);
    document.getElementById('img_1').setAttribute('src', data.responseURL);
    return promise2;
})
.then(data => {
    document.getElementById('img_2').setAttribute('src', data.responseURL);
})
.catch((err) => {
    console.log(err);
});

























// function test () {
//    setTimeout(() => console.log('1'), 0);
//    console.log('2');
//    console.log('3');
// }
// test ();
 
// function httpGetAsync(theUrl,callback) {
//     var xmlHttp = new XMLHttpRequest ();
//     xmlHttp.onreadystatechange = function () {
//         if ( xmlHttp.readyState === 4 && xmlHttp.status === 200) callback(xmlHttp);
//     };
//     xmlHttp.open("GET" , theUrl, true);
//     xmlHttp.send(null);
// }

// httpGetAsync('http://picsum.photos/200/300', (data) => {
//     console.log(data);
//     document.getElementById('img_1').setAttribute('src', data.responseURL);

//     httpGetAsync('http://picsum.photos/200/300', (data) => {
//         document.getElementById('img_2').setAttribute('src', data.responseURL);

        
//     httpGetAsync('http://picsum.photos/200/300', (data) => {
//         document.getElementById('img_3').setAttribute('src', data.responseURL);
//         })
//     })
// });