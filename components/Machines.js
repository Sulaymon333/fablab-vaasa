import MachineItem from './MachineItem';

const Machines = ({ machines }) => {
    return (
        <div className="grid grid-flow-row-dense gap-6 px-3 py-10 mx-auto my-20 rounded-xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {machines.map((machine) => (
                <MachineItem key={machine.id} {...machine} />
            ))}
        </div>
    );
};

export default Machines;
