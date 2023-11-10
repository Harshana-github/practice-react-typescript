type PersonListProps = {
  names: {
    id: number;
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>-----------Array Objects-----------</h1>
      {props.names.map((name) => {
        return (
          <h4 key={name.id}>
            {name.first} {name.last}
          </h4>
        );
      })}
    </div>
  );
};
