jQuery.fn.scrollBottom=function(pos){
	if(typeof(pos)==='undefined'||pos===null){
		var v=($(this).scrollTop()-$(this).get(0).scrollHeight+$(this).height())*-1;
		return v;
	}
	else{
		if(typeof(console)!=='undefined'){
			console.log('FIXME: Cannot set pos yet!');
		}
	}
	return jQuery(this);
};