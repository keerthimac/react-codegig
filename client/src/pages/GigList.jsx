import GigItem from "../components/GigItem";

function GigList({ gigs, deleteGig }) {
  //console.log(gigs);
  return (
    <div>
      <section id='gigs' className='container'>
        <h1>All Gigs</h1>
        {/* {{#each gigs}} */}

        {/* {{else}} */}
        {gigs.length === 0 ? ( // if no gigs
          <p>No gigs available</p>
        ) : (
          <div>
            {gigs.map((gig) => (
              <GigItem key={gig.id} gig={gig} deleteGig={deleteGig} />
            ))}
          </div>
        )}

        {/* {{/each}} */}
      </section>
    </div>
  );
}

export default GigList;
