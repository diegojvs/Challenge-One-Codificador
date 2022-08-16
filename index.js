let encrypt = document.getElementById('button-encrypt');
let decrypt = document.getElementById('button-decrypt');

const copy = async () => {
	let copyText = document.getElementById('output-output').innerText;
	console.log(copyText);
	await navigator.clipboard.writeText(copyText);
};

encrypt.addEventListener('click', () => {
	let text = document.getElementById('text-input').value;
	if (
		/[A-Z¡¢£¤¥§¨©ª«¬®¯°±\´µ¶·¸º»¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÖØÚÙÛÜßàáâãäåæçèéêëìíîïòóôõö÷øùúûüÿ₫\`]/.test(
			text
		)
	) {
		alert('Solo se permite el uso de letras minúsculas y sin acentos');
	} else {
		let result = text.replaceAll('e', 'enter');
		result = result.replaceAll('i', 'imes');
		result = result.replaceAll('a', 'ai');
		result = result.replaceAll('o', 'ober');
		result = result.replaceAll('u', 'ufat');
		if (document.getElementById('img-output')) {
			document.getElementById('img-output').style.display = 'none';
			document.getElementById('output-title').style.display = 'none';
			document.getElementById('output-p').style.display = 'none';
		} else {
			document.getElementById('output-output').remove();
		}
		result = '<h1 class="output-output" id="output-output">' + result + '</h1>';
		let container = document.getElementById('output');
		container.style.justifyContent = 'start';
		container.style.alignItems = 'start';
		container.innerHTML = result;
		container.innerHTML +=
			'<button class="button" id="button-copy" onclick="copy()">Copiar</button>';
	}
});

decrypt.addEventListener('click', () => {
	let text = document.getElementById('text-input').value;
	if (
		/[A-Z¡¢£¤¥§¨©ª«¬®¯°±\´µ¶·¸º»¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÖØÚÙÛÜßàáâãäåæçèéêëìíîïòóôõö÷øùúûüÿ₫\`]/.test(
			text
		)
	) {
		alert('Solo se permite el uso de letras minúsculas y sin acentos');
	} else {
		let result = text.replaceAll('enter', 'e');
		result = result.replaceAll('imes', 'i');
		result = result.replaceAll('ai', 'a');
		result = result.replaceAll('ober', 'o');
		result = result.replaceAll('ufat', 'u');
		if (document.getElementById('img-output')) {
			document.getElementById('img-output').style.display = 'none';
			document.getElementById('output-title').style.display = 'none';
			document.getElementById('output-p').style.display = 'none';
		} else {
			document.getElementById('output-output').remove();
		}
		result = '<h1 class="output-output" id="output-output">' + result + '</h1>';
		let container = document.getElementById('output');
		container.style.justifyContent = 'start';
		container.style.alignItems = 'start';
		container.innerHTML = result;
		container.innerHTML +=
			'<button class="button" id="button-copy" onclick="copy()"">Copiar</button>';
	}
});
