const GigItem = ({ gig }) => {
  console.log(gig);

  return (
    <div>
      <div className='gig'>
        <h3>{gig.title}</h3>
        <p>{gig.description}</p>
        <ul>
          <li>
            Budget:
            <span>
              {" "}
              {gig.budget ? <span>$ {gig.budget}</span> : <span>Unknown</span>}
            </span>
          </li>
          <li>
            <a href={`mailto:${gig.email}`} className='btn btn-reverse'>
              Apply Now
            </a>
          </li>
        </ul>
        <div className='tech'>
          <small>
            Technologies Needed: <span>{gig.technologies}</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default GigItem;
