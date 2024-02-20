const cur_one = document.querySelector('#cur-one');
const cur_two = document.querySelector('#cur-two');
const input_one = document.querySelector('input:nth-of-type(1)');
const input_two = document.querySelector('body > div > div:nth-child(3) > input[type=number]');
const para = document.querySelector('.swap p');
const swap = document.querySelector('.swap button');

const clac = ()=>{
    
    const curr1 = cur_one.value;
    const curr2 = cur_two.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${curr1}`)
    .then(response => response.json())
    .then(data => {
        const change = data.rates[curr2];
        const num = input_one.value;
        input_two.value = num * change;
        para.textContent = `1${curr1} = ${change} ${curr2}`
    });
    
    
};

cur_one.addEventListener('change', clac);
cur_two.addEventListener('change', clac);
input_one.addEventListener('input', clac);
input_two.addEventListener('input', clac);


swap.addEventListener('click', e =>{
    e.stopPropagation();
    
    const curr1 = cur_one.value;
    cur_one.value = cur_two.value;
    cur_two.value = curr1;
    
    clac();
});




