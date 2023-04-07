// var mModal=document.getElementById('mymodal');
// var btn=document.getElementById("btnmodal");
// var span=document.getElementsByClassName('modal')[0];

// document.querySelector('login').addEventListener('click', function(e)
// {
//     span.style.display="flex";
// });

const btn = document.querySelector('.a1');
const mdl = document.querySelector('.modal');
const email = document.getElementById("maiL");
const passWord = document.getElementById("pass");
const mdlForm = document.getElementById("formMDL");
const Send = document.getElementById("sendFrm");
const errPass=document.getElementById('error1');
const errMail=document.getElementById('error2');


email.addEventListener("blur", (event)=> {
    if(email.validity.typeMismatch){
        errMail.innerText="incorrecr e-mail";
        email.setCustomValidity("enter your e-mail address");
        email.style.borderColor="#ff5545";
    } else{
        errMail.innerText="";
        email.setCustomValidity(" ");
        email.style.borderColor=("#000");

    }
});

passWord.addEventListener("blur", (event)=>{
    if(passWord.validity.tooShort){
        errPass.innerText="password is too short";
        passWord.setCustomValidity("enter your password");
        passWord.style.borderColor="#ff5545";
    } else{
        errPass.innerText="";
        passWord.setCustomValidity(" ");
        passWord.style.borderColor=("#000");
    }
});

mdl.style.cssText= `
    display: flex;
    visibility: hiden;
    opacity ; 0;
    transition: opacity 400ms ease-in-out;
`;




const openMDL=() => {
    mdl.style.visibility = 'visible';
    mdl.style.opacity=1;
};



const closeMDL = event =>{
    const target = event.target;

    if(target === mdl){
        mdl.style.opacity = 0;

        setTimeout(()=>{
            mdl.style.visibility = 'hidden';
        }, 400)
    }
};

// const errorsMDL=event=>{
//     const target=event.target;
//     if(target===h444){
//         h444.style.visibility = 'visible';
//         h444.style.opacity=1;
//     }
// }



btn.addEventListener('click', openMDL);
mdl.addEventListener('click', closeMDL);




// email.addEventListener("focus", (event) => {
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("It is not e-mail address");
//     } else {
//         email.setCustomValidity("");
//     }
// });

// passWord.addEventListener("input", (event) => {
//     if (passWord.validity.lenth<6) {
//         passWord.setCustomValidity("It is too short!");
//     } if (passWord.lenth>20){
//         passWord.setCustomValidity("It is too long!")
//     }else {
//         passWord.setCustomValidity("");
//     }
// });
// function serializeForm(formNode) {
//     return new FormData(formNode)
// };
// // function serializeForm(formNode) {

//     console.log(formNode.elements);
//     const { elements } = formNode;

//     Array.from(elements).forEach((element) => {
//         const { name, value } = element;
//         return({ name, value });
//     });
// };


function FrmSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault();
    console.log('Отправка!');

    // const passw=mdlForm.querySelector('[name="password"]'),
    //     imail=mdlForm.querySelector('[name="email"]');

    // const values={
    //     passwor: passw.value,
    //     imal: imail.value
    // };

    let formData= new FormData(mdlForm);
    const values= Object.fromEntries(formData.entries());

    for(const i in values){
        console.log(values[i]);
    }
    
};


mdlForm.addEventListener('submit', FrmSubmit);
// mdlForm.addEventListener('submit', serializeForm);

// document.querySelector('#sendFrm').onclick=()=>{
//     console.log(document.querySelector('#pass').value);
//     console.log(document.querySelector('#mail').value);
// };


// passWord.addEventListener("input",(event)=>{
//     if(passWord.validity.){

//     }
// });

//  mdlForm.addEventListener('submit', function(event) {
//     event.preventDefault()


// })

//validity focus



//show hide paaaaaaaaaassssssssssswoord

function showPassword(){
    const bttnn=document.querySelector("#check");
    const input=document.querySelector('#pass');


    bttnn.addEventListener('click', ()=>{
        if(input.getAttribute('type')==='password'){
            input.setAttribute('type', 'text');
        } else{
            input.setAttribute('type', 'password');
        }
    });

};

// showPassword();

function showpass(){
    const bttnn=document.querySelector("#check");
    const input=document.querySelector('#pass');
    bttnn.addEventListener('pointerdown',()=>{
        if(input.getAttribute('type')==='password'){
            input.setAttribute('type', 'text');
        } //else{
        //     input.setAttribute('type', 'password');
        // }
    });
    bttnn.addEventListener('pointerup',()=>{
        if(input.getAttribute('type')==='text'){
            input.setAttribute('type', 'password');
        } //else{
        //     input.setAttribute('type', 'password');
        // }
    });
};

showpass();

// document.querySelectorAll('input').forEach (el =>{
//     el.addEventListener('blur', ()=>{
//         if(el.value.length===0){
//             showError(el, "enter something");
//         }

//     })
// });

// function showError(field, errtext){

// }

// const Mail=document.querySelector("input.email");
// const MdlPass=document.querySelector("input.password");

