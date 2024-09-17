export const Recursion = ({ name, surname, children, level = 1 }) => {
  const identation = level * 20;
  return (
    <>
      <div style={{ paddingLeft: `${identation}px` }}>
        <span>{name}</span>
        <span>{surname}</span>
        {children.map((child, index) => {
          return (
            <Recursion
              key={index}
              name={child.name}
              surname={child.surname}
              children={child.children}
              level={level + 1}
            />
          );
        })}
      </div>
    </>
  );
};
