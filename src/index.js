const test = () => {
  const element = document.createElement("div");
  element.innerHTML = "d9012";
  return element;
}

document.body.appendChild(test());
