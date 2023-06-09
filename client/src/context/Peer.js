"use client";
const {
  useContext,
  useMemo,
  createContext,
  useEffect,
  useState,
} = require("react");

const PeerContext = createContext(null);

export const usePeer = () => useContext(PeerContext);

export const PeerProvider = (props) => {
  const [domLoaded, setDom] = useState(false);
  useEffect(() => {
    setDom(true);
  }, []);

  const peer = useMemo(() => {
    if (domLoaded) {
      new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      });
    }
  }, []);

  const getOffer = async () => {
    if (peer) {
      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);
      return offer;
    }
  };

  const getAnswer = async (offer) => {
    if (peer) {
      await this.peer.setRemoteDescription(offer);
      const ans = await this.peer.createAnswer();
      await this.peer.setLocalDescription(new RTCSessionDescription(ans));
      return ans;
    }
  };
  const setLocalDescription = async (ans) => {
    if (peer) {
      await peer.setRemoteDescription(new RTCSessionDescription(ans));
    }
  };

  return (
    <PeerContext.Provider
      value={{ peer, getOffer, getAnswer, setLocalDescription }}
    >
      {props.children}
    </PeerContext.Provider>
  );
};
