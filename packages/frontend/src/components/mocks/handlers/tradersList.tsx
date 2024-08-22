// tradersHandlers.ts
import { http, HttpResponse, delay } from "msw";
import { baseUrl } from "../../../App";

export const handlers = {
  loading: http.get(`${baseUrl}/topTraders`, () => {
    return delay("infinite");
  }),

  error: http.get(`${baseUrl}/topTraders`, () => {
    return HttpResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }),

  empty: http.get(`${baseUrl}/topTraders`, () => {
    return HttpResponse.json(
      {
        result: {
          data: {
            traders: [],
          },
        },
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  }),

  withData: http.get(`${baseUrl}/topTraders`, () => {
    return HttpResponse.json(
      {
        result: {
          data: {
            traders: [
              {
                id: "1",
                displayName: "John Doe",
                avatar: "/avatar.png",
                username: "@johndoe",
                roi: 100,
              },
              {
                id: "2",
                displayName: "Jane Doe",
                avatar: "/avatar.png",
                username: "@janedoe",
                roi: -20,
              },
            ],
          },
        },
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  }),
};
