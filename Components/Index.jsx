export default function Index() {
  return (
    <>
      {/*--------------- Section 1 ----------------- */}
      <section className="section-1">
        <h1 className="title-1">
          APIs <br />
          for a vibrant
          <br /> decentralized <br />
          future
        </h1>

        <p className="text-1">
          The Graph is an indexing protocol for querying networks like Ethereum
          and IPFS. Anyone can build and Publish open APIs called subgraphs,
          making data easily accessible.
        </p>

        <button className="button-1">Explore Subgraphs</button>
      </section>

      {/*--------------- Section 2 ----------------- */}
      <section className="section-2">
        <div className="row">
          <div className="borderBox">
            <p className="text-2">
              Which governance proposals have the most rep?
            </p>
            <div className="line-2"></div>
            <img className="img-2" src="assets1/section2.png"></img>
          </div>

          <div className="second-col">
            <h2 className="title-2">A Global GraphQL API</h2>
            <p className="text-22">
              Subgraphs can be composed into a global graph of all the world's
              public information. This data can be transformed, organized, and
              shared across applications for anyone to query with just a few
              keystrokes.
            </p>
          </div>
        </div>
      </section>

      {/*--------------- Section 3 ----------------- */}
      <section className="section-3">
        <div className="borderBox">
          <h1 className="title-1">
            Say goodbye to custom <br /> servers
          </h1>

          <p className="text-1">
            Before the Graph, teams had to develop and operate proprietary
            indexing servers. <br /> This required significant engineering and
            hardware resources and broke the <br />
            important security properties required for decentralization.
          </p>
        </div>
      </section>
    </>
  );
}
