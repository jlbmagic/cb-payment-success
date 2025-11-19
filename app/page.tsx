export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with green tint */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://im-js-in-fm-images.s3.amazonaws.com/AdobeStock_74641866.jpeg)",
        }}
      />
      <div className="absolute inset-0 bg-purple-500/20 dark:bg-purple-900/60" />

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 py-12 text-center backdrop-blur-sm">
        <img
          src="https://camelbackflowershop.com/cdn/shop/files/cbfs-logo_220x.png?v=1622497585"
          alt="Camelback Flower Shop"
          className="mb-4 h-auto w-48"
        />

        <div className="rounded-full bg-green-500 p-6 shadow-lg">
          <svg
            className="h-16 w-16 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Payment Successful!
        </h1>

        <p className="max-w-md text-lg text-gray-700 dark:text-gray-300">
          Your payment has been processed successfully. Thank you for your
          transaction.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          You can close this window
        </p>
      </main>
    </div>
  );
}
