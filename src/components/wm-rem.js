import { html, css, LitElement } from 'lit';

class WmRem extends LitElement {

    static properties = {
      rem: { type: Number, },
    };

    static get styles() {
	    return css`
        :host {
          display: flex;
          align-items: center;
          gap: 16px;
          user-select:none;
        }
        button {
          all: unset;
          display: inline-flex;

          background: white;
          border-radius: 3rem;
          color: black;
          padding: 8px 16px;
          transition: box-shadow 200ms ease;
          align-items: center;
        }
        button svg {
          display: block;
          margin-right: 16px;
          width: 1rem;
          height: 1rem;
        }
        button:is(:hover, :focus, :active) {
          box-shadow: 0 0 0 5px #005d2f;
        }
	    `;
    }

    constructor() {
      super();
      this.rem = 28;
		}

    firstUpdated() {
    }
    increase() {
      this.rem = this.rem + 2;
      var root = document.querySelector(":root");
      root.style.fontSize = `${ this.rem }px`;
    }
    clear() {
      this.rem = 28;
      var root = document.querySelector(":root");
      root.style.fontSize = `${ this.rem }px`;
    }
    decrease() {
      this.rem = this.rem - 2;
      var root = document.querySelector(":root");
      root.style.fontSize = `${ this.rem }px`;
    }


    update( changedProperties ) {
      super.update( changedProperties );
    }

    render() {
      return html`
      <button @click="${ this.decrease }">A-</button>
      <button @click="${ this.clear }">
        <svg version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m253.17 0c-35.523 0-64.851 26.867-68.827 61.342h-79.701c-32.253 0-58.489 26.244-58.489 58.496v3.0015c0 24.646 15.346 45.742 36.965 54.337v276.33c0 32.253 26.241 58.496 58.491 58.496h223.12c32.252 0 58.489-26.245 58.489-58.496v-276.33c21.617-8.5965 36.965-29.692 36.965-54.337v-2.9994c0-32.253-26.239-58.498-58.489-58.498h-79.697c-3.9756-34.474-33.305-61.342-68.829-61.342zm0 27.741c20.204 0 37.066 14.482 40.798 33.601h-81.591c3.7304-19.12 20.597-33.601 40.794-33.601zm-148.53 61.342h297.05c16.952 0 30.751 13.797 30.751 30.755v3.0015h-2e-3c0 16.957-13.796 30.755-30.749 30.755h-297.05c-16.952 0-30.749-13.797-30.749-30.755v-3.0015c0-16.957 13.796-30.755 30.749-30.755zm6.2165 92.252h284.62v272.17c0 16.957-13.796 30.755-30.749 30.755h-223.12c-16.952 0-30.749-13.798-30.749-30.755zm67.946 83.533c-7.6594 0-13.871 6.2132-13.871 13.871v156.17c-1e-3 7.6594 6.211 13.869 13.871 13.869s13.869-6.2122 13.869-13.869v-156.17c0-7.6583-6.21-13.871-13.869-13.871zm74.365 0c-7.6594 0-13.871 6.2132-13.871 13.871v156.17c0 7.6594 6.211 13.869 13.871 13.869s13.869-6.2122 13.869-13.869v-156.17c0-7.6583-6.2111-13.871-13.869-13.871zm74.363 0c-7.6615 0-13.869 6.2132-13.869 13.871v156.17c-1e-3 7.6594 6.21 13.869 13.869 13.869 7.6594 0 13.869-6.2122 13.869-13.869v-156.17c0-7.6583-6.2111-13.871-13.869-13.871z"></path></svg>
        Clear
      </button>
      <button @click="${ this.increase }">A+</button>
      `;
    }

}

customElements.define( 'wm-rem', WmRem );
