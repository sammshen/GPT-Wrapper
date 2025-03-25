1. Make sure to create an .env file with:

`OPENAI_API_KEY=sk-abc123secret`

2. Deploy with uvicorn:

Inside the backend/ directory, run:
`uvicorn main:app --reload --port <port>`

Add `--host 0.0.0.0` if you want to listen/bind to all interfaces/IP

3. Test with curl/Postman

`curl -X POST http://localhost:<port>/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Explain black holes in 5 words"}' `

