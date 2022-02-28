function getOS() {
  var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'MacOS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
          os = 'Linux';
    }

  return os;
}

var lastversion = "1.0";
var os = getOS();

function telechargerDernierreVersion(){
  open("https://pybotsimulation.github.io/downloads/PyBotSimulation-v" + lastversion + "-for_" + os)
}
function telecharger(version){
  open("https://pybotsimulation.github.io/downloads/PyBotSimulation-v" + version + "-for_" + os)
}

document.getElementById("lastversion").innerHTML=lastversion;
document.getElementById("os").innerHTML=os;
