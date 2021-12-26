import { FaSearch } from "react-icons/fa";

function Landing() {
  return (
    <section className='search-wrap'>
      <h1>Find A Coding Gig</h1>
      <form action='' className='search-form'>
        <FaSearch size={52} />
        <input
          type='search'
          name='term'
          placeholder='Javascript, PHP, Rails, etc...'
        />
        <input type='submit' value='Search' />
      </form>
    </section>
  );
}

export default Landing;
