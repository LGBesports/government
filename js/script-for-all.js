
$(document).ready(function () {


    var $result = $('#search_box-result');

    $('#search').on('keyup', function () {
        var search = $(this).val();
        if ((search != '') && (search.length > 1)) {
            $.ajax({
                type: "POST",
                url: "https://snipp.ru/ajax.php?inc_id=12382",
                data: { 'search': search },
                success: function (msg) {
                    $result.html(msg);
                    if (msg != '') {
                        $result.fadeIn();
                    } else {
                        $result.fadeOut(100);
                    }
                }
            });
        } else {
            $result.html('');
            $result.fadeOut(100);
        }
    });

    $(document).on('click', '.search_result-name a', function () {
        $('#search').val($(this).text());
        $result.fadeOut(100);
        return false;
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search_box').length) {
            $result.html('');
            $result.fadeOut(100);
        }
    });
});
//поиск


var x = 0;

function addInput() {
    if (x < 2) {
        var str = '<input  type="text" class="sign-up-form__input-object-text "> <div id="input' + (x + 1) + '"></div>';
        document.getElementById('input' + x).innerHTML = str;
        x++;
    } else {
        alert('У вас не может быть больше трёх высших образований');
    }
}






var f = 0;

function addInputLink() {
    if (f < 4) {
        var str = '<div class="order-start-pop__datail-small"><input type="text" id="order-start-pop__detail"></div> <div id="input' + (f + 1) + '"></div>';
        document.getElementById('input' + f).innerHTML = str;
        f++;
    } else {
        alert('Вы не можете прикрепить больше 5 ссылок');
    }
}



var d = 0;

function addInputLink2() {
    if (d < 4) {
        var str = '<div class="order-start-pop__datail-small"><input type="text" id="order-start-pop__detail"></div> <div id="input-second' + (d + 1) + '"></div>';
        document.getElementById('input-second' + d).innerHTML = str;
        d++;
    } else {
        alert('Вы не можете прикрепить больше 5 ссылок');
    }
}





var y = 0;

function addInputFile() {
    if (y < 4) {
        var fork = '<div class="pop-contract__file-input mbottom"><input id="pop-contract__file-input " type="file" style="display: none;"><label for="pop-contract__file-input">Выбрать файл</label></div> <div id="div' + (y + 1) + '"></div>';
        document.getElementById('div' + y).innerHTML = fork;
        y++;
    } else {
        alert('Вы не можете загрузить больше 5 файлов');
    }
}
//добавление новых полей

function removeField(btn) {
    var div = btn.closest(".sign-up-form__input-object1");

    if (div) {
        div.remove();
    }
}

function addField(btn) {
    document.getElementById('pop-up-window').classList.add("active");
    var form = btn.closest("article");
    if (form) {
        var div1 = form.querySelector(".sign-up-form__input-object1");
        if (div1) {

            var div = document.createElement("div");
            div.className = div1.className;
            div.innerHTML = div1.innerHTML;
            form.appendChild(div);
        }
    }
}

//добавление новых полей с delete
function closePopUp() {
    document.getElementById('pop-up-window').classList.remove("active");

}
function openFirst() {
    document.getElementById('profile__slide1').classList.add("active");
    document.getElementById('profile__slide2').classList.remove("active");
    document.getElementById('profile__slide3').classList.remove("active");
    document.getElementById('nav-item-first').classList.add("active");
    document.getElementById('nav-item-second').classList.remove("active");
    document.getElementById('nav-item-third').classList.remove("active");

}
function openSecond() {
    document.getElementById('profile__slide2').classList.add("active");
    document.getElementById('profile__slide1').classList.remove("active");
    document.getElementById('profile__slide3').classList.remove("active");
    document.getElementById('nav-item-second').classList.add("active");
    document.getElementById('nav-item-first').classList.remove("active");
    document.getElementById('nav-item-third').classList.remove("active");

}
function openThird() {
    document.getElementById('profile__slide3').classList.add("active");
    document.getElementById('profile__slide1').classList.remove("active");
    document.getElementById('profile__slide2').classList.remove("active");
    document.getElementById('nav-item-third').classList.add("active");
    document.getElementById('nav-item-first').classList.remove("active");
    document.getElementById('nav-item-second').classList.remove("active");

}
function filter1() {
    document.getElementById('filter-changer1').classList.add("active");
    document.getElementById('filter-changer2').classList.remove("active");


}
function filter2() {
    document.getElementById('filter-changer2').classList.add("active");
    document.getElementById('filter-changer1').classList.remove("active");


}


//навигация между пунктами без обнолвения страницы





$("#sign-up-form__input-object-file1, sign-up-form__input-object-file1, #pop-contract__file-input").change(function () {
    filename = this.files[0].name;
    console.log(filename);
});
//источник названия файла


