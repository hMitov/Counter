const value = document.querySelector('#value');
const button = document.querySelectorAll('.btn');





let count=0;





button.forEach(function (btn) {
  btn.addEventListener('mouseover', function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')) {
      count--;
    }
    else if(styles.contains('increase')) {
      count++;
    }
    else {
      count = 0;
    }

    if(count > 0) {
      value.style.color = 'green';
    }
    else if(count < 0) {
      value.style.color = 'red';
    }
    else {
      value.style.color = 'black';
    }
    value.textContent = count;
  });
});
