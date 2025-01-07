import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const [loading, setLoading] = useState(false); // State to manage loading spinner visibility
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add reset here
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbzZzR-V4OeQFFl6zIIhIPRs8GQpwq5TvPeA3CoVs5o6ICEXZ-Cicj9YT60Y4aaM_Qy_bA/exec";

    // Show the spinner while the form is submitting
    setLoading(true);

    fetch(googleScriptUrl, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Hide spinner after form submission
        setLoading(false);

        if (data.result === "success") {
          // Reset the form after successful submission
          reset();

          // Show the success toast
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false); // Hide toast after 3 seconds
          }, 3000);
        } else {
          alert("Error submitting message.");
        }
      })
      .catch((error) => {
        setLoading(false); // Hide spinner in case of an error
        alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)} // handleSubmit from react-hook-form
        className="bg-navy-800 p-6 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full bg-navy-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Your Email"
              className="w-full bg-navy-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <input
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
            className="w-full bg-navy-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="mt-6">
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-navy-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-cyan-400 text-navy-900 px-6 py-3 rounded-lg font-medium hover:bg-cyan-300 transition-colors"
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <div className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full mx-auto" />
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg"
          role="alert"
        >
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
