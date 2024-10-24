import { Spinner as NextUISpinner } from "@nextui-org/spinner";

function Spinner() {
  return (
    <div className="mt-14 flex justify-center">
      <NextUISpinner size="lg" color="secondary" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
