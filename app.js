let elements = document.getElementsByName('cssEdit');
let div = document.querySelector('#modify');
//document.getElementById('modify');

function set (){
	for(let i=0; i<elements.length; i++){
		let cssProperty = elements[i].getAttribute('id');
		let cssValue = elements[i].value;
		div.style[cssProperty] = cssValue;		
	}
}

document.getElementById('set').addEventListener('click', set);
//event must be 'click', and not 'onclick'

