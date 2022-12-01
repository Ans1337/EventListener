import Header from "../Components/Header";
import { useState } from "react";

const subgraph = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [events, setEvents] = useState([]);
  const [url, setURL] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const submitContractAddress = (e) => {
    e.preventDefault();
    console.log(contractAddress);

    fetch("/api/getABI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contractAddress }),
    })
      .then((response) => response.json())
      .then((data) => {
        const abi = JSON.parse(data);

        // Filter the abi for event types
        const events = abi.filter((item) => item.type === "event");
        setEvents(events);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createListener = (e) => {
    e.preventDefault();

    console.log("We are going to create a listener for this event");
    console.log(events[selectedEvent]);
  };

  return (
    <>
      <Header></Header>
      <section className="sectionsss">
        <div className="subgraph-background">
          <div className="subgraph-address-div">
            {/* <input className="subgraph-address-input" type="text" placeholder="Contract Address" onChange={(e) => setContractAddress(e.target.value)} /> */}
            <form action="" className="search-bar">
              <input
                name="search"
                type="search"
                required
                autoComplete="off"
                placeholder="Contract Address"
                onChange={(e) => setContractAddress(e.target.value)}
              />

              <button
                className="search-button"
                type="submit"
                onClick={submitContractAddress}
              >
                <span>Next</span>
              </button>
            </form>

            {/* <button onClick={submitContractAddress} className="subgraph-button">
              Next
            </button> */}
          </div>
          <div className="subgraph-temp subgraph-center-events">
            {events.length > 0 && <h1 className="title">Events Available</h1>}
            {events.length > 0 &&
              events.map((event, index) => {
                return (
                  <div key={index} className="subgraph-events-generated">
                    <input
                      className="circle"
                      type="radio"
                      name="event"
                      onChange={(e) => setSelectedEvent(e.target.value)}
                      value={index}
                    />
                    <h4 className="">{event.name}</h4>
                    <p>
                      {event.inputs.map((input, index) => {
                        return (
                          <span key={index}>
                            {input.name} - {input.type}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                );
              })}
          </div>
          <div>
            {events.length > 0 && (
              <div className="subgraph-center-events">
                <div>Event Action</div>
                <p>What to do when we hear an event?</p>
                <label htmlFor="url" />
                <input
                  type="text"
                  placeholder="URL"
                  onChange={(e) => setURL(e.target.value)}
                />
                <button className="showMore-button" onClick={(e) => createListener(e)}>
                  Start Listening
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default subgraph;
