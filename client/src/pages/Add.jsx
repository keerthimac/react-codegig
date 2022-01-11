import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import AlertItem from "../components/AlertItem";

function Add({ addNewGigs, alerts }) {
  const [title, setTitle] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGig = {
      title,
      technologies,
      budget,
      description,
      email,
    };
    addNewGigs(newGig);
    if(alerts.length>0){
      alerts.forEach((alert) => {
        console.log(alert.text);
      });
    }else{
      setTitle("");
      setTechnologies("");
      setBudget("");
      setDescription("");
      setEmail("");
      //navigate to homepage after adding a gig
      navigate("/gigs");
    }

  };

  return (
    <div>
      <section id='add' className='container'>
        <div className='form-wrap'>
          <h1>Add A Gig</h1>
          <p>
            Your contact email will be shared with registered users to apply to
            your gig
          </p>

          {alerts.length > 0 &&
            alerts.map((alert) => (
              <AlertItem key={uuidv4()} alert={alert} />
            ))}
          
          {/* {alerts ? alerts.map((alert =>{<div class="error">{alert.text}</div>})):console.log('test')} */}
          

          <form action='/gigs/add' onSubmit={handleSubmit}>
            <div className='input-group'>
              <label htmlFor='title'>Gig Title</label>
              <input
                type='text'
                name='title'
                id='title'
                className='input-box'
                placeholder='eg. Small Wordpress website, React developer'
                maxLength='100'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='technologies'>Technologies Needed</label>
              <input
                type='text'
                name='technologies'
                id='technologies'
                className='input-box'
                placeholder='eg. javascript, react, PHP'
                maxLength='100'
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='budget'>Budget (Leave blank for unknown)</label>
              <input
                type='number'
                name='budget'
                id='budget'
                className='input-box'
                placeholder='eg. 500, 5000, 10000'
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='description'>Gig Description</label>
              <textarea
                name='description'
                id='description'
                className='input-box'
                placeholder='Describe the details of the gig'
                rows='10'
                onChange={(e) => setDescription(e.target.value)}
                value={description}>
                {description}
              </textarea>
            </div>
            <div className='input-group'>
              <label htmlFor='budget'>Contact Email</label>
              <input
                type='email'
                name='contact_email'
                id='contactemail'
                className='input-box'
                placeholder='Enter an email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type='submit' value='Add Gig' className='btn btn-reverse' />
          </form>

          {/* Form End here */}
        </div>
      </section>
    </div>
  );
}

export default Add;
