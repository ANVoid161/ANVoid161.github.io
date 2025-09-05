function yes() {
  alert('Good... its best if we keep it in the right hands...')
}

function no() {
  alert('Hm, that may be concerning. Its best if we find it now or else the Hallebot god will get to it first.')
}

document.getElementById('yes').onclick = yes;
document.getElementById('no').onclick = no;