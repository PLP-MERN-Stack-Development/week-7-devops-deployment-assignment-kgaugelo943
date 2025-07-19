export default function Card({ title, children }) {
    return (
      <div className="border rounded-lg shadow p-6 bg-white dark:bg-gray-800 dark:text-white transition-colors duration-500">
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        {children}
      </div>
    );
  }