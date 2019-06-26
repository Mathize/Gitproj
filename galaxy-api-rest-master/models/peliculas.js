var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var galaxiasSchema = new Schema({
    id:{ type: String },
    galaxia:{ type: String },
    tipo:{ type: String },
//    lanzamiento:{ type: String },
//    cover:  { type: String },
    //comentarios:  { type: Array },
});


module.exports = mongoose.model('Galaxia', galaxiasSchema,'galaxias');
