const container = document.querySelector("#container");

const para = document.createElement('p');

para.style.color = 'red';
para.textContent = 'Hey I\'m red!';

container.appendChild(para);

const headerThree = document.createElement('h3');

headerThree.style.color = 'blue';
headerThree.textContent = 'I\'m a blue h3!';

container.appendChild(headerThree);

const div = document.createElement('div');

div.setAttribute('style', 'border: 1px black solid; background-color: pink;');

const divHeader = document.createElement('h1');
divHeader.textContent = "I'm in a div";
const divPara = document.createElement('p');
divPara.textContent = "Me too!";

div.appendChild(divHeader);
div.appendChild(divPara);

container.appendChild(div);


