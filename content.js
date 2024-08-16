if (document.title === "Swoosh Mailbox Viewer") {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL('styles.css');
    document.head.appendChild(link);

    console.log("Styles injected 💅")
  }
  