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

    // Clear previous error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));

    // Validation logic for each field
    switch (name) {
      case "Name":
        // Prevent non-letter input (except spaces)
        if (value && !/^[A-Za-z\s]*$/.test(value)) {
          return; // Don't update the value if invalid
        }
        if (value && !validateName(value)) {
          setErrors((prev) => ({
            ...prev,
            Name: "Name can only contain letters and spaces.",
          }));
          return; // Don't update the value if invalid
        }
        break;

      case "current_city":
        // Prevent non-letter input (except spaces)
        if (value && !/^[A-Za-z\s]*$/.test(value)) {
          return; // Don't update the value if invalid
        }
        if (value && !validateCity(value)) {
          setErrors((prev) => ({
            ...prev,
            current_city: "City can only contain letters and spaces.",
          }));
          return; // Don't update the value if invalid
        }
        break;

      case "phone":
        // Prevent non-numeric input
        if (value && !/^\d*$/.test(value)) {
          return;
        }

        // Check first digit if entering first number
        if (value.length === 1 && parseInt(value) <= 5) {
          setErrors((prev) => ({
            ...prev,
            phone: "Phone number must start with a digit greater than 5.",
          }));
          return;
        }

        // Limit to 10 digits
        if (value.length > 10) {
          return;
        }

        // Validate complete phone number
        if (value.length === 10 && !validatePhone(value)) {
          setErrors((prev) => ({
            ...prev,
            phone: "Phone number must be 10 digits.",
          }));
        }
        break;

      case "email":
        // Don't show email error while typing
        break;

      case "qualification":
        // No real-time validation needed for select
        break;

      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add handleBlur for email validation
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

    // Validate all fields before submission
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

    // If there are any errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://uk.planeteducation.info/ukPlanetAPI.php",
        {
          method: "POST",
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
        }
      );

      if (response.ok) {
        window.location.href = "/thankyou.html";
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto max-screen-xl px-4 py-4 sm:py-8 flex flex-col text-center md:text-right md:flex-row gap-0 items-center md:items-end justify-between">
      {/* Left Content */}
      {/* <div className="space-y-6 text-center mt-7 mb-10 sm:mb-0 sm:mt-10 lg:text-left">
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-[24px] leading-7 sm:text-5xl !font-light text-white">
            Planning to
            <div className="text-[40px] text-center sm:text-left sm:text-[86px] leading-[1]">Study in the UK?</div>
          </h1>
          <div className="bg-[#f6313f] animate-pulse text-white text-xl sm:text-5xl font-light py-2 px-4 inline-block rounded-sm">
            Apply for Upcoming Intakes 
          </div>
          <br />
          <div className="bg-[#f6313f] animate-pulse text-white text-xl sm:text-5xl font-light py-2 px-4 inline-block rounded-sm">
            with Planet Education
          </div>
        </div>
      </div> */}

      {/* Right Form */}
      <div
        id="apply-now"
        className="relative top-68 sm:top-0 md:ml-auto bg-gradient-to-br from-[#f6cb3d] via-[#f6d03d] to-[#f6cb3d]/90 p-6 pt-12 shadow-xl max-w-[380px] custom-div rounded-xl border border-yellow-300/20"
      >
        <div className="relative">
          {/* Form Header */}
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