function fun1() {
    var chbox;
    chbox = document.getElementById('checkboxEditor');
    let started1 = document.getElementById('checkedChange1');
    let started2 = document.getElementById('checkedChange2');
    let started3 = document.getElementById('checkedChange3');
    let started4 = document.getElementById('checkedChange4');

    if (chbox.checked) {
        started1.classList.add("active");
        started2.classList.add("active");
        started3.classList.add("active");
        started4.classList.add("active");
        started1.disabled = true;
        started2.disabled = true;
        started3.disabled = true;
        started4.disabled = true;

    }
    else {
        started1.classList.remove("active");
        started2.classList.remove("active");
        started3.classList.remove("active");
        started4.classList.remove("active");
        started1.disabled = false;
        started2.disabled = false;
        started3.disabled = false;
        started4.disabled = false;
    }
}
function fun3() {
    var radio3;
    var radio3Delete;
    var radioButton1;
    radioButton1 = document.getElementById('sign-up-form__radio-button1');
    radio3 = document.getElementById('sign-up-form__radio-wrap2');
    radio3Delete = document.getElementById('sign-up-form__radio-wrap');


    if (radioButton1.checked) {
        radio3.classList.add("active");
        radio3Delete.classList.remove("active");
    }
    else {

    }
}
function fun4() {
    var radio4;
    var radio4Delete;
    var radioButton1;
    radioButton2 = document.getElementById('sign-up-form__radio-button2');
    radio4 = document.getElementById('sign-up-form__radio-wrap');
    radio4Delete = document.getElementById('sign-up-form__radio-wrap2');


    if (radioButton2.checked) {
        radio4.classList.add("active");
        radio4Delete.classList.remove("active");
    }
    else {

    }
}
//заблокировать ввод в input с помощью чекбокса






function OpenDate() {
    var checkboxDate;
    var sectionDate;
    checkboxDate = document.getElementById('order-start-pop__choose1');
    sectionDate = document.getElementById('order-start-pop__date');


    if (checkboxDate.checked) {
        sectionDate.classList.add("active");
    }
    else {
        sectionDate.classList.remove("active");
    }
}
function OpenPrice() {
    var checkboxPrice;
    var sectionPrice;
    checkboxPrice = document.getElementById('order-start-pop__choose2');
    sectionPrice = document.getElementById('order-start-pop__price');


    if (checkboxPrice.checked) {
        sectionPrice.classList.add("active");
    }
    else {
        sectionPrice.classList.remove("active");
    }
}
//order-start-pop открываем пункты


function orderFilter1() {
    document.getElementById('order-start__myform-filter-button1').classList.add("active");
    document.getElementById('order-start__myform-filter-button2').classList.remove("active");
    document.getElementById('order-start__myform-filter-button3').classList.remove("active");
    document.getElementById('order-start__myform-filter-button4').classList.remove("active");

}
function orderFilter2() {
    document.getElementById('order-start__myform-filter-button2').classList.add("active");
    document.getElementById('order-start__myform-filter-button1').classList.remove("active");
    document.getElementById('order-start__myform-filter-button3').classList.remove("active");
    document.getElementById('order-start__myform-filter-button4').classList.remove("active");

}
function orderFilter3() {
    document.getElementById('order-start__myform-filter-button3').classList.add("active");
    document.getElementById('order-start__myform-filter-button1').classList.remove("active");
    document.getElementById('order-start__myform-filter-button2').classList.remove("active");
    document.getElementById('order-start__myform-filter-button4').classList.remove("active");

}
function orderFilter4() {
    
    document.getElementById('order-start__myform-filter-button4').classList.add("active");
    document.getElementById('order-start__myform-filter-button3').classList.remove("active");
    document.getElementById('order-start__myform-filter-button1').classList.remove("active");
    document.getElementById('order-start__myform-filter-button2').classList.remove("active");

}

//order фильтр



function popContractOpen() {
    document.getElementById('pop-contract__file').classList.add("active");

}
function popContractClose() {
    document.getElementById('pop-contract__file').classList.remove("active");

}





function popHard() {
    document.getElementById('order-start-pop__hard').classList.add("active");
    document.getElementById('order-start-pop__easy').classList.remove("active");

}
function popEasy() {
    document.getElementById('order-start-pop__hard').classList.remove("active");
    document.getElementById('order-start-pop__easy').classList.add("active");

}


//pop-... скрипты


window.onload = function () {
	var search = document.querySelector(".search");
	if (search) {
		search.addEventListener('keyup', showButton, true);
		search.addEventListener('click', resetInput, true);
		search.addEventListener('click', showButton, true);
	}
}


function resetInput(e){
	var input = this.querySelector('input');
	input.value = input.defaultValue;
}

function showButton(){
	var button = this.querySelector('button'), 
		 input = this.querySelector('input');
	if (input.value.length) {
		removeClass(button, "hidden");
	} else {
		addClass(button, 'hidden');
	}
}

function addClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    if (re.test(o.className)) return
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}
 
function removeClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}


        //кастомный поиск