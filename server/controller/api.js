const _ = require('lodash') ;
const exec = require('child_process').exec ;

const controller = {
    get_return_values : (req , res) => {
        const credential = _.pick(req.body , 
                    ['input_name' , 'file_content','output_name']) ;
        
    }
};

module.exports = controller ;