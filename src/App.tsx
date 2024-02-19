const data = [
  {
    nazwa: "foo",
    wiek: 30,
    obrazek:
      "https://th.bing.com/th/id/OIG.PDpRcbrO49TrRshgEP63?w=1024&h=1024&rs=1&pid=ImgDetMain",
    id: 0,
    kolor: "bialy",
  },
  {
    nazwa: "bar",
    wiek: 20,
    obrazek: "https://th.bing.com/th/id/OIG.Ivog_h1TwOEIOizB7tt4?pid=ImgGn",
    id: 1,
    kolor: "bialy",
  },
  {
    nazwa: "baz",
    wiek: 19,
    obrazek: "https://th.bing.com/th/id/OIG.lrAxUPMY.PQ0xlV9tqwd?pid=ImgGn",
    id: 2,
    kolor: "cazrny",
  },
  {
    nazwa: "aba",
    wiek: 88,
    obrazek: "https://th.bing.com/th/id/OIG.H.5hkeMbUcuRvP4JEIyt?pid=ImgGn",
    id: 3,
    kolor: "cazrny",
  },
];
function Tabela(props) {
  const dane = props.dane;
  const mappedDane = dane.map((elementtablicy) => {
    const { nazwa, wiek, obrazek, id, kolor } = elementtablicy;
    return (
      <div>
        <p>{nazwa}</p>
        <p>{wiek}</p>
        <p>{id}</p>
        <h6>{kolor}</h6>
        <img src={obrazek} width={100} height={100} />
      </div>
    );
  });
  console.log(mappedDane);
  return <>{mappedDane}</>;
}

function App() {
  return (
    <>
      <Tabela dane={data} />
    </>
  );
}
export { App };
