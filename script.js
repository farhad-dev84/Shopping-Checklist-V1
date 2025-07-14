// گرفتن المنت ها از html
const itemInput = document.getElementById("itemInput") ;
const addBtn = document.getElementById("addBtn") ;
const itemList = document.getElementById("itemList") ;

// دکمه افزودن رویداد کلیک
addBtn.addEventListener("click" , function() {
  // گرفتن مقدار ورودی کاربر و حذف فاصله های اضافی
  const itemText = itemInput.value.trim() ;
  
  // اگر کاربر چیزی وارد کرد
  if(itemText !== "") {
    // ایجاد لیست ایتم
    const li = document.createElement("li") ;
    li.className = "list-group-item d-flex justify-content-between align-items-center" ;
    li.innerHTML = `${itemText} <button class="btn btn-danger btn-sm deleteBtn">حذف</button>` ;
    // اضافه کردن به لیست
    itemList.appendChild(li) ;
    // پاک کردن فیلد ورودی
    itemInput.value = "" ;
  }
}) ;

// رویداد کلیک روی دکمه حذف با Event Delegation
itemList.addEventListener("click" , function(e) {
  if(e.target.classList.contains("deleteBtn")) {
    // حذف والد دکمه یعنی li
    e.target.parentElement.remove() ;
  }
}) ;