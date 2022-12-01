import Link from 'next/link';

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
          The Google of Blockchain is an indexing protocol for querying networks
          like Ethereum and IPFS. Anyone can build and Publish open APIs called
          subgraphs, making data easily accessible.
        </p>

        <Link className="button-1" href="/subgraph">Explore Subgraphs</Link>
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
            Before the Google of Blockchain, teams had to develop and operate
            proprietary indexing servers. <br /> This required significant
            engineering and hardware resources and broke the <br />
            important security properties required for decentralization.
          </p>
        </div>
      </section>

      {/* ---------------- Section 4 ----------------- */}
      <section class="section-4">
        <p className="title-1">Actors for Google of Blockchains </p>
        <p>Our whole system depends upon these indivisuals.</p>

        <div class="row">
          {/* <!-- pic 1 --> */}
          <div class="course-col">
            <img class="image" src="assets1/Indexer.png" />
            <h5 className="text-2">Indexer</h5>
            <p>
              Can join network and stake GRT tokens to play as indexers, that
              can run a node. Their main function is: they can index a subgraph,
              earn rewards, and can set the price for the services they provide.
            </p>
          </div>

          {/* <!-- pic 2 --> */}
          <div class="course-col">
            <img class="image" src="assets1/Curator.svg" />
            <h5 className="text-2">Curator</h5>
            <p>
              uses GRT tokens to highlight which subgraphs are worth indexing.
              Curators are the end users that finds particular subgraphs are
              worth indexing.
            </p>
          </div>

          {/* <!-- pic 3 --> */}
          <div class="course-col">
            <img class="image" src="assets1/Delegator.png" />
            <h5 className="text-2">Delegators</h5>
            <p>
              stake GRT tokens on the behalf of indexers. So that they can earn
              a portion of the rewards of indexers. They don’t have to run a
              node.
            </p>
          </div>
        </div>
        <button class="showMore-button">SHOW MORE</button>
      </section>
    </>
  );
}
