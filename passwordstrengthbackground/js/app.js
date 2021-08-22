//UI

const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');

// Event Listener
password.addEventListener('input',(e) => {
    // console.log(e.target);
    
    const input = e.target.value;
    const inlength = input.length;
    // console.log(inlength);
    const blurvalue = 20-(inlength*2);

    background.style.filter = `blur(${blurvalue}px)`;
});

eyeicon.addEventListener('click', () => {
    if(eyeicon.classList.contains('fa-eye')){
        password.setAttribute("type","text");
        // console.log("show password");

        //Method 1
        // eyeicon.classList.remove('fas-eye');
        // eyeicon.classList.add('fas-eye-slash');

        //Method 2
        eyeicon.classList.replace('fa-eye',"fa-eye-slash");

        
    }
    else{
        // console.log('hide password');

        password.setAttribute("type","password");
        eyeicon.classList.replace('fa-eye-slash','fa-eye');
      
    }
})