chrome.tabs.query(
  {active:true},
  tabs =>{
    const tab=tabs[0];
    const url = new URL(tab.url)
    document.getElementById("favicon").setAttribute("src",tab.favIconUrl)
    document.getElementById("url").innerText = url.hostname
  },
)
let premium = document.getElementById("rm");
  rm.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['removeAds.js']
    });
  });

