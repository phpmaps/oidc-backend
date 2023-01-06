const updateQr = (text) => {
    var qrcode = new QRCode({ content: text, join: true });
    var svg = qrcode.svg();
    document.getElementById("container").innerHTML = svg;

}

document.getElementById('id-selfie').addEventListener(
    'change',
    (evt, val) => {
        console.log(evt)
        console.log(evt.target.id)
        updateQr(evt.target.id)
    },
    false
);


document.getElementById('selfie').addEventListener(
    'change',
    (evt, val) => {
        console.log(evt)
        console.log(evt.target.id)
        updateQr(evt.target.id)
    },
    false
);



document.getElementById('face-login').addEventListener(
    'change',
    (evt, val) => {
        console.log(evt)
        console.log(evt.target.id)
        updateQr(evt.target.id)
    },
    false
);

document.getElementById('container').addEventListener(
    'click',
    (evt) => {
        alert('clicked')
        const uuid = document.getElementById('uuid').value;
        postwith( `/interaction/${uuid}/login`, {
            login:'user' ,
            password:'password'
        });
        //doInteractionLogin();
    },
    false
)

document.getElementById('timer').innerHTML =
    05 + ":" + 00;
startTimer();


function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
        return
    }

    document.getElementById('timer').innerHTML =
        m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000);

}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}


function doInteractionLogin() {
    
    const url = `http://localhost:3000/interaction/${uuid}/login`;
    console.log(url);
    const data = { login: 'example', password: 'password' };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function postwith (to,p) {
    var myForm = document.createElement("form");
    myForm.method="post" ;
    myForm.action = to ;
    for (var k in p) {
      var myInput = document.createElement("input") ;
      myInput.setAttribute("name", k) ;
      myInput.setAttribute("value", p[k]);
      myForm.appendChild(myInput) ;
    }
    document.body.appendChild(myForm) ;
    myForm.submit() ;
    document.body.removeChild(myForm) ;
  }
   






updateQr('id-selfie')

