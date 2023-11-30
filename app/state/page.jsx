import BeforeAfter from '../component/state/BeforeAfter';
import FileInputs from '../component/state/FileInputs';
import FirstLast from '../component/state/FirstLast';
import Form from '../component/state/Form';
import TextState from '../component/state/TextState';

const State = () => {
  return (
    <div>
      <FirstLast />
      <Form />
      <BeforeAfter />
      <FileInputs />
      <TextState />
    </div>
  );
};

export default State;

// Section left off => "Pseudo-element: File input buttons"
