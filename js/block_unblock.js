async function block_user(){
	var _address = getCookie("address");
	const extern_lab = new web3.eth.Contract(ExternAbi, ExternAddress);

	const block_user_address = document.getElementById("block_user").value;
    
    console.log(block_user_address);
    

	const options = {
        from: _address,
       
    };

    extern_lab
        .methods.blockUser(block_user_address).send(options)
        .on("receipt",
            function (receipt) {
                console.log(receipt);
                alert("Transaction Successful");
                window.location.reload();
            })
            .on("error",
                    function (error, receipt) {
                        console.log(error);
                        alert("Error Occured");
                        window.location.reload();
                    }
            )
            .then(console.log("Transaction-Capture"));

}





async function un_block_user(){
	var _address = getCookie("address");
	const extern_lab = new web3.eth.Contract(ExternAbi, ExternAddress);

	const block_user_address = document.getElementById("block_user").value;
    
    console.log(block_user_address);
    

	

    extern_lab
        .methods.unBlockUser(block_user_address).send({ from: _address })
        .on("receipt",
            function (receipt) {
                console.log(receipt);
                alert("Transaction Successful");
                window.location.reload();
            })
            .on("error",
                    function (error, receipt) {
                        console.log(error);
                        alert("Error Occured");
                        window.location.reload();
                    }
            )
            .then(console.log("Transaction-Capture"));

}


