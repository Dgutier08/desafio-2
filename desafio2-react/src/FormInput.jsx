const FormInput = (props) => {
    return (
    <input
     type="text"
     onChange={(e) =>props.setClave(e.target.value)}
     />
     )
 }
 
 export default FormInput;