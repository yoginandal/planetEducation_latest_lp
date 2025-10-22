import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    current_city: "",
    preferred_study_destination: "",
    current_level_of_education: "",
    language_test_taken: "",
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

    if (!formData.preferred_study_destination) {
      newErrors.preferred_study_destination = "Please select a destination.";
    }

    if (!formData.current_level_of_education) {
      newErrors.current_level_of_education =
        "Please select your education level.";
    }

    if (!formData.language_test_taken) {
      newErrors.language_test_taken = "Please select a language test option.";
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
            preferred_study_destination: formData.preferred_study_destination,
            current_level_of_education: formData.current_level_of_education,
            language_test_taken: formData.language_test_taken,
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
        className="relative top-68 sm:top-0 md:ml-auto bg-linear-to-br from-[#f6cb3d] to-[#f6cb3d]/90 p-6 pt-14! shadow-xl max-w-[400px] custom-div rounded-sm"
      >
        <div className="relative">
          <h3 className="text-lg sm:text-xl text-center font-bold text-black">
            Sign-up to choose your best-fit
          </h3>
          <h3 className="text-lg sm:text-xl text-center font-bold text-black">
            university or college with our
          </h3>
          <h3 className="text-lg sm:text-xl text-center font-bold text-black mb-6">
            expert counselors.
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full bg-white p-2 ${
                  errors.Name ? "border-red-500 border" : ""
                }`}
                required
              />
              {errors.Name && (
                <p className="text-red-500 text-xs mt-1">{errors.Name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                type="email"
                className={`w-full bg-white p-2 ${
                  errors.email ? "border-red-500 border" : ""
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                type="tel"
                maxLength="10"
                className={`w-full bg-white p-2 ${
                  errors.phone ? "border-red-500 border" : ""
                }`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                name="current_city"
                value={formData.current_city}
                onChange={handleChange}
                placeholder="City"
                className={`w-full bg-white p-2 ${
                  errors.current_city ? "border-red-500 border" : ""
                }`}
                required
              />
              {errors.current_city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.current_city}
                </p>
              )}
            </div>

            <div>
              <select
                name="preferred_study_destination"
                value={formData.preferred_study_destination}
                onChange={handleChange}
                className={`w-full bg-white p-2 ${
                  errors.preferred_study_destination
                    ? "border-red-500 border"
                    : ""
                }`}
                required
              >
                <option value="" disabled hidden>
                  Preferred Study Destination
                </option>
                <option value="Australia">Australia</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Singapore">Singapore</option>
              </select>
              {errors.preferred_study_destination && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.preferred_study_destination}
                </p>
              )}
            </div>

            <div>
              <select
                name="current_level_of_education"
                value={formData.current_level_of_education}
                onChange={handleChange}
                className={`w-full bg-white p-2 ${
                  errors.current_level_of_education
                    ? "border-red-500 border"
                    : ""
                }`}
                required
              >
                <option value="" disabled hidden>
                  Current Level of Education
                </option>
                <option value="12th Pass">12th Pass</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
              {errors.current_level_of_education && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.current_level_of_education}
                </p>
              )}
            </div>

            <div>
              <select
                name="language_test_taken"
                value={formData.language_test_taken}
                onChange={handleChange}
                className={`w-full bg-white p-2 ${
                  errors.language_test_taken ? "border-red-500 border" : ""
                }`}
                required
              >
                <option value="" disabled hidden>
                  Any Language Test Taken?
                </option>
                <option value="IELTS">IELTS</option>
                <option value="TOEFL">TOEFL</option>
                <option value="PTE">PTE</option>
                <option value="Duolingo">Duolingo</option>
                <option value="Others">Others</option>
                <option value="None">None</option>
              </select>
              {errors.language_test_taken && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.language_test_taken}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-10 rounded-sm py-2 block mx-auto bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[1.4rem] font-normal ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "animate-bounce"
              }`}
              style={{ marginTop: "2.5rem" }}
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
