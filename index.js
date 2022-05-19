var a,
  f,
  g,
  h,
  i,
  b = false,
  c = false,
  d = false,
  e = false,
  sum = 0,
  password = "nowfal";
function cal(a) {
  if (a == 1) {
    if (b == false) {
      sum += 30;
      b = true;
      document.getElementById("bt1").className = "bon";
    } else {
      sum -= 30;
      b = false;
      document.getElementById("bt1").className = "boff";
    }
  } else if (a == 2) {
    if (c == false) {
      sum += 30;
      c = true;
      document.getElementById("bt2").className = "bon";
    } else {
      sum -= 30;
      c = false;
      document.getElementById("bt2").className = "boff";
    }
  } else if (a == 3) {
    if (d == false) {
      sum += 30;
      d = true;
      document.getElementById("bt3").className = "bon";
    } else {
      sum -= 30;
      d = false;
      document.getElementById("bt3").className = "boff";
    }
  } else {
    if (e == false) {
      sum += 30;
      e = true;
      document.getElementById("bt4").className = "bon";
    } else {
      sum -= 30;
      e = false;
      document.getElementById("bt4").className = "boff";
    }
  }
  document.getElementById("amo").innerHTML = sum;
}
document.getElementById("verDet").addEventListener("click", verDet);
function verDet() {
  f = document.getElementById("name").value;
  g = document.getElementById("coll").value;
  h = document.getElementById("yb").value;
  i = document.getElementById("usn").value;
  if (f.split(" ") == "" || g == "" || h == "" || i == "" || sum == 0) {
    alert("incomplete details!");
  } else confirm("Confirm after checking details!");
}

function passw() {
  document.getElementById("wrong").style.display = "none";
  var input = prompt("Enter the password");
  if (input == password) {
    document.getElementById("bo").style.display = "block";
  } else {
    document.getElementById("wrong").style.display = "block";
  }
}
