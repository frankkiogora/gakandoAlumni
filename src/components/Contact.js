import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Contact.css";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const apiUrl = "https://api.example.com/contact"; // replace with your API Gateway endpoint URL
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Form submitted successfully");
      reset(); // reset the form fields on successful submission
    } else {
      console.error("Failed to submit form");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="../assets/images/schImage.jpeg"
            alt="Contact"
            className="img-fluid"
          />
        </div>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="school">School</label>
            <input
              type="text"
              className="form-control"
              id="school"
              {...register("school", { required: true })}
            />
            {errors.school && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              className="form-control"
              id="middleName"
              {...register("middleName")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="officialEmail">Official Email</label>
            <input
              type="email"
              className="form-control"
              id="officialEmail"
              {...register("officialEmail", { required: true })}
            />
            {errors.officialEmail && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="graduationYear">Graduation Year</label>
            <input
              type="text"
              className="form-control"
              id="graduationYear"
              {...register("graduationYear")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              className="form-control"
              id="organization"
              {...register("organization")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              className="form-control"
              id="linkedin"
              {...register("linkedin")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              className="form-control"
              id="facebook"
              {...register("facebook")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              className="form-control"
              id="twitter"
              {...register("twitter")}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
