const hasil = document.querySelector("form input");
const hapus = document.querySelector(".hapus");

const itemHasil = document.querySelector(".itemhasil");
itemHasil.addEventListener("click",function(){
	hasil.value = eval(hasil.value);
});

hapus.addEventListener("click",function(){
	hasil.value = "";
});


const item = document.querySelectorAll(".item");
item.forEach(function(tem){
	tem.addEventListener("click",function(){
		hasil.value += tem.value;
	});
});	

