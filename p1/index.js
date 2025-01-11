const body=document.querySelector('body')

function setcolor(name)
{
    body.style.backgroundColor=name
}

function randomcolor()
{
    const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  body.style.backgroundColor=color
}