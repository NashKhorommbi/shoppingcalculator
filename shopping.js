var input = document.getElementById('input');
var submit = document.getElementById('submit');
var results = document.getElementById('result');
var sum = 0;

submit.addEventListener('click',function(){
    
	var element = document.querySelector('.elements');
	var el = document.createElement('div');
	var h2 = document.createElement('h2');
	var button = document.createElement('button');
	var total = document.getElementById('total');
    input.focus();
 	var inputValue = input.value;

	if(!isNaN(inputValue)){
       h2.innerHTML = inputValue;
    button.innerHTML = 'delete';



    sum = sum + Number(inputValue);
    results.innerHTML ='Total = ' +  sum;

    input.value = '';
	el.appendChild(h2);
	el.appendChild(button);
	el.classList.add('ell');
	element.appendChild(el);

	

	button.addEventListener('click',function(){

		var pElem = this.parentElement;
		sum = sum - inputValue;
		pElem.style.display  = 'none';
        input.focus();
		results.innerHTML = 'Total = ' +  sum;

		

	});

	}else {
		alert('Its not a number');
		input.value = '';
	}
	

	


});
total.addEventListener('click', function(){
     
     var all = document.querySelectorAll('.ell');
     for(var i = 0; i < all.length ; i++){
     	all[i].style.display  = 'none';
     	sum = 0;
     	results.innerHTML = 'Total is = ' + sum;

     }		

     input.focus();
     input.value = '';

});
