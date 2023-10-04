import './style.css';
import { capitalizeFirstLetter } from './tools/qstr';

const message = 'this is a test';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1 class="text-3xl">Vitest Site</h1>
<p>${capitalizeFirstLetter(message)}</p>
`;
