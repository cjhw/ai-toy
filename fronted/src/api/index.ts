import axios from 'axios'

export function apiGenerateImage(prompt: string) {
  return axios.post('/api/generateImage', {
    prompt,
  })
}

export function apiconversation(question: string) {
  return axios.post('/api/conversation', {
    question,
  })
}
