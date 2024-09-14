import { Steps } from "./hiringProcess/Steps";
import ProcessStep from "./hiringProcess/ProcessStep";

const HiringProcess = () => {
  return (
    <section className="bg-gray-50 py-20" id="hiring-process">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          How We Work Together
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A streamlined process designed to turn your ideas into reality
          efficiently and transparently.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
          {Steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === Steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
