import DocumentTitle from "../../components/DocumentTitle";

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};


const HomePage = () => {
  <DocumentTitle>Home</DocumentTitle>
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook</h1>
    </div>
  )
}

export default HomePage;