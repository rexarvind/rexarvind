const _=x=>document.getElementById(x)


const typed=new Typed('#typed', {
  strings: ['We Design', 'We Develop', 'We Decorate'],
  backSpeed:50,
  typeSpeed:60,
  loop:true}); 


function setServices(){
const servicesBox=_('servicesBox')

const servicesCards=[
{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#198754" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"/></svg>',
title:'Heating',
text:'All your heating needs including furnace repairs and installations so you can keep warm this winter.'},
{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#198754" viewBox="0 0 24 24"><path d="M23.464 12.698l-5.45 1.522-3.966-2.22 3.966-2.219 5.449 1.521.537-1.927-3.523-.982 3.125-1.762-.983-1.742-3.125 1.761.983-3.523-1.926-.537-1.52 5.449-4.031 2.256v-3.881l4-4-1.414-1.414-2.586 2.586v-3.586h-2v3.586l-2.586-2.586-1.414 1.414 4 4v3.881l-4.031-2.256-1.52-5.449-1.926.537.982 3.523-3.124-1.761-.982 1.742 3.124 1.762-3.523.982.537 1.927 5.449-1.521 3.966 2.219-3.966 2.22-5.45-1.522-.536 1.927 3.523.982-3.125 1.763.983 1.741 3.125-1.761-.984 3.523 1.927.536 1.521-5.448 4.03-2.255v3.88l-4 4 1.414 1.414 2.586-2.586v3.586h2v-3.586l2.586 2.586 1.414-1.414-4-4v-3.88l4.03 2.255 1.521 5.448 1.927-.536-.984-3.523 3.125 1.761.983-1.741-3.125-1.763 3.523-.982z"/></svg>',
title:'Cooling',
text:'Stay cool this summer season with a new air conditioning unit for your home.'},
{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#198754" viewBox="0 0 24 24"><path d="M11 6c-3.653 5.398-6 8.774-6 12.056 0 3.284 2.684 5.944 6 5.944s6-2.66 6-5.944c0-3.282-2.347-6.658-6-12.056zm-.021 3.839c.352.544.771 1.491.771 2.49 0 2.931-3 3.412-3 1.627 0-1.224 1.491-3.031 2.229-4.117zm-2.399-3.829c-.613-1.639-1.876-3.492-3.58-6.01-2.436 3.599-4 5.85-4 8.037 0 2.129 1.695 3.851 3.822 3.945.949-1.775 2.235-3.719 3.758-5.972zm-5.08-.705c0-.816.994-2.021 1.486-2.745.235.362.514.994.514 1.66 0 1.954-2 2.274-2 1.085zm15.5-2.305c-1.706 2.521-2.97 4.376-3.583 6.016 1.415 2.202 2.466 4.102 3.054 5.932 2.524.331 4.529-1.609 4.529-3.911 0-2.187-1.564-4.438-4-8.037zm-1.5 5.305c0-.816.994-2.021 1.486-2.745.235.362.514.994.514 1.66 0 1.954-2 2.274-2 1.085z"/></svg>',
title:'Water Heating',
text:'Enjoy nice warm winter showers with high-efficiency water heater systems for your home.'},
{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#198754" viewBox="0 0 24 24"><path d="M16 10c3.469 0 2 4 2 4s4-1.594 4 2v6h-10v-12h4zm.827-2h-6.827v16h14v-8.842c0-2.392-4.011-7.158-7.173-7.158zm-8.827 12h-6v-16h4l2.102 2h3.898l2-2h4v2.145c.656.143 1.327.391 2 .754v-4.899h-3c-1.229 0-2.18-1.084-3-2h-8c-.82.916-1.771 2-3 2h-3v20h8v-2zm2-18c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm4 18h6v-1h-6v1zm0-2h6v-1h-6v1zm0-2h6v-1h-6v1z"/></svg>',
title:'Lorem ipsum',
text:'With over a decade of experience, Energy Saver Tech employs a team of highly skilled consultants, concierges, customer.'},
{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#198754" viewBox="0 0 24 24"><path d="M13 18v-4h-7v-4h7v-4l6 6-6 6zm-1-16c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>',
title:'More',
text:'Maintenance plants, thermostats, and water filtration systems to keep your water clean.'}
]

let servicesData='';
servicesCards.forEach(card=>{
servicesData+=`<div class="col-sm-6 col-md-4">
<div class="card h-100 shadow border-0 lift-up">
<a href="#!">
<div class="card-body text-center">
${card.icon}
<h3 class="mt-3 text-success">${card.title}</h3>
<p class="text-secondary">${card.text}</p>
</div>
</a>
</div>
</div>`
})

servicesBox.innerHTML=servicesData
}
setServices()










