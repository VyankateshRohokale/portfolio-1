'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ApplyFormPage() {
  const params = useSearchParams();
  const jobTitle = params.get('title');
  const department = params.get('department');
  const location = params.get('location');
  const type = params.get('type');
  const level = params.get('level');
  const description = params.get('description');
  const isOther = jobTitle === 'other';;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    resumeUrl: '',
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    github: '',
    jobTitle: jobTitle || '',
    department: department || '',
    location: location || '',
    type: type || '',
    level: level || '',
    description: description || '',
    other: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validation state
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmitted(false)
    setError(null)
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // check if disabled
    setError(null)
    if (!isFormValid || isSubmitting || submitted) return;
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/career-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { ...form }
        ),
      });

      const data = await res.json();

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError('An error occurred while submitting the form. Please try again later.');
      setIsSubmitting(false);
    }
  };

  // Simple validation checks
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidUrl = (url: string) =>
    url === '' || /^(https?:\/\/)[^\s$.?#].[^\s]*$/.test(url);

  const isFormValid =
    form.name.trim().length > 0 &&
    isValidEmail(form.email) &&
    form.resumeUrl.trim().length > 0 &&
    isValidUrl(form.resumeUrl);

  return (
    <div className="min-h-screen pb-24 bg-black pt-24 px-4 font-mono flex items-center justify-center">
      <div className="w-full max-w-xl bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          {isOther
            ? "Tell us about yourself"
            : `Apply for ${jobTitle || "a role"}${department ? ` in ${department}` : ""}`}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 border ${touched.name && !form.name.trim() ? 'border-red-500' : 'border-gray-700'}`}
              />
              {touched.name && !form.name.trim() && (
                <span className="text-red-500 text-xs">Name is required.</span>
              )}
            </div>
            <div className="flex-1">
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 border ${touched.email && !isValidEmail(form.email) ? 'border-red-500' : 'border-gray-700'}`}
              />
              {touched.email && !isValidEmail(form.email) && (
                <span className="text-red-500 text-xs">Enter a valid email.</span>
              )}
            </div>
          </div>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 border border-gray-700"
          />
          <div>
            <input
              name="resumeUrl"
              type="url"
              required
              value={form.resumeUrl}
              onChange={handleChange}
              placeholder="Resume URL (Google Drive, Dropbox, etc.)"
              className={`w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 border ${touched.resumeUrl && !isValidUrl(form.resumeUrl) ? 'border-red-500' : 'border-gray-700'}`}
            />
            {touched.resumeUrl && !form.resumeUrl.trim() && (
              <span className="text-red-500 text-xs">Resume URL is required.</span>
            )}
            {touched.resumeUrl && form.resumeUrl.trim() && !isValidUrl(form.resumeUrl) && (
              <span className="text-red-500 text-xs">Enter a valid URL.</span>
            )}
          </div>
          <input
            name="portfolio"
            type="url"
            value={form.portfolio}
            onChange={handleChange}
            placeholder="Portfolio URL (optional)"
            className={`w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 border ${form.portfolio && !isValidUrl(form.portfolio) ? 'border-red-500' : 'border-gray-700'}`}
          />
          {form.portfolio && !isValidUrl(form.portfolio) && (
            <span className="text-red-500 text-xs">Enter a valid URL.</span>
          )}
          <input
            name="linkedin"
            type="url"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn Profile (optional)"
            className={`w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 border ${form.linkedin && !isValidUrl(form.linkedin) ? 'border-red-500' : 'border-gray-700'}`}
          />
          {form.linkedin && !isValidUrl(form.linkedin) && (
            <span className="text-red-500 text-xs">Enter a valid URL.</span>
          )}
          <input
            name="github"
            type="url"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub Profile (optional)"
            className={`w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 border ${form.github && !isValidUrl(form.github) ? 'border-red-500' : 'border-gray-700'}`}
          />
          {form.github && !isValidUrl(form.github) && (
            <span className="text-red-500 text-xs">Enter a valid URL.</span>
          )}
          <textarea
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            placeholder="Cover Letter / Why do you want to join byencrypt?"
            rows={4}
            className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 border border-gray-700"
          />
          {!isOther && (
            <div className="space-y-2">
              <input
                name="jobTitle"
                type="text"
                value={form.jobTitle}
                readOnly
                disabled
                className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 border border-gray-700 opacity-70 cursor-not-allowed"
              />
              <input
                name="department"
                type="text"
                value={form.department}
                readOnly
                disabled
                className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 border border-gray-700 opacity-70 cursor-not-allowed"
              />
              <input
                name="location"
                type="text"
                value={form.location}
                readOnly
                disabled
                className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 border border-gray-700 opacity-70 cursor-not-allowed"
              />
              <input
                name="type"
                type="text"
                value={form.type}
                readOnly
                disabled
                className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 border border-gray-700 opacity-70 cursor-not-allowed"
              />
              <input
                name="level"
                type="text"
                value={form.level}
                readOnly
                disabled
                className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 border border-gray-700 opacity-70 cursor-not-allowed"
              />
              <textarea
                name="description"
                value={form.description}
                readOnly
                disabled
                className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 border border-gray-700 opacity-70 cursor-not-allowed"
                rows={2}
                hidden
              />
            </div>
          )}
          {isOther && (
            <div className="space-y-2">
              <input
                name="other"
                type="text"
                onChange={handleChange}
                value={form.other}
                // value="Other"
                placeholder='Position (e.g., "Full Stack Developer")'
                // readOnly
                // disabled
                className="w-full bg-gray-800 text-gray-200 rounded-lg px-4 py-3 border border-gray-700"
              />
            </div>
          )}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting || submitted}
            className={`w-full inline-flex items-center justify-center px-6 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {
              isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-lime-400 mr-2" />
                  Submitting...
                </>
              ) : submitted ? 'Submitted' : 'Submit Application'
            }
          </button>
        </form>
        {submitted ? (
          <div className="mt-6 text-center text-lime-400 font-semibold">
            Thank you! Your application has been received.
          </div>
        ) : error ? (
          <div className="mt-6 text-center text-red-500 font-semibold">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
}