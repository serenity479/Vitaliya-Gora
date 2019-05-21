// Переключатель вкладок
$(document).ready(function() {
  	$(".tab-item").not(":first").hide();
    $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");  
});

// Скроллбар
$(window).on("load",function(){
    $(".container2").mCustomScrollbar()
});

// Появление формы интересов
$("#add-interest").click(function(){
	var interests_form = document.getElementById('interests-form-block');
	if(interests_form.style.display == "" || interests_form.style.display == 'none'){
		interests_form.style.display = 'inline-block';
	}
	else{
		interests_form.style.display = 'none';
	}
});


// Добавление интереса

$("#btn-interest").click(function(){
	var interestInfo = document.getElementById("input-interest").value;
	if(validateForm(interestInfo)){
		var interestElement = document.createElement('a'); 
		interestElement.innerHTML = interestInfo;
		var interestPanel = document.getElementById("interest-panel");
		interestPanel.insertBefore(interestElement, interestPanel.children[0]); 
	}
});


// Проверка поля ввода
function validateForm(interest){
    if (interest == "") {
    	alert ( "Пожалуйста заполните поле");
        return false;
    };
    return true;
};


// Удаление интереса
$("#interest-panel").on('click', 'a', function () {
	var elemToDelete = this;
	elemToDelete.parentNode.removeChild(elemToDelete);
});


// Появление поля для изменения информации
var inputUserData;
var replaceableElement;
var changeComplete = true;

$(".info").on('click', '#user-fio, #user-city, .content, #user-email', function () {
	if(changeComplete){
		inputUserData = document.createElement('input');
		inputUserData.value = this.innerHTML;
		inputUserData.className = "input-user-data";
		replaceableElement = this;
		switch(this.id) {  // чтоб верстка не сдвигалась после вставки
		  case 'user-fio': inputUserData.style.marginBottom = "11px";  
		    break;
		  case 'user-city': inputUserData.style.marginBottom = "-10px"
		    break;
		  case 'user-email': inputUserData.style.marginBottom = "1px"
		    break;
		  default: inputUserData.style.marginBottom = "5px"	    
		    break;
		}
		this.parentNode.replaceChild(inputUserData, this);
		$(".input-user-data").focus();
		changeComplete = false;
	}
});

// Внесение изменений
$('.info').on('blur', '.input-user-data', function(){
    replaceableElement.innerHTML = inputUserData.value;
    window.localStorage.setItem(replaceableElement.id, inputUserData.value);
	inputUserData.parentNode.replaceChild(replaceableElement, inputUserData);
	changeComplete = true;
});


// Восстановление при загрузке
$(document).ready (function(){
	for (var i=0,key,value; i < localStorage.length; i++) {
		key = localStorage.key(i);
		value = localStorage.getItem(key);
		var el = document.getElementById(key);
		el.innerHTML = value;
	}
});