function setFeatures(){
const featuresBox=_('featuresBox')
const cards=[
{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24"><path d="M11.333 8.701l-7.837 4.262s-1.339 5.254-3.497 8.604l2.419 2.433c3.314-2.133 8.604-3.511 8.604-3.511l4.263-7.837-3.952-3.951zm-1.664 10.091c-1.241.365-3.64 1.131-5.915 2.207l1.806-1.806c.348-.349.8-.569 1.288-.63.647-.081 1.113-.63 1.113-1.263 0-.703-.569-1.275-1.275-1.275-.637 0-1.183.471-1.263 1.113-.06.487-.281.94-.629 1.288l-1.779 1.779c1.072-2.274 1.825-4.652 2.184-5.891l5.778-3.143 1.838 1.837-3.146 5.784zm2.345-12.252s2.148-3.969 3.475-6.54l8.511 8.511c-2.582 1.321-6.556 3.459-6.556 3.459l-5.43-5.43z"/></svg>',
text:'Digital Graphic Design',
img:'./img/card1.jpg'},
{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24"><path d="M15 4.902l-.939-4.902h1.943l2.994 5.002v1.098c0 1.067-.932 1.9-1.998 1.9s-2-.933-2-2v-1.098zm-3 3.098c1.066 0 2-.936 2-2.002v-1.098l-1.047-4.9h-1.906l-1.047 4.902v1.098c0 1.067.934 2 2 2zm8-2c0 1.067.934 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971h-2.014l2.887 4.902v1.098zm-7 13.5l.025-.5h-10.025v-7h18v1.181c.721.171 1.395.459 2 .848v-4.029h-22v14h13.816c-1.123-1.168-1.816-2.752-1.816-4.5zm-9-13.432v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.934 1.931 2 1.931s2-.865 2-1.932zm1 0c0 1.067.934 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097zm19 13.432c0 2.485-2.016 4.5-4.5 4.5-2.486 0-4.5-2.015-4.5-4.5s2.014-4.5 4.5-4.5c2.484 0 4.5 2.015 4.5 4.5zm-2.156-.882l-.697-.696-2.115 2.169-.992-.94-.695.697 1.688 1.637 2.811-2.867z"/></svg>',
text:'Sign Manufacturing & Installation',
img:'./img/card2.webp'},
{icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24"><path d="M7 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm9 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm4-1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-17.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.318 3.168c-.761-1.413-1.699-3.17-2.684-4.812-.786-1.312-1.37-1.938-2.751-2.187-1.395-.25-2.681-.347-4.585-.347s-3.19.097-4.585.347c-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.412-.98 3.806 0 1.318.42 2.415 1 3.817v2.209c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-2.209c.58-1.403 1-2.499 1-3.817 0-1.394-.293-2.533-.98-3.806zm-15.641-3.784c.67-1.117.852-1.149 1.39-1.246 1.268-.227 2.455-.316 4.231-.316s2.963.088 4.231.316c.538.097.72.129 1.39 1.246.408.681.81 1.388 1.195 2.081-1.456.22-4.02.535-6.816.535-3.048 0-5.517-.336-6.805-.555.382-.686.779-1.386 1.184-2.061zm11.595 10.616h-11.948c-1.671 0-3.026-1.354-3.026-3.026 0-1.641.506-2.421 1.184-3.678 1.041.205 3.967.704 7.816.704 3.481 0 6.561-.455 7.834-.672.664 1.231 1.166 2.01 1.166 3.646 0 1.672-1.355 3.026-3.026 3.026zm5.526-10c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202z"/></svg>',
text: 'Fleet Brand Management',
img: './img/card3.webp'},
{icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M16 17h-8v-1h8v1zm8-12v13h-4.048c-.404 2.423-3.486 6-6.434 6h-9.518v-6h-4v-13h4v-5h16v5h4zm-18 0h12v-3h-12v3zm12 9h-12v8h6.691c3.469 0 2-3.352 2-3.352s3.309 1.594 3.309-2v-2.648zm4-7h-20v9h2v-4h16v4h2v-9zm-9 11h-5v1h5v-1zm7.5-10c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z"/></svg>',
text: 'Small and Large Format Printing',
img: './img/card4.jpg'}
]

let data='';
cards.forEach(card=>{
data+=`<div class="col-sm-6 col-md-5">
<div class="card position-relative border-0 shadow">
<img src="${card.img}" class="img-fluid rounded">
<span style="opacity:0.4" class="position-absolute w-100 h-100 bg-dark rounded"></span>
<div class="position-absolute top-50 left-50 translate-middle w-100 text-white px-3">
${card.icon}
<h5 class="mt-2">${card.text}<br><p class="h6">Learn More<p></h5>
</div></div></div>`
})

featuresBox.innerHTML=data
}
setFeatures()





