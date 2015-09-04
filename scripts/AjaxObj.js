//  创建请求对象
 function createRequest(){
 	var request;
 	try{
 		request = new XMLHttpRequest();
 	}catch(tryM5){
 		try{
 			request = new ActiveXObject("Msxml2.SMLHTTP");
 		}catch(otherMS){
 			try{
 				request = new ActiveXObject("Mocrosoft.XMLHTTP");
 			}catch(failed){
 				return null;
 			}
 		}
 	}
 	return request;
 }