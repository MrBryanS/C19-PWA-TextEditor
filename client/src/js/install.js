const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// see code from module 28
window.addEventListener('beforeinstallprompt', (event) => {
     window.deferredPrompt = event;
     butInstall.classList.toggle("hidden", false);
});

// see code from module 28t
butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// see code from module 28
window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;
});
