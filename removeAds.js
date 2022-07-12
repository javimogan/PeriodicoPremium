/*setTimeout(() => {
    removeAds();
}, 250)*/
new MutationObserver((mutationsList, observer) => {
  for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        removeAds();
      }
  }
}).observe(document.body, { childList: true, subtree: true });

function removeAds(){
  hostname = window.location.hostname.split('.')
  let dominio,subDominio;
  if(hostname.length > 1){
    dominio = hostname[hostname.length - 2];
    if(hostname.length > 2){
      subDominio = hostname[hostname.length - 3];
    }
  }
  switch(dominio) {
    case 'elpais':
      rmElPais();
      break;
    case 'sport':
    case 'epe':
    case 'eldia':
    case 'informacion':
    case 'diariocordoba':
    case 'laprovincia':
    case 'mallorcazeitung':
    case 'laopinioncoruna':
    case 'laopiniondemalaga':
    case 'elperiodicomediterraneo':
    case 'elperiodicodearagon':
    case 'elperiodicoextremadura':
    case 'elperiodico':
      rmElPeriodico();
      break;
  }
}

function rmElPais() {
  rmElement("ctn_freemium_article");
  changeClass("a_b_wall", "a_b_wall")
}
function rmElPeriodico() {
  rmElement("paywall");
  changeClass("article-body--truncated","")
  changeClass("ep-detail-body","ep-detail-body closedseo firstP")
 
}

function changeClass(searchClass, newClass) {
  const elements = document.getElementsByClassName(searchClass);
  while (elements.length) {
    elements[0].className = newClass;
  }
}
function rmElement(elementId) {
  const banner = document.getElementById(elementId);
  if(banner !== null){
    banner.remove();
  }
}