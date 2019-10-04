# makeitcheaper
curl -d '{"url":"www.youtube.com"}' -H "Content-Type: application/json" -X POST http://localhost:9000
{"short-url":"/6213","url":"www.youtube.com"}
curl -v localhost:4000/6213
