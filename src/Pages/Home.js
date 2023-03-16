const Home = () => {
  const onClick = () => {
    console.log(firestoreService.getDates());
  };

  return (
    <div>
      <p>hey</p>

      <button onClick={onClick}>get items</button>
    </div>
  );
};

export default Home;
