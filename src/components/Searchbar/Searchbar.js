import {useState} from "react";


function Searchbar({ onSubmit }) {
  const [filmRequest, setFilmRequest] = useState('');

  const handleInputChange = event => {
    setFilmRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
      if (filmRequest.trim() === '') {
          alert('Enter the name of the film');
            return;
      };

      onSubmit(filmRequest);
        setFilmRequest('');
    };

    return (
      <form  onSubmit={handleSubmit}>            
            <input
               
                type="text"            
                placeholder="Search film"
                value={filmRequest}
                onChange={handleInputChange}
            />
            <button type="submit"  >
            <span >Search</span>
            </button>
        </form>  
    )
}


export default Searchbar;