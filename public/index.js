


document.getElementById('btn').addEventListener('click', ()=>{
  document.getElementById('loading-icon').style.display='block'
  let url2 = document.getElementById('scanner-input').value 
  axios({
      method:'get',
      url:'http://localhost:4000/scanner',
      params: {
        url: url2
      }
  }) .then(res => {

    console.log(res.data)
    divRes = document.getElementById('result')
    if (res.data === true){
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<span class="red">The Website have XSS Vulnerability</span>'+
      '<img id="warning" src="./pictures/warning2.ico" alt="image not found">'
    }
    else if(res.data === false){
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<span class="green">The website is safe</span>'+
      '<img id="succeeded" src="./pictures/succeeded.png" height="64px" width="64px" alt="image not found">'
    }
    else{
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<p class="error"> Sorry for the inconvenience the scanner cant complete the scaning due to <b>Error</b></p>'+
      `<p class="error">Error: ${res.data}</p>`
    }
  })
})







