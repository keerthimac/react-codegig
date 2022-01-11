import GigItem from "../components/GigItem";
import { motion, AnimatePresence } from "framer-motion";

function GigList({ gigs, deleteGig }) {
  //console.log(gigs);
  return (
    <div>
      <section id='gigs' className='container'>
        <h1>All Gigs</h1>

        {gigs.length === 0 ? ( // if no gigs
          <p>No gigs available</p>
        ) : (
          <div>
            <AnimatePresence>
              {gigs.map((gig) => (
                <motion.div
                  key={gig.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}>
                  <GigItem key={gig.id} gig={gig} deleteGig={deleteGig} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* {{/each}} */}
      </section>
    </div>
  );
}

export default GigList;
