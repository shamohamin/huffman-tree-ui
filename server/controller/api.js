const _ = require('lodash') ;
const exec = require('child_process').exec ;

const controller = {
    get_return_values : (req , res) => {
        const credential = _.pick(req.body , 
                    ['input_name' , 'file_content','output_name']) ;
        console.log(credential)
        exec(`sh ./server/controller/cpp_call.sh "${credential.input_name}" "${credential.output_name}"` ,
            (error , stdout , stderr) => {
                if(error)
                    res.status(500).send(error) 
                if(stdout){
                    console.log(stdout)
                    res.status(200).send(stdout)
                }
                if(stderr){
                    console.log(stderr)
                    res.status(500).send(stderr)
                }
                });
        
    },
    get_available_files : (req , res) => {

        console.log("hello")
        exec(`sh /home/amin/Documents/huffman-tree-ui/server/controller/ls.sh` , (error , stdout , stderr) => {
            if(error)
                res.status(500).send(error)
            if(stdout){
                let data = [];
                console.log(stdout)
                let arr = [] ;
                data = stdout.split('/')
                for(let i = 6 ; i < data.length ; i += 6)
                    arr.push(data[i])
                for(let i = 0 ; i < arr.length ; i++)
                    arr[i] = arr[i].split('.')[0]
                console.log(arr)
                res.status(200).send(arr)
            }if(stderr)
                res.status(500).send(stderr)
        });
    }
};

module.exports = controller ;