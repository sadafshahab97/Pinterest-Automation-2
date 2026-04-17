import React from "react";

const PrivacyPolicy = () => {
  const lastUpdated = "April 17, 2026";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-4 text-slate-900">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <p className="mb-4">
          Welcome to <strong>Pinterest Automation</strong>. We are committed to
          protecting your personal information and your right to privacy. This
          policy explains how we handle your data when you use our service
          through the Pinterest API.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        Our application uses the Pinterest API to provide automation features.
        To function, we access:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Profile Information:</strong> Your Pinterest username and
          profile picture to identify your account.
        </li>
        <li>
          <strong>Content Data:</strong> Details about your boards and Pins to
          allow for scheduling and organization.
        </li>
        <li>
          <strong>Authentication Tokens:</strong> Secure OAuth tokens provided
          by Pinterest.{" "}
          <strong>We never see or store your Pinterest password.</strong>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Data</h2>
      <p className="mb-4">
        We use your data strictly for the following purposes:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>To execute Pin scheduling and automation tasks at your request.</li>
        <li>To provide a personalized dashboard of your Pinterest boards.</li>
        <li>To ensure compliance with Pinterest Developer policies.</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-blue-800">
        <strong>Important:</strong> We do not sell your data to third parties,
        and we do not use your data for advertising purposes outside of our
        platform.
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        3. Data Retention & Deletion
      </h2>
      <p className="mb-4">
        We only retain your Pinterest access tokens for as long as your account
        is active with us. You can revoke access at any time through your
        <a
          href="https://www.pinterest.com/settings/apps"
          className="text-blue-600 hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinterest App Settings
        </a>
        . Once access is revoked, we can no longer access your data, and your
        local session tokens are invalidated.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        4. Compliance with Pinterest Policies
      </h2>
      <p className="mb-4">
        Our use of information received from Pinterest APIs will adhere to the
        <a
          href="https://developers.pinterest.com/policy/"
          className="text-blue-600 hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinterest Developer Terms
        </a>
        , including the limited use requirements.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
      <p className="mb-4">
        If you have questions about this policy, you can contact us at:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-mono text-sm">
          Email: support@pinterest-automation-seven.vercel.app
        </p>
        <p className="font-mono text-sm">
          Website: pinterest-automation-seven.vercel.app
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
