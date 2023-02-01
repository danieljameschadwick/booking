interface Props {
  title?: string | null;
  children: React.ReactNode;
}

export const LocationBlock = ({ title = null, children }: Props) => {
  return (
    <article className="mb-4">
      {title && (
        <div className="mb-2 bg-gray-200 p-2">
          <h2 className="text-xl">{title}</h2>
        </div>
      )}

      {children}
    </article>
  );
};
