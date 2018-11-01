import shadowStyles from './shadow.css';
const slotName = 'message-input';

const template = `
    <style>${shadowStyles.toString()}</style>
 	<header>FORM</header>
 	<form id="form" class="topBefore">
         <label> In local storage info:</label>
         <div class="info">
         </div>
 		<input name = 'name' type="text" placeholder="NAME" class="info">
 		<input name = 'message' type="text "placeholder="Message" class="info">
 	    <input name = "submit" type = "submit" value="Submit">
 	</form>
 `;

class MessageForm extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}

	static get observedAttributes() {
		return [
			"action",
			"method"
		]
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this._elements.form[attrName] = newVal;
	}

	_initElements () {
		var form = this.shadowRoot.querySelector('form');
		var message = this.shadowRoot.querySelector('.info');
		message.innerText = localStorage.getItem('info');
        localStorage.clear();
		this._elements = {
			form: form,
			message: message
		};
	}

	_addHandlers () {
		this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
		this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
		//this._elements.inputSlot.addEventListener('slotchange', this._onSlotChange.bind(this));
	}

	_onSubmit (event) {
		this._elements.message.innerText = Array.from(this._elements.form.getElementsByClassName('info')).map(elem => elem.value).join(', ');
        localStorage.setItem('info', this._elements.message.innerText);
		event.preventDefault();
		return false;
	}

	_onKeyPress (event) {
		if (event.keyCode == 13) {
			this._elements.form.dispatchEvent(new Event('submit'));
		}
	}
}

customElements.define('message-form', MessageForm);
