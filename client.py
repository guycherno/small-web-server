import asyncio
import websockets

async def hello():
    uri = "ws://localhost:8080"  # Replace with your WebSocket server URI

    async with websockets.connect(uri) as websocket:
        # Send a message to the server
        message = "Hello, server!"
        await websocket.send(message)
        print(f"Sent: {message}")

        # Receive a response from the server
        response = await websocket.recv()
        print(f"Received: {response}")

# Run the WebSocket client
asyncio.get_event_loop().run_until_complete(hello())
