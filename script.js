function selectFood(foodName) {
  document.getElementById("selectedFood").value = foodName;
}

function submitOrder(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const time = document.getElementById("time").value;
  const food = document.getElementById("selectedFood").value;

  if (!food) {
    alert("กรุณาเลือกอาหารก่อนค่ะ");
    return;
  }

  alert(`คุณ ${name} ได้สั่งจอง "${food}" เวลา ${time} เรียบร้อยแล้ว`);
  document.querySelector("form").reset();
  document.getElementById("selectedFood").value = "";
}