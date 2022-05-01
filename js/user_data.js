

async function getAllUserAddress(){

    var _address = getCookie("address");
	const extern_lab = new web3.eth.Contract(ExternAbi, ExternAddress);


    var i;
    var output = '';
    var count=0;
    var account_data = [];

    extern_lab
    .methods.getAllUserAddress().call({
        from: _address,
    })
    .then(
        (data)=>{
 
            for(i=0;i<data.length;i++)
            {
         
           
            extern_lab.methods.getUserStatusData(data[i]).call({
                from: _address,
             
            })
            .then(
                (data1)=>{
                   
                    output += `<div class="card mb-2" id =${data[count]}>
                    <div class="card-body p-2 p-sm-3">
                        <div class="media forum-item">
                            <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                            <div class="media-body">
                                <h6>${data[count]}</h6>
                                <p class="text-secondary">
                                    ${data1[1]}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>    `;
                   
                    document.getElementById("userList").innerHTML = output;
                    count++;
                    
            }
            );	
                
            }
            
        }
        
    );

   



}

getAllUserAddress();