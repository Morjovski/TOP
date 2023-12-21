let link = document.querySelector('a');
link.textContent = "Mozilla's Developer Network";
link.href = "https://developer.mozilla.org";

let sect = document.querySelector('section');

let para = document.createElement("p");
para.textContent = 'We hope you enjoyed the ride.';
para.setAttribute("class", "highlight");

sect.appendChild(para);

let text = document.createTextNode(
    " - the premier source for web development knowledge."
);

let linkPara = document.querySelector('p');
linkPara.appendChild(text);

