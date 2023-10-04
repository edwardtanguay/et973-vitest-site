import './style.css';
import * as qstr from './tools/qstr';

const message = 'here is a text';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1 class="text-3xl">Vitest Site</h1>
<p>${qstr.capitalizeFirstLetter(message)}</p>
`;
