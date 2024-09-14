import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 border-b-4 ${color}`}
  >
    <Icon className="text-5xl mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default SkillCard;
