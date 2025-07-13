function unlockPrivate() {
      const pass = document.getElementById('privatePass').value;
      const privateContent = document.getElementById('privateContent');
      if (pass === '1425') {
        privateContent.style.display = 'block';
        alert('Access Granted');
      } else {
        alert('Wrong Access Code');
      }
    }