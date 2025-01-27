# WebRTC Messaging and Live Video Call App

This project is a simple peer-to-peer messaging and live video calling application built using WebRTC. It allows users to send text messages and initiate live video calls directly from their browsers without the need for a centralized server for media streaming.

---

## Features

- **Peer-to-Peer Communication**:
  - Establish a direct connection between peers using WebRTC.
  - Supports both text messaging and live video/audio calls.

- **Real-Time Signaling**:
  - Exchange signaling data (SDP) via user inputs to initiate connections.

- **Video and Audio Streaming**:
  - Capture and stream video and audio from the user's device.
  - Display the incoming video and audio streams in the browser.

---

## How It Works

1. **Signaling**:
   - Use the `YourId` and `OtherId` fields to manually exchange signaling data (SDP offers and answers) between peers.

2. **Initiation**:
   - One peer acts as the initiator by appending `#init` to the URL.
   - The second peer connects using the signaling data shared by the initiator.

3. **Messaging**:
   - Send text messages over the WebRTC data channel.

4. **Media Streaming**:
   - Use the device's webcam and microphone to stream video and audio.

---

## Prerequisites

1. **Node.js**: Ensure Node.js is installed for dependency management.
2. **Browser Compatibility**: Use a modern browser that supports WebRTC (e.g., Chrome, Firefox, Edge).

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SamarthKuchya/P2P-Chat-and-call
   cd P2P-Chat-and-call
   ```

2. **Install Dependencies**:
   ```bash
   npm install getusermedia simple-peer
   ```

3. **Run the Application**:
   Open the `index.html` file in a browser to test the functionality.

---

## Usage

1. Open the application in two browser tabs or devices.
2. **Initiator**:
   - In one tab, add `#init` to the URL to set the peer as the initiator.
   - Copy the `YourId` value and share it with the other peer.

3. **Responder**:
   - Paste the `YourId` value from the initiator into the `OtherId` field.
   - Click the "Connect" button to establish a connection.

4. **Messaging**:
   - Enter a message in the "YourMessage" field and click "Send."
   - Messages will appear in the "Messages" area.

5. **Video Call**:
   - Video and audio streams will start automatically upon connection.

---

## Code Overview

### Key Components

- **Signaling**:
  - Uses `peer.signal` to exchange SDP offers and answers between peers.

- **Data Channel**:
  - Sends and receives text messages using `peer.send` and `peer.on('data')`.

- **Media Streaming**:
  - Captures local video/audio streams using `getUserMedia`.
  - Displays remote streams via the `peer.on('stream')` event.

### Functions

1. **`showWebcam(stream)`**:
   - Appends a video element to the document to display the user's webcam stream.

2. **`audio(audiostream)`**:
   - Appends an audio element to the document to play incoming audio streams.

---

## Dependencies

- **simple-peer**: Simplifies WebRTC peer-to-peer connections.
- **getusermedia**: Facilitates access to the user's webcam and microphone.

---

## License
This project is open-source and available under the MIT License.

---

## Author
Created by **Samarth**. Contributions and feedback are welcome!

