import { useRouteError } from "react-router-dom";
const Error = () => {
  const us = useRouteError();
  console.log(us);
  return (
    <div>
      <h1>OOPS</h1>
      <h2>Something went Wrong</h2>
      <h3>
        {us.status}:{us.statusText}
      </h3>
    </div>
  );
};
export default Error;
