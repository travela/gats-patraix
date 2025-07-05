// Build a simple Hello World component in React

const HelloWorld = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500">Hello, World!</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a simple React component styled with Tailwind CSS.
      </p>
    </div>
  );
};

// Export the component as default
export default HelloWorld;
