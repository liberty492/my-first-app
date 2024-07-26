const Validation=(firstname)=>{
    let errors={};
    if(!firstname){
        errors.firstname='first name is required';
    }
    return errors;
}
export default Validation;