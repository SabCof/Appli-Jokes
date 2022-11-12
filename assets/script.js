//Elements manipulation du DOM
const genre = document.getElementById('type');
const blagues = document.getElementById('blague');
const answers = document.getElementById('answer');

const btnSuivante = document.getElementById('suivante');



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74c7b64302msh6e2f03f16df29dbp16af23jsna1e36d6e6ad2',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

btnSuivante.addEventListener('click', () =>{


fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json()) //fORMATTAGE
	.then((response) => {
        console.log(response)
        
        blagues.textContent = response.body[0].setup + response.body[0].punchline
        //answers.textContent = 
        
        
        
       });   
})	