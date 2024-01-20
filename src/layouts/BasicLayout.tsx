interface Props {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>Basic Layout</h1>
      {children}
    </div>
  );
};
