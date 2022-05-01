
async function transfer_fund(){
	var _address = getCookie("address");
	const extern_lab = new web3.eth.Contract(ExternAbi, ExternAddress);

	const _to_address = document.getElementById("input_address").value;
    
    var _amount = document.getElementById("input_amount").value;

    // _amount = _amount * 1000000000000000000;
    const weiValue = Web3.utils.toWei(_amount, 'ether');

console.log(weiValue);

	const options = {
        from: _address,
    };

    extern_lab
        .methods.special_transfer(_to_address, weiValue).send(options)
        .on("receipt",
            function (receipt) {
                console.log(receipt);
                alert(receipt);
                window.location.reload();
            })
            .on("error",
                    function (error, receipt) {
                        console.log(error);
                        alert("Error Occured");
                        window.location.reload();
                    }
            ).then(console.log("Transaction-Capture"));

}