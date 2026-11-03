// lanuch browser
function launchBrowser(browser){
    switch (browser) {
        case 'chrome':
            console.log("launch chrome")
            break;
        case 'firefox':
            console.log("launch firefox")
            break;
        case 'edge':
            console.log("launch edge")
            break;
        case 'safari':
            console.log("launch safari")
            break;
        default:
            console.log("unsupported browser",browser)
            break;
    }
}

launchBrowser('opera')
launchBrowser('chrome')
launchBrowser('edge')