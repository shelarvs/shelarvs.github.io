const fir = new web3.eth.Contract(firAbi, firAddress);

function get_contract_owner()
{
	var userAddress = getCookie("address");
	const options = {
    from: userAddress,
    gas: "3000000",
    gasPrice: "1000000"
	};

	fir
	    .methods
	    .getOwner()
	    .call(options).then( 
	        (data)=>{
	            document.getElementById("contract_owner_address").innerHTML =data;
	            // document.getElementById("name").innerHTML = "Name: "+data[1];
	            // document.getElementById("acc_verify").innerHTML = "Account Verified: "+data[2];
	            // document.getElementById("followers").innerHTML = "Followers: "+data[3];
	            // document.getElementById("following").innerHTML = "Following: "+data[4];
	        }
	    );


//--------------Register Police-----------

 // const options = {
 //        from: userAddress,
 //        gas: "3000000",
 //        gasPrice: "1000000"
 //    };

 //    fir
 //        .methods.registerPolice("NameQWE", "DESIGNATIONqwr","STATIONpolo").send(options)
 //        .on("receipt",
 //            function (receipt) {
 //                console.log(receipt);
 //            })
 //            .on("error",
 //                    function (error, receipt) {
 //                        console.log(error);
 //                    }
 //            ).then(console.log("Success Fire"));

//--------------Register Police-----------
}