export const search = async (query) => {
  try {
    let response = await fetch(`http://api.zhuishushenqi.com/book/fuzzy-search?query=${query}`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const book = async (id) => {
  try {
    let response = await fetch(`http://api.zhuishushenqi.com/book/${id}`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const toc = async (id) => {
  try {
    let response = await fetch(`http://api.zhuishushenqi.com/toc/${id}?view=chapters`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const chapter = async (link) => {
  try {
    let response = await fetch(`http://api.zhuishushenqi.com/chapter/${link}`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const autocomplate = async (query) => {
  try {
    let response = await fetch(`http://api.zhuishushenqi.com/auto-complet?query=${link}`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}