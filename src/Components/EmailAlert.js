import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Input, IconButton } from "@chakra-ui/react";
import { CheckIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

function EmailAlert() {
  const { subscribed, setSubscribed } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (email) => setSubscribed(true);

  return (
    <div className="card span2" style={{ marginTop: "-10px" }}>
      {subscribed === false ? (
        <>
          <div className="specialFont">
            When Weird Things Happen.. Get Notified
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="emailInput">
            <Input
              placeholder="enter your email"
              size="lg"
              variant="filled"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            <IconButton
              colorScheme="teal"
              aria-label="Submit"
              size="lg"
              icon={<CheckIcon />}
              type="submit"
            />
            {errors.email && (
              <span className="formValidation">
                * Please enter a valid email
              </span>
            )}
          </form>
        </>
      ) : (
        <div className="emailSuccess">
          <CheckCircleIcon color="teal" marginRight="10px" marginBottom="2px" />{" "}
          Awesome! We'll let you know when we see weird activity!
        </div>
      )}
    </div>
  );
}

export default EmailAlert;