function setReviews(){
const reviewBox=_('reviewBox')
const reviewCards=[
{text:'At Energy Saver Tech, we know how hard it could be to buy or replace your HVAC equipment so we proudly stand.',
stars:'&#9733; &#9733; &#9733; &#9733; &#9734;',
name:'Neha Chahal',
role:'Business Name',
img:'https://www.flaticon.com/svg/static/icons/svg/2922/2922588.svg'},
{text:'Amazing teamwork with highly professional staff. Happy to deal with this company.',
stars:'&#9733; &#9733; &#9733; &#9734; &#9734;',
name:'Brad Travers',
role:'Travers Media Co.',
img:'https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg'},
{text:'Service was excellent, efficient work done in very clean manner. Servicemen were very pleasant. Work was completed in a very reasonable time. Thank you fellows!',
stars:'&#9733; &#9733; &#9733; &#9733; &#9733;',
name:'Even Yu',
role:'Vue Developer',
img:'https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg'}
]

let data='';
reviewCards.forEach(card=>{
data+=`<div class="col-sm-6 col-md-4">
<div class="card h-100 shadow lift-up">
<div class="card-body">
<p>${card.text}</p>
<span class="h2 text-success">${card.stars}</span>
</div>
<div class="card-footer d-flex justify-content-between align-items-center">
<span>${card.name}<br/><small class="text-black-50">${card.role}</small>
</span>
<img src="${card.img}" width="50" height="50" class="img-fluid border rounded shadow-sm">
</div>
</div>
</div>`
})
reviewBox.innerHTML=data
}
setReviews()




/* use custom alert by alertBS(x) */
const alertBSModal=_("alertBSModal")
const alertBSBody=_("alertBSBody")
const alertBS=text=>{
  const aBS=new bootstrap.Modal(alertBSModal)
  alertBSBody.innerHTML=text
  /* close any already opened modal */
  aBS.hide()
  aBS.toggle()
}


const toTop=_('toTop')
window.addEventListener("scroll", ()=>{
if (window.pageYOffset < 100) toTop.classList.add("invisible")
else toTop.classList.remove("invisible") }) 




// Update Page Views
fetch('https://api.countapi.xyz/update/rexarvind/home/?amount=1').then(res=>res.json())
.then(res=>{_('pageViews').innerText=res.value})
.catch(err=>{_('pageViews').innerText=err.message})