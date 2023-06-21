import { useState } from "react";

const App = () => {
  // State variables
  const [step, setStep] = useState(1);
  const [make, setMake] = useState("");
  const [colour, setColour] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Event handlers
  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  const handleColourChange = (e) => {
    setColour(e.target.value);
  };

  const handleCodeChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    // For demonstration purposes, just showing the entered data in the console
    console.log({
      make,
      colour,
      inputValue,
    });
  };

  // Check if all inputs are chosen
  const isMakeDisabled = () => {
    return !make;
  };

  const isColourDisabled = () => {
    return !colour;
  };

  const isCodeDisabled = () => {
    return !inputValue;
  };

  // Render form based on the current step
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            {/* Step 2: Select Model */}
            <label className="form__label">
              <p> MAKE </p>
              <select
                value={make}
                onChange={handleMakeChange}
                className="form__select"
              >
                <option value="">Select Make</option>
                <option value="AUDI">AUDI</option>
                <option value="BMW">BMW</option>
                <option value="VAUXHAL">VAUXHAL</option>
                <option value="PEUGEOT">PEUGEOT</option>
                <option value="RENAULT">RENAULT</option>
              </select>
            </label>
            <br />
            <button
              type="submit"
              disabled={isMakeDisabled()}
              className="form__button"
              onClick={handleNext}
            >
              NEXT
            </button>
          </>
        );
      case 2:
        return (
          <>
            {/* Step 2: Select Model */}
            <label className="form__label">
              <p> COLOUR </p>
              <select
                value={colour}
                onChange={handleColourChange}
                className="form__select"
              >
                <option>Select Colour</option>
                <option value="blue">BLUE</option>
                <option value="red">RED</option>
                <option value="black">BLACK</option>
                <option value="orange">ORANGE</option>
              </select>
            </label>
            <br />
            <button
              type="submit"
              className="form__button"
              disabled={isColourDisabled()}
              onClick={handleNext}
            >
              NEXT
            </button>
          </>
        );
      case 3:
        return (
          <>
            {/* Step 2: Select Model */}
            <label className="form__label">
              <p>CODE</p>
            </label>
            <input type="text" onChange={handleCodeChange} />
            <br />
            <button
              type="submit"
              className="form__button"
              disabled={isCodeDisabled()}
              onClick={handleNext}
            >
              DONE
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {step < 4 && (
        <form onSubmit={handleSubmit} className="form">
          {renderForm()}
        </form>
      )}

      {step === 4 && (
        <>
          <h2>Generated Text</h2>
          <p>
            I have a <strong>{make}</strong> and colour is{" "}
            <strong style={{ color: colour }}>{colour}</strong>
          </p>
          <p>{colour === "red" && "THE CAR IS RED! NICE!!"}</p>
          <p>
            REF: <strong>{inputValue}</strong>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
