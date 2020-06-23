const test = () => {
  const element = document.createElement("div");
  element.innerHTML = "ddwew";
  return element;
}

document.body.appendChild(test());
