
// let init = () => {
//     let eventSource = new EventSource(`${Peer.location.signal}/${Peer.id}?recipient=${Peer.recipient}&initiator=${Peer.initiator}`);
// }

async function signalServer() {
    return new Promise( async (resolve, reject) => {
        try {
            eventSource.onmessage = function(event) {
                try {
                    let res = JSON.parse(event.data)
                    switch (res.status)  {
                        case "peer save connect":
                            emoji('peer save connect'),
                                next("peer save connect", false)
                            Peer.isEvents = true
                            break
                        case "post: incoming message offer":
                            (isEmpty(Peer.core))
                                ? (
                                    emoji('incoming message offer'),
                                        Peer.message.offer = res.message,
                                        next("post: incoming message offer-events",false),
                                        Peer.isEvents = true
                                )
                                : (
                                    emoji('incoming message offer'),
                                        Peer.message.offer = res.message,
                                        next("post: incoming message offer-offer",false),
                                        Peer.isOffer = true
                                )
                            break
                        case "post: incoming message answer":
                            Peer.message.answer = res.message
                            emoji('incoming message answer'),
                                next("post: incoming message answer", false)
                            Peer.isAnswer = true
                            break
                        default:
                            break
                    }
                    API.class.peer.info.status[0].textContent = res.status
                } catch (e) {
                    let error = e
                    console.log('error',error)
                }
            };
            eventSource.onopen = function (event) {
                let state = ''
                switch (eventSource.readyState) {
                    case 0:
                        state = "CONNECTING"
                        break
                    case 1:
                        state = "OPEN"
                        break
                    case 2:
                        state = "CLOSED"
                        break
                    default:
                        break
                }
                console.log('events',  state)
            };
            eventSource.onerror = function(e) {
                // console.log('error', e)
            };
            Peer.signal = eventSource
            resolve({
                success: false,
                status: false
            })
        } catch (e) {
            resolve({
                message: e.message,
                success: true,
                status: true
            })
        }
    })
}