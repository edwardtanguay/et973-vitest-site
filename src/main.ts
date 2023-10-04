import './style.css';
import * as qstr from './tools/qstr';

const message = 'this is a test: all test pass';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1 class="text-3xl">Vitest Site</h1>
<p>${qstr.capitalizeFirstLetter(message)}</p>
`;
