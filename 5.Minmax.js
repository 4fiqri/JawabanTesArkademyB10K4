var data = ['h','g','a','b','d','f'];

function minmax(param){

    var hasil = [];

    var index = 0;
    var result = param[0];
    
    for ( var i=0; i<param.length; i++ ) {
    	if (param[i] < result) {
        	result = param[i];
        	index = i;
    	}
    }

    hasil.push(result);

    for ( var i=index; i<param.length; i++) {
    	if (param[i] > result)
    		result = param[i];
    }
    
    hasil.push(result);

    return hasil
}
    console.log(minmax(data));