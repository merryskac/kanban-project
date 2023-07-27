// your code goes here
tekaTekiTeko = (batas)=>{
	const bagi2 = "Teka"
	const bagi3 = "Teki"
	const bagi5 = "Teko"
	
	let i=0
	
	if(typeof batas != 'number'){
		throw Error('Input harus angka')
	}
	if(batas <= 20){
		throw Error("Batas harus lebih dari 20")
	}
	
	while(i<=batas){
		console.log(i)
		
	if(i%2===0 && i%3===0 && i%5===0){
		console.log(bagi2+bagi3+bagi5)
		return
	}
	if(i%2===0 && i%3===0){
		console.log(bagi2+bagi3)
		return
	}
	if(i%2===0 && i%5===0){
		console.log(bagi2+bagi5)
		return
	}
	if(i%3===0 && i%5===0){
		console.log(bagi3+bagi5)
		return
	}
	if(i%2===0){
		console.log(bagi2)
		return
	}
	if(i%3===0){
		console.log(bagi3)
		return
	}
	if(i%5===0){
		console.log(bagi5)
		return
	}
	i++
}
	
}

try{
	tekaTekiTeko(30)
}catch(e){
	console.log(e.message)
}