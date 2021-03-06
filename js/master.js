var iframeCode = document.getElementById('discord-iframe-code');
var idInput, titleInput, themeLightInput, themeDarkInput, themeNoneInput,
    optionsJoinInput, optionsAbcInput, optionsShowAllInput, optionsToggleInput,
    hideChannelsInput;
var iframeCodeStart, iframeCodeEnd;
var iframeCodeResult;

idInput = document.getElementById('iframe-id-text');
titleInput = document.getElementById('iframe-title-text');

themeLightInput = document.getElementById('iframe-theme-light');
themeDarkInput = document.getElementById('iframe-theme-dark');
themeNoneInput = document.getElementById('iframe-theme-none');

optionsJoinInput = document.getElementById('iframe-options-join');
optionsAbcInput = document.getElementById('iframe-options-abc');
optionsShowAllInput = document.getElementById('iframe-options-showall');
optionsShowNickInput = document.getElementById('iframe-options-shownick');
optionsToggleInput = document.getElementById('iframe-options-showalltoggle');

hideChannelsInput = document.getElementById('iframe-hidechannels-text');

iframeCodeStart = '&lt;iframe src=&quot;http://discordi.deliriousdrunkards.com/render?id=';
iframeCodeEnd = '&quot; width=&quot;300px&quot; height=&quot;400px&quot; frameborder=&quot;0&quot;&gt;&lt;/iframe&gt;';

setInterval(function() {
  iframeCodeResult = '';
  iframeCodeResult += iframeCodeStart;

  if (idInput.value != '' || idInput.value != idInput.defaultValue) {
    iframeCodeResult += idInput.value;
  }
  if (titleInput.value != '' || titleInput.value != titleInput.defaultValue) {
    iframeCodeResult += '&title=' + titleInput.value;
  }
  if (themeLightInput.checked) {
    iframeCodeResult += '&theme=light';
  }
  if (themeDarkInput.checked) {
    iframeCodeResult += '&theme=dark';
  }
  if (themeNoneInput.checked) {
    iframeCodeResult += '&theme=none';
  }
  if (optionsJoinInput.checked) {
    iframeCodeResult += '&join=true';
  } else {
    iframeCodeResult += '&join=false';
  }
  if (optionsAbcInput.checked) {
    iframeCodeResult += '&abc=true';
  } else {
    iframeCodeResult += '&abc=false';
  }
  if (optionsShowAllInput.checked) {
    iframeCodeResult += '&showall=true';
  } else {
    iframeCodeResult += '&showall=false';
  }
  if (optionsToggleInput.checked) {
    iframeCodeResult += '&toggle=true';
  } else {
    iframeCodeResult += '&toggle=false';
  }
  if (optionsShowNickInput.checked) {
    iframeCodeResult += '&shownick=true';
  } else {
    iframeCodeResult += '&shownick=false';
  }


  iframeCodeResult += iframeCodeEnd;
  iframeCode.innerHTML = iframeCodeResult;
}, 100);
