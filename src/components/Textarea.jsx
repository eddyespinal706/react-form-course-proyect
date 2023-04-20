const Textarea = ({ value, label, name }) =>{
    return(
        <div className="ed-item form__item">
          <label htmlFor={name}>
            {label}
            <textarea 
              name={name} 
              id={name} 
              defaultValue={value} 
            />
          </label>
        </div>
    )
}

export default Textarea