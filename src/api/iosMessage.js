function iosinfoClean (val) {
  console.log('iosinfoClean')
  // Call to Android App
  if (window.nativeApp) window.nativeApp.funnelReady()
  // Call to  IOS App
  else if ((window['webkit']) && (window['webkit'].messageHandlers) && ((window['webkit'].messageHandlers.cellimedi))) window['webkit'].messageHandlers.cellimedi.postMessage(val)
}

export {iosinfoClean}
