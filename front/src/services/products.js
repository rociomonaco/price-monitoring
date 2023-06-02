import { axios } from '@services/axiosConfig'

export const createProduct = ({
  name,
  sku,
  pvp,
  outPvp,
  description,
  searchTerms,
  requiredWords,
  wordsToExclude
}) => {
  return axios.post('/products/create', {
    name,
    sku,
    pvp,
    out_pvp: outPvp,
    description,
    search_terms: searchTerms,
    required_words: requiredWords,
    words_to_exclude: wordsToExclude
  })
}

export const getAllProducts = () => {
  return axios.get('/products/get')
}
