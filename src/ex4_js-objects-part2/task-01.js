function searchProtoKey(name, obj) {
  for (var key in obj){
		if(!obj.hasOwnProperty(key) && key === name){
			return obj[key];
		}
	}
	return undefined;
}

module.exports = searchProtoKey;
