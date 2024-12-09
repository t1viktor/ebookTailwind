let secs = document.querySelectorAll(".sec");
secs.forEach(sec => {
    sec.classList.add('shadow-inner', 'border-b-2', 'border-black', 'shadow-black', 'bg-slate-800', 'p-6', 'flex', 'flex-col', 'gap-4');
});

let imgSec = document.querySelectorAll(".imgSec");
imgSec.forEach(imgSec => {
    imgSec.classList.add('m-4', 'border-2', 'border-slate-900', 'shadow-md', 'shadow-black');
});

let h2Sec = document.querySelectorAll(".h2Sec");
h2Sec.forEach(h2Sec => {
    h2Sec.classList.add('text-orange-200', 'text-4xl', 'text-center', 'py-3', 'border-b-2');
});

let pSec = document.querySelectorAll(".pSec");
pSec.forEach(pSec => {
    pSec.classList.add('text-gray-200', 'py-10', 'px-6', 'text-lg');
});

