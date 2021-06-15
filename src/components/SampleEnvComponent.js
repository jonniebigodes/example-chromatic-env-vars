import PropTypes from "prop-types";

export default function SampleComponentWithEnv({ propertyA, propertyB }) {
  return (
    <>
      <h1>This is a sample component to test if Env vars are included.</h1>
      <h2>The props contain the following value</h2>
      <h3>propertyA: {propertyA}</h3>
      <h3>propertyB: {propertyB}</h3>
    </>
  );
}
SampleComponentWithEnv.propTypes={
    propertyA:PropTypes.string,
    propertyB:PropTypes.number
}

SampleComponentWithEnv.defaultProps={
    propertyA:'Something',
    propertyB:22
}