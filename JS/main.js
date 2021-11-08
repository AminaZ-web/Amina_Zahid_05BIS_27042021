function cartNumber() {    
    let contentCart = JSON.parse(localStorage.getItem('basket'))
  
      if (contentCart !== null){
        nb = contentCart.length;
        document.getElementById('basketNumber').innerHTML += `${nb}`;
      } else {
        document.getElementById('basketNumber').innerHTML += 0;
      }
  }

  