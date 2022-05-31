function copyURL() {
  const shortLink = document.querySelector('#shortLink')
  try{
    navigator.clipboard.writeText(shortLink).then(() =>{
      alert('Copied the text: ' + shortLink)
    })
  }
  catch( error ) {
    console.log('Errort: ' + error)
  }
};
 