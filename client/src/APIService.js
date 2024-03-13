
export default class APIService{
	
	static InsertSelections(body){
		return fetch(`http://localhost:5000/submit_form`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

}