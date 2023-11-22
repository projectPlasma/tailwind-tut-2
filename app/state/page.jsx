import BeforeAfter from '../component/state/BeforeAfter';
import FileInputs from '../component/state/FileInputs';
import FirstLast from '../component/state/FirstLast';
import Form from '../component/state/Form';

const State = () => {
  return (
    <div>
      <FirstLast />
      <Form />
      <BeforeAfter />
      <FileInputs />
    </div>
  );
};

export default State;

// Section left off => "Pseudo-element: File input buttons"
