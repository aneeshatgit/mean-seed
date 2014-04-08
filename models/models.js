/*
* This file will be used to create all the models that will be used in your project.
*/

module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var models = {};
	
	//SAMPLE SCHEMA 
	var sample = new Schema({
		sampleName: String
	});

	
	models.sample = mongoose.model('Sample', sample);


	/*
	* Add more models here by using the following convention. 
	* var sampleTwo = new Schema({
	* 	sampleName: String
	* });
	* models.sampleTwo = mongoose.model("SampleTwo", sampleTwo);
	*/

	return models;
}