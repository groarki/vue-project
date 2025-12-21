import { clientFetch } from '../clientFetch'

const BEST_P_URL = '/points'

export const getFavouritePlaces = () => {
  return clientFetch.get(BEST_P_URL).then(({ data }) =>
    data.map((place) => ({
      ...place,
      id: place._id,
    })),
  )
}

export const addFavouritePlaces = (body) => {
  return clientFetch.post(BEST_P_URL, body)
}

export const updateFavouritePlaces = (body) => {
  return clientFetch.put(BEST_P_URL, body)
}

export const deletePlaces = (id) => {
  return clientFetch.delete(`${BEST_P_URL}/${id}`)
}
