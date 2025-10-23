import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    qualification: "",
    current_city: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  // Replace with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzLl1-E-4ha--Qjj565mBNO1F7QtPB3424p6xqVOlSMVootns9bmoMFbAXy7myFYjfCjQ/exec";

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validateCity = (city) => {
    const cityRegex = /^[A-Za-z\s]+$/;
    return cityRegex.test(city);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone) && parseInt(phone[0]) > 5;
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  // Get UTM parameters when component mounts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFormData((prevState) => ({
      ...prevState,
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));

    switch (name) {
      case "Name":
        if (value && !/^[A-Za-z\s]*$/.test(value)) {
          return;
        }
        if (value && !validateName(value)) {
          setErrors((prev) => ({
            ...prev,
            Name: "Name can only contain letters and spaces.",
          }));
          return;
        }
        break;

      case "current_city":
        if (value && !/^[A-Za-z\s]*$/.test(value)) {
          return;
        }
        if (value && !validateCity(value)) {
          setErrors((prev) => ({
            ...prev,
            current_city: "City can only contain letters and spaces.",
          }));
          return;
        }
        break;

      case "phone":
        if (value && !/^\d*$/.test(value)) {
          return;
        }
        if (value.length === 1 && parseInt(value) <= 5) {
          setErrors((prev) => ({
            ...prev,
            phone: "Phone number must start with a digit greater than 5.",
          }));
          return;
        }
        if (value.length > 10) {
          return;
        }
        if (value.length === 10 && !validatePhone(value)) {
          setErrors((prev) => ({
            ...prev,
            phone: "Phone number must be 10 digits.",
          }));
        }
        break;

      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email" && value) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};

    if (!formData.Name || !validateName(formData.Name)) {
      newErrors.Name = !formData.Name
        ? "Name is required."
        : "Name can only contain letters and spaces.";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = !formData.email
        ? "Email is required."
        : "Please enter a valid email address.";
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = !formData.phone
        ? "Phone number is required."
        : "Phone number must be 10 digits.";
    }

    if (!formData.current_city || !validateCity(formData.current_city)) {
      newErrors.current_city = !formData.current_city
        ? "City is required."
        : "City can only contain letters and spaces.";
    }

    if (!formData.qualification) {
      newErrors.qualification = "Please select your qualification.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.Name,
          email: formData.email,
          phone: formData.phone,
          current_city: formData.current_city,
          qualification: formData.qualification,
          utm_source: formData.utm_source,
          utm_medium: formData.utm_medium,
          utm_campaign: formData.utm_campaign,
          utm_term: formData.utm_term,
          utm_content: formData.utm_content,
          submission_url: window.location.href,
          referrer: document.referrer || "",
        }),
      });

      // With no-cors mode, we can't read the response
      // So we assume success if no error was thrown
      window.location.href = "/thankyou.html";
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto max-screen-xl px-4 py-4 sm:py-8 flex flex-col text-center md:text-right md:flex-row gap-0 items-center md:items-end justify-between">
      <div
        id="apply-now"
        className="relative top-68 sm:top-0 md:ml-auto bg-linear-to-br from-[#f6cb3d] via-[#f6d03d] to-[#f6cb3d]/90 p-6 pt-12 shadow-xl max-w-[380px] custom-div rounded-xl border border-yellow-300/20"
      >
        <div className="relative">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-black mb-1">
              Start Your Journey
            </h3>
            <p className="text-black/70 text-xs">Get expert guidance today</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Name"
              className={`w-full bg-white p-3 rounded-lg border ${
                errors.Name ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {errors.Name && (
              <p className="text-red-600 text-xs mt-1">{errors.Name}</p>
            )}

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              type="email"
              className={`w-full bg-white p-3 rounded-lg border ${
                errors.email ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              type="tel"
              maxLength="10"
              className={`w-full bg-white p-3 rounded-lg border ${
                errors.phone ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
            )}

            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className={`w-full bg-white p-3 rounded-lg border ${
                errors.qualification ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              required
            >
              <option value="" disabled hidden>
                Select Qualification
              </option>
              <option value="12th">12th</option>
              <option value="Graduate">Graduate</option>
            </select>
            {errors.qualification && (
              <p className="text-red-600 text-xs mt-1">
                {errors.qualification}
              </p>
            )}

            <input
              name="current_city"
              value={formData.current_city}
              onChange={handleChange}
              placeholder="City"
              className={`w-full bg-white p-3 rounded-lg border ${
                errors.current_city ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {errors.current_city && (
              <p className="text-red-600 text-xs mt-1">{errors.current_city}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#1a237e] hover:bg-[#1a237e]/90 hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
