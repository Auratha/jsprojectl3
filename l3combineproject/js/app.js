// Start Login Modal Section
const password = document.getElementById('password');
const lock = document.getElementById('lock');
const loginbtn = document.getElementById('loginbtn');
const loginmodalcontainer = document.querySelector('.login-modal-container');

lock.addEventListener('click',()=>{
    if(lock.classList.contains('fa-lock')){
        lock.classList.remove('fa-lock');
        lock.classList.add('fa-lock-open');
        password.type = "text";
    }else{
        lock.classList.add('fa-lock');
        lock.classList.remove('fa-lock-open');
        password.type = "password";
    }
});

loginbtn.addEventListener('click',(e)=>{
    cover.style.display = 'none';
    loginmodalcontainer.style.display = 'none';
    navbar.style.filter = `blur(0px)`;
    footerbox.style.filter = `blur(0px)`;
    pricingsection.style.display = 'block';

    e.preventDefault();
});

// End Login Modal Section

// Start Navbar,Cover,Footer Blur Section
const navbar = document.getElementById('navbar');
const cover = document.getElementById('cover');
const footerbox = document.querySelector('.footer-box');

password.addEventListener('keyup',()=>{
    let inputwordcount = password.value.length;

    navbar.style.filter = `blur(${20-(inputwordcount*2)}px)`;
    cover.style.filter = `blur(${20-(inputwordcount*2)}px)`;
    footerbox.style.filter = `blur(${20-(inputwordcount*2)}px)`;
});

// End Navbar,Cover,Footer Blur Section

//Start Pricing Section
const pricingsection = document.querySelector('.pricing-section');
const toggle = document.getElementById('toggle');
const label = document.getElementById('label');
const images = document.querySelectorAll('.img');
const price1 = document.querySelector('.price1'),
    price2 = document.querySelector('.price2'),
    price3 = document.querySelector('.price3');

// start toggle
label.addEventListener('click',()=>{
    if(toggle.checked){
        let imglocation = ["img/smartwatch1.jpg","img/smartwatch2.jpg","img/smartwatch3.jpg"]
        images.forEach((image,idx)=>{
            image.src = imglocation[idx];
        });
        [price1.textContent,price2.textContent,price3.textContent] = [199,299,399];
    }else{
        let imglocation = ["img/smartwatch4.jpg","img/smartwatch5.jpg","img/smartwatch6.jpeg"]
        images.forEach((image,idx)=>{
            image.src = imglocation[idx];
        });
        [price1.textContent,price2.textContent,price3.textContent] = [100,200,300];
    }
});
// end toggle

//End Pricing Section

// Start Toast Notification
const toast = document.querySelector('.toast');
//from pricing section
const addbtns = document.querySelectorAll('.add');
const removebtns = document.querySelectorAll('.remove');

addbtns.forEach(addbtn=>{
    addbtn.addEventListener('click',()=>{
        createtoastdivforsecond("green","added");
    });
});

removebtns.forEach(removebtn => {
    removebtn.addEventListener('click',()=>{
        createtoastdivforsecond("red","removed");
    });
});

function createtoastdivforsecond(color,doing){
    let toastdiv = document.createElement('div');
    let p = document.createElement('p');
    toastdiv.className = `toast-div ${color}`;
    p.textContent = `Item ${doing}`;

    toastdiv.appendChild(p);
    toast.appendChild(toastdiv);

    setTimeout(()=>{
        toastdiv.remove();
    },3000);
}

// End Toast Notification

//Start Menu Section
const menucontainer = document.querySelector('.menu-container');
const leftdiv = document.querySelector('.left-div'),
      middlediv = document.querySelector('.middle-div'),
      rightdiv = document.querySelector('.right-div');
// form navbar
const menubtns = document.querySelectorAll('#menu-btn');

    menubtns.forEach(menubtn=>{
        menubtn.addEventListener('click',()=>{
            if(menucontainer.style.display === 'flex'){
                setTimeout(()=>{
                    menucontainer.style.display = 'none';
                },1000);
            }else{
                menucontainer.style.display = 'flex';
            }

            setTimeout(()=>{
                menucontainer.classList.toggle('active');
                leftdiv.classList.toggle('active');
                middlediv.classList.toggle('active');
                rightdiv.classList.toggle('active');
            },10);

        });
    });



//End Menu Section