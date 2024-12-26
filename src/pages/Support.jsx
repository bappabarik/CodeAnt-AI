import Container from "../components/common/Container";

const Support = () => {
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-gray-600 text-lg">
              Hi! I’m Bappa Barik, a passionate software developer specializing
              in building efficient, scalable, and user-friendly web
              applications.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Portfolio
            </h2>
            <p className="text-gray-600 mb-4">
              Check out my projects and latest works:
            </p>
            <a
              href="https://bappabarik.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Visit My Portfolio
            </a>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Contact Details
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to me for collaboration or any inquiries:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Email:{" "}
                <a
                  href="mailto:bappa@example.com"
                  className="text-blue-500 underline"
                >
                  bappabarik898@gmail.com
                </a>
              </li>
              <li>Phone: +91-85973-05824</li>
              <li>Location: Kolkata, West Bengal, India</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Support;
