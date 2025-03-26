async function sendMessage() {
    const userInput = document.getElementById("userInput").value;

    const responseArea = document.getElementById("responseArea");
    responseArea.innerText = "Waiting for response...";

    try {
        const res = await fetch("http://143.110.156.171:8001/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });

        if (!res.ok) {
            const errorData = await res.json();
            responseArea.innerText = `Error: ${errorData.error || res.statusText}`;
            return;
        }

        const data = await res.json();
        responseArea.innerText = `ChatGPT: ${data.reply}`;
    } catch (err) {
        responseArea.innerText = `Network error: ${err.message}`;
    }
}
