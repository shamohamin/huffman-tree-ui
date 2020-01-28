import React from 'react'


export const HOC = (FormComponent , ToggleComponenet , toggle ,state ,{onChange , onSubmit}) => {
    const inlineStyle = {
        marginTop:'5%' ,
        marginLeft:'10%' ,
        marginRight:'10%' , 
        marginBottom:'5%' , 
        boxShadow:'10px 10px 30px 30px'
    };
    return <div style={inlineStyle}>
        {
            toggle ? <ToggleComponenet {...state} /> : 
                        <FormComponent onChange={onChange} 
                                onSubmit={onSubmit} input_name_arr={state.input_name_arr}/> 
        }
    </div>
}