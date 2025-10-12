import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * MakeProfile component
 * Props:
 *  - initialName, initialEmail, initialPassword (strings) — if provided, shown as read-only
 */
const MakeProfile = ({
  initialName = "",
  initialEmail = "",
  initialPassword = "",
}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: initialName,
    email: initialEmail,
    password: initialPassword,
    phone: "",
    about: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    dob: "",
    role: "",
    skills: "",
    website: "",
    linkedin: "",
    github: "",
    twitter: "",
    profile1: null, // primary profile image (optional)
    profile2: null, // secondary profile image / cover (optional)
    acceptTerms: false,
  });

  // preview states for uploaded images
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm((p) => ({ ...p, [name]: checked }));
      return;
    }

    if (type === "file") {
      const file = files[0] || null;
      setForm((p) => ({ ...p, [name]: file }));
      if (name === "profile1") setPreview1(file ? URL.createObjectURL(file) : null);
      if (name === "profile2") setPreview2(file ? URL.createObjectURL(file) : null);
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side checks
    if (!form.phone) {
      alert("Phone number is required.");
      return;
    }
    if (!form.about.trim()) {
      alert("Please tell us about yourself.");
      return;
    }
    if (!form.acceptTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    // Prepare form data for backend (example)
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      // don't append the previews
      if (k === "profile1" || k === "profile2") {
        if (v) data.append(k, v);
        return;
      }
      data.append(k, v ?? "");
    });

    // Replace with API call
    // fetch("/api/profile", { method: "POST", body: data })
    //   .then(...)
    // For now:
    console.log("Submitting profile:", {
      ...form,
      profile1: form.profile1 ? form.profile1.name : null,
      profile2: form.profile2 ? form.profile2.name : null,
    });

    navigate("/profile");
  };

  return (
    <>
      <div className="flex bg-gray-900 h-18 "></div>
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 border-2 border-yellow-300"
      >
        <h1 className="text-2xl font-extrabold text-yellow-600 mb-4 text-center">
          Create Your Profile
        </h1>

        {/* Row: Name / Email / Password (likely collected earlier) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Full Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              readOnly={!!initialName}
              disabled={!!initialName}
              placeholder="Full name"
              className="mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              readOnly={!!initialEmail}
              disabled={!!initialEmail}
              placeholder="you@example.com"
              className="mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              readOnly={!!initialPassword}
              disabled={!!initialPassword}
              placeholder="••••••••"
              className="mt-1 p-3 rounded-lg border border-gray-300 bg-gray-50"
              required
            />
          </label>
        </div>

        {/* Phone and DOB / Role */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <label className="flex flex-col md:col-span-1">
            <span className="text-sm font-medium text-gray-700">Phone (required)</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+91 98765 43210"
              pattern="[0-9+ \-()]{7,}"
              className="mt-1 p-3 rounded-lg border border-gray-300"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Date of Birth</span>
            <input
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              className="mt-1 p-3 rounded-lg border border-gray-300"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Role / Title</span>
            <input
              name="role"
              type="text"
              value={form.role}
              onChange={handleChange}
              placeholder="Frontend Developer / Pet Care Volunteer"
              className="mt-1 p-3 rounded-lg border border-gray-300"
            />
          </label>
        </div>

        {/* About (required) */}
        <label className="flex flex-col mb-4">
          <span className="text-sm font-medium text-gray-700">About yourself (required)</span>
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            placeholder="Tell us about your experience, passions, or what you want others to know..."
            rows={5}
            className="mt-1 p-3 rounded-lg border border-gray-300"
            required
          />
        </label>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">City</span>
            <input name="city" value={form.city} onChange={handleChange} className="mt-1 p-3 rounded-lg border border-gray-300" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">State</span>
            <input name="state" value={form.state} onChange={handleChange} className="mt-1 p-3 rounded-lg border border-gray-300" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Country</span>
            <input name="country" value={form.country} onChange={handleChange} className="mt-1 p-3 rounded-lg border border-gray-300" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">ZIP / PIN</span>
            <input name="zip" value={form.zip} onChange={handleChange} className="mt-1 p-3 rounded-lg border border-gray-300" />
          </label>
        </div>

        {/* Profiles (optional) + previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-start">
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Profile picture (optional)</span>
            <input name="profile1" type="file" accept="image/*" onChange={handleChange} className="mt-1" />
            {preview1 && <img src={preview1} alt="preview" className="mt-2 w-28 h-28 object-cover rounded-full border" />}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Cover / Secondary image (optional)</span>
            <input name="profile2" type="file" accept="image/*" onChange={handleChange} className="mt-1" />
            {preview2 && <img src={preview2} alt="preview" className="mt-2 w-full h-20 object-cover rounded-md border" />}
          </label>
        </div>

        {/* Skills / Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">Website</span>
            <input name="website" value={form.website} onChange={handleChange} placeholder="https://example.com" className="mt-1 p-3 rounded-lg border border-gray-300" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">LinkedIn / GitHub / Twitter</span>
            <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn profile url" className="mt-1 p-3 rounded-lg border border-gray-300 mb-2" />
            <input name="github" value={form.github} onChange={handleChange} placeholder="GitHub username or url" className="mt-1 p-3 rounded-lg border border-gray-300 mb-2" />
            <input name="twitter" value={form.twitter} onChange={handleChange} placeholder="Twitter handle" className="mt-1 p-3 rounded-lg border border-gray-300" />
          </label>
        </div>

        {/* Terms and submit */}
        <div className="flex items-center justify-between gap-4 mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={form.acceptTerms}
              onChange={handleChange}
              className="w-4 h-4"
              required
            />
            <span className="text-sm text-gray-700">I agree to the terms & privacy policy</span>
          </label>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-700 transition-shadow"
            >
              Save Profile
            </button>
            <button
              type="button"
              onClick={() => {
                setForm({
                  name: initialName,
                  email: initialEmail,
                  password: initialPassword,
                  phone: "",
                  about: "",
                  city: "",
                  state: "",
                  country: "",
                  zip: "",
                  dob: "",
                  role: "",
                  skills: "",
                  website: "",
                  linkedin: "",
                  github: "",
                  twitter: "",
                  profile1: null,
                  profile2: null,
                  acceptTerms: false,
                });
                setPreview1(null);
                setPreview2(null);
              }}
              className="bg-black text-white px-4 py-2 rounded-full font-medium hover:opacity-90"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default MakeProfile;
