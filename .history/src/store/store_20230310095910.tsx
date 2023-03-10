export const store = configureStore({
    //Adding reducer
    reducer: {
      [campaignsApi.reducerPath]: campaignsApi.reducer,
    },
    // Adding midleware for caching of the server data
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(campaignsApi.middleware),
  });

function configureStore(arg0: {
    //Adding reducer
    reducer: { [x: number]: any; };
    // Adding midleware for caching of the server data
    middleware: (getDefaultMiddleware: any) => any;
}) {
    throw new Error("Function not implemented.");
}
  