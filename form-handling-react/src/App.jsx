import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // ✅ lowercase 'f'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Form Handling</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;
