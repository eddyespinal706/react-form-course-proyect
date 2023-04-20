const Field = ({ type, value, label, name, checked }) =>{
    return(
        <div className="ed-item form__item">
          <label htmlFor={name}>
            {label}
            <input 
              type={type} 
              name={name} 
              id={name} 
              defaultValue={value} 
              defaultChecked={ checked }
            />
          </label>
        </div>
    )
}

export default Field