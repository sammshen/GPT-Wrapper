1. Make sure to create an .env file with:

`OPENAI_API_KEY=sk-abc123secret`

2. Deploy with uvicorn:

Inside the backend/ directory, run:
`uvicorn main:app --reload --port <port>`

- Add `--host 0.0.0.0` if you want to listen/bind to all interfaces/IP

- Add `nohup` in the beginning to keep the backend running even if break `ssh` with your VM and `&` at the end to run as a background process

Total: `nohup uvicorn main:app --host 0.0.0.0 --port 8001 &`

3. Test with curl/Postman

`curl -X POST http://localhost:<port>/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Explain black holes in 5 words"}' `

