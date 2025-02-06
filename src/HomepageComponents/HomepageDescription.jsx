import { motion } from "framer-motion";

function HomepageDescription() {

    return (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 1 }} className="w-7/12 pt-[4%]">
            <span className="text-base text-white font-normal font-mont">
                Vitajte v Cestovnej agentúre E-Travel Vaša brána do sveta nezabudnuteľných dobrodružstiev a relaxu. Sme tu, aby sme vám pomohli naplniť 
                vaše cestovateľské sny, či už túžite po dobrodružstve v exotických destináciách alebo po relaxácii na najkrajších horách sveta. 
                <br/>
                <br/>
                V našom cestovnom katalógu nájdete širokú škálu destinácií, zájazdov a dobrodružstiev, ktoré spĺňajú rôzne záujmy a preferencie.
                Od exotických pláží a dobrodružných expedícií až po kultúrne výlety a romantické úniky, máme niečo pre každého.
            </span>
        </motion.div>
    )
  }
  
  export default HomepageDescription